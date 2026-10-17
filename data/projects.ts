export type ProjectLayout = "wide" | "tall" | "split";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    fit: "cover" | "contain";
    position?: string;
  };
  tags: string[];
  locked?: boolean;
  layout: ProjectLayout;
  codeUrl?: string;
  liveUrl?: string;
  status?: "shipped" | "in-progress";
};

export const projects: Project[] = [
  {
    id: "company-tickets",
    title: "Company Tickets",
    description:
      "Trucksoft's IT requests were scattered across WhatsApp threads with no shared view of what was open, urgent, or forgotten. I built a ticketing system with a public submission form, a status lookup page so requesters aren't left guessing, and an admin portal behind Supabase-authenticated middleware — with live updates over Supabase Realtime, priority filtering, and inline status changes that reflect instantly for every admin watching.",
    image: {
      src: "/projects/tickets.png",
      alt: "Company Tickets Dashboard",
      fit: "cover",
      position: "top",
    },
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind v4"],
    locked: true,
    layout: "wide",
  },
  {
    id: "simtrackr",
    title: "SimTrackr",
    description:
      "A mobile application designed for users to effortlessly manage data subscriptions. Uses on-device Google ML Kit OCR to extract receipt details.",
    image: {
      src: "/projects/simtrackr.jpg",
      alt: "SimTrackr Mobile App",
      fit: "contain",
    },
    tags: ["Flutter", "Riverpod", "ML Kit"],
    layout: "tall",
    codeUrl: "https://github.com/AdekolaDavid/SimTrackr",
  },
  {
    id: "funmisax",
    title: "Funmisax",
    description:
      "A client project for a Lagos-based gospel saxophonist. Designed and built a full artist portfolio and booking site — hero slideshow, event gallery, music integration with Spotify and Apple Music, media kit, and a booking flow through WhatsApp and email. Shipped on Vercel with full SEO, Open Graph, and custom favicon suite.",
    image: {
      src: "/projects/funmisax.png",
      alt: "Funmisax — Gospel Saxophonist Website",
      fit: "cover",
      position: "top",
    },
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind v4"],
    layout: "wide",
    liveUrl: "https://funmisax.com",
  },
  {
    id: "stockr",
    title: "StockR",
    description:
      "Trucksoft had SIM cards, tracking devices, and maintenance jobs moving between trucks, offices, and staff with no system of record. StockR covers telematics and office device inventory, bulk SIM imports from CSV with per-row validation, installation and repair job logging, maintenance reports, and a truck-level view that merges spend, installs, and repairs into one timeline. Ships as a role-gated PWA.",
    image: {
      src: "/projects/stockr.png",
      alt: "StockR Inventory UI",
      fit: "cover",
      position: "left",
    },
    tags: ["React", "Vite", "Supabase", "Lucide"],
    locked: true,
    layout: "split",
  },
  {
    id: "the-vault",
    title: "The Vault",
    description:
      "Started this because I kept rebuilding the same buttons, cards, and modals across projects. The Vault is where I'm collecting the ones worth keeping — free to grab, no bloat, just components that actually work.",
    image: {
      src: "/projects/vault.png",
      alt: "The Vault UI Component Library",
      fit: "cover",
      position: "top",
    },
    tags: ["Next.js", "TypeScript", "Supabase"],
    locked: false,
    layout: "wide",
    status: "in-progress",
  },
];
