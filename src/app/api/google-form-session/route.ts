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
