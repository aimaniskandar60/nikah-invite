"use client";

import { FormEvent, useId, useState } from "react";

type AttendanceValue = "Yes" | "No";

type RsvpFormProps = {
  formId: string;
  guestNameEntryId: string;
  attendanceEntryId: string;
  guestsEntryId: string;
  defaultGuestName?: string;
  defaultAttendance?: AttendanceValue;
  defaultGuests?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function RsvpForm({
  formId,
  guestNameEntryId,
  attendanceEntryId,
  guestsEntryId,
  defaultGuestName = "",
  defaultAttendance = "Yes",
  defaultGuests = "1",
}: RsvpFormProps) {
  const frameName = `google-form-submit-${useId()}`;
  const submissionUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
  const [guestName, setGuestName] = useState(defaultGuestName);
  const [attendance, setAttendance] = useState<AttendanceValue>(defaultAttendance);
  const [guests, setGuests] = useState(defaultGuests);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setSubmitState("submitting");

    if (!guestName.trim() || (attendance === "Yes" && !guests.trim())) {
      event.preventDefault();
      setSubmitState("error");
    }
  }

  function handleSubmissionFrameLoad() {
    if (submitState === "submitting") {
      setSubmitState("success");
    }
  }

  return (
    <>
      <iframe name={frameName} title="Google Form Submission" className="hidden" onLoad={handleSubmissionFrameLoad} />
      <form
        action={submissionUrl}
        method="POST"
        target={frameName}
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div>
          <label htmlFor="guest-name" className="text-sm uppercase tracking-[0.16em] text-stone-500">
            Guest Name
          </label>
          <input
            id="guest-name"
            name={`entry.${guestNameEntryId}`}
            type="text"
            required
            value={guestName}
            onChange={(event) => {
              setGuestName(event.target.value);
              if (submitState === "error") {
                setSubmitState("idle");
              }
            }}
            placeholder="Enter your name"
            className="mt-3 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none ring-stone-300 transition focus:ring"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-stone-500">Attendance</p>
          <fieldset className="mt-3 flex flex-wrap gap-3" aria-label="Attendance response">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-800">
              <input
                type="radio"
                name={`entry.${attendanceEntryId}`}
                value="Yes"
                checked={attendance === "Yes"}
                onChange={() => {
                  setAttendance("Yes");
                  if (submitState === "error") {
                    setSubmitState("idle");
                  }
                }}
                className="h-4 w-4 accent-stone-900"
                required
              />
              Yes
            </label>
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-800">
              <input
                type="radio"
                name={`entry.${attendanceEntryId}`}
                value="No"
                checked={attendance === "No"}
                onChange={() => {
                  setAttendance("No");
                  if (submitState === "error") {
                    setSubmitState("idle");
                  }
                }}
                className="h-4 w-4 accent-stone-900"
                required
              />
              No
            </label>
          </fieldset>
        </div>

        {attendance === "Yes" ? (
          <div>
            <label htmlFor="guest-count" className="text-sm uppercase tracking-[0.16em] text-stone-500">
              Number of Guests
            </label>
            <input
              id="guest-count"
              name={`entry.${guestsEntryId}`}
              type="number"
              min={0}
              max={20}
              required
              value={guests}
              onChange={(event) => {
                setGuests(event.target.value);
                if (submitState === "error") {
                  setSubmitState("idle");
                }
              }}
              className="mt-3 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none ring-stone-300 transition focus:ring"
            />
          </div>
        ) : (
          <input type="hidden" name={`entry.${guestsEntryId}`} value="0" />
        )}

        <div className="pt-1">
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitState === "submitting" ? "Submitting..." : "Submit RSVP"}
          </button>
        </div>

        {submitState === "success" ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
            Thank you. Your RSVP has been sent.
          </p>
        ) : null}

        {submitState === "error" ? (
          <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
            We could not submit your RSVP right now. Please try again.
          </p>
        ) : null}
      </form>
    </>
  );
}