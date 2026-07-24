const formViewUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfl5mE2mJtIYQ5ukYDPnrwsTbpcil0MQtGU1UXeFZXZdBXmaQ/viewform";

export const rsvpConfig = {
  formViewUrl,
  formEmbedUrl: `${formViewUrl}?embedded=true`,
  guidance: {
    deadline: "September 15, 2026",
    notes: [
      "Please submit one response per household when possible.",
      "If the form does not load, use the direct RSVP link below.",
      "If you have urgent updates after submitting, contact the family directly.",
    ],
  },
};
