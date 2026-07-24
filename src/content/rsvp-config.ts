const formId = "1FAIpQLSfl5mE2mJtIYQ5ukYDPnrwsTbpcil0MQtGU1UXeFZXZdBXmaQ";
const formViewUrl = `https://docs.google.com/forms/d/e/${formId}/viewform`;

export const rsvpConfig = {
  formId,
  formViewUrl,
  entries: {
    guestName: "184835722",
    attendance: "877086558",
    guests: "1498135098",
  },
  defaults: {
    guestName: "",
    attendance: "Yes",
    guests: "1",
  },
  guidance: {
    deadline: "September 15, 2026",
    notes: [
      "If the form does not load, use the direct RSVP link below.",
      "If you have urgent updates after submitting, contact the family directly.",
    ],
  },
} as const;