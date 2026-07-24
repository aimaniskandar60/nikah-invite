const formId = "1FAIpQLSfl5mE2mJtIYQ5ukYDPnrwsTbpcil0MQtGU1UXeFZXZdBXmaQ";
const formViewUrl = `https://docs.google.com/forms/d/e/${formId}/viewform`;

export const rsvpConfig = {
  formId,
  formViewUrl,
  formEmbedUrl: `${formViewUrl}?embedded=true`,
  guidance: {
    deadline: "September 15, 2026",
    notes: [
      "If the form does not load, use the direct RSVP link below.",
      "If you have urgent updates after submitting, contact the family directly.",
    ],
  },
};