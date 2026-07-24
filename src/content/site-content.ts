export type EventScheduleItem = {
  label: string;
  time: string;
};

export type EventDetails = {
  title: string;
  date: string;
  venue: string;
  address: string;
  mapsUrl: string;
  schedule: EventScheduleItem[];
};

export type SiteContent = {
  couple: {
    partnerOne: string;
    partnerTwo: string;
  };
  introLine: string;
  tagline: string;
  rsvpDeadline: string;
  contact: {
    name: string;
    phone: string;
    email?: string;
  };
  events: EventDetails[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const siteContent: SiteContent = {
  couple: {
    partnerOne: "Aiman Iskandar bin Murhiz",
    partnerTwo: "Noorazzalea binti Gazali",
  },
  introLine: "With gratitude to Allah, we invite you to celebrate our Nikah.",
  tagline: "Your presence and duas mean the world to us.",
  rsvpDeadline: "September 15, 2026",
  contact: {
    name: "Aiman",
    phone: "+60 1420 1234",
    email: "family@example.com",
  },
  events: [
    {
      title: "Nikah Ceremony",
      date: "Saturday, September 8, 2028",
      venue: "Azzalea's House",
      address: "123 Jalan Example, Kuala Lumpur",
      mapsUrl: "https://maps.google.com",
      schedule: [
        { label: "Guest Arrival", time: "10:30 AM" },
        { label: "Nikah", time: "11:00 AM" },
        { label: "Dua & Greetings", time: "12:00 PM" },
      ],
    },
    {
      title: "Walima Reception",
      date: "Sunday, September 27, 2026",
      venue: "Dewan Example",
      address: "456 Jalan Contoh, Shah Alam",
      mapsUrl: "https://maps.google.com",
      schedule: [
        { label: "Guest Arrival", time: "12:30 PM" },
        { label: "Lunch Reception", time: "1:00 PM" },
        { label: "Closing", time: "4:00 PM" },
      ],
    },
  ],
  faq: [
    {
      question: "What is the RSVP deadline?",
      answer:
        "Please submit your RSVP by September 15, 2026 so we can finalize seating and catering.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Please indicate your total number of attendees in the RSVP form. We will do our best to accommodate based on venue capacity.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "Modest formal attire is appreciated for both the ceremony and reception.",
    },
    {
      question: "Who should I contact for questions?",
      answer: "Use the contact details listed below and we will help as soon as possible.",
    },
  ],
};
