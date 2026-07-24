import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const formId = searchParams.get("formId")?.trim();

  if (!formId) {
    return NextResponse.json({ error: "Missing formId" }, { status: 400 });
  }

  try {
    const viewUrl = `https://docs.google.com/forms/d/e/${encodeURIComponent(formId)}/viewform`;

    const response = await fetch(viewUrl, {
      cache: "no-store",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to load Google Form" }, { status: 502 });
    }

    const html = await response.text();
    const fbzxMatch = html.match(/name="fbzx"\s+value="([^"]+)"/);

    if (!fbzxMatch?.[1]) {
      return NextResponse.json({ error: "Unable to parse Google Form session" }, { status: 502 });
    }

    return NextResponse.json({ fbzx: fbzxMatch[1] });
  } catch {
    return NextResponse.json({ error: "Failed to fetch Google Form session" }, { status: 500 });
  }
}

type SubmitPayload = {
  formId?: string;
  fields?: Record<string, string>;
};

export async function POST(request: Request) {
  let payload: SubmitPayload;

  try {
    payload = (await request.json()) as SubmitPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const formId = payload.formId?.trim();
  const fields = payload.fields;

  if (!formId) {
    return NextResponse.json({ error: "Missing formId" }, { status: 400 });
  }

  if (!fields || Object.keys(fields).length === 0) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

  try {
    const viewUrl = `https://docs.google.com/forms/d/e/${encodeURIComponent(formId)}/viewform`;
    const viewResponse = await fetch(viewUrl, {
      cache: "no-store",
      headers: {
        "User-Agent": userAgent,
      },
    });

    if (!viewResponse.ok) {
      return NextResponse.json({ error: "Unable to load Google Form" }, { status: 502 });
    }

    const viewHtml = await viewResponse.text();
    const fbzxMatch = viewHtml.match(/name="fbzx"\s+value="([^"]+)"/);
    const fbzx = fbzxMatch?.[1] ?? "";

    const formResponseUrl = `https://docs.google.com/forms/d/e/${encodeURIComponent(formId)}/formResponse`;
    const params = new URLSearchParams();

    for (const [entryId, value] of Object.entries(fields)) {
      params.set(`entry.${entryId}`, value);
    }

    if (fbzx) {
      params.set("fbzx", fbzx);
      params.set("fvv", "1");
      params.set("pageHistory", "0");
    }

    const submitResponse = await fetch(formResponseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "User-Agent": userAgent,
        Referer: viewUrl,
      },
      body: params.toString(),
      redirect: "manual",
    });

    if (submitResponse.status >= 200 && submitResponse.status < 400) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        error: "Google Form rejected submission",
        upstreamStatus: submitResponse.status,
      },
      { status: 502 },
    );
  } catch {
    return NextResponse.json({ error: "Failed to submit Google Form" }, { status: 500 });
  }
}
