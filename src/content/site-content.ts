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
  calendarUrl?: string;
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
};

export const siteContent: SiteContent = {
  couple: {
    partnerOne: "Azzalea",
    partnerTwo: "Aiman",
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
      mapsUrl: "https://maps.google.com/?q=123+Jalan+Example,+Kuala+Lumpur",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikah+-+Azzalea+%26+Aiman&dates=20280908T030000Z/20280908T050000Z&details=Join+us+to+celebrate+our+Nikah.&location=123+Jalan+Example,+Kuala+Lumpur",
      schedule: [
        { label: "Guest Arrival", time: "10:30 AM" },
        { label: "Nikah", time: "11:00 AM" },
        { label: "Dua & Greetings", time: "12:00 PM" },
      ],
    },
  ],
};
