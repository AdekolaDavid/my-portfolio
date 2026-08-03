export type ProjectLayout = "wide" | "tall" | "split";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    fit: "cover" | "contain";
    /** object-position, e.g. "top", "left", "center" */
    position?: string;
  };
  tags: string[];
  locked?: boolean;
  /**
   * Controls both the grid span AND the visual theme, to keep new cards
   * consistent with the existing three without a huge prop API:
   *  - "wide"  -> spans 2 of 3 cols, image on top, light card, blue-accent tags
   *  - "tall"  -> spans 1 of 3 cols, image contained on dark bg, blue card, white-outline tags
   *  - "split" -> spans all 3 cols, horizontal split, slate card, filled black/white tags
   */
  layout: ProjectLayout;
  /** Only rendered on "tall" layout cards, e.g. a repo link. Omit to hide the button. */
  codeUrl?: string;
  /** Omit for shipped/default. Set "in-progress" to show a small status badge. */
  status?: "shipped" | "in-progress";
};

export const projects: Project[] = [
  {
    id: "company-tickets",
    title: "Company Tickets",
    description:
      "A full-stack IT support ticketing system built for Trucksoft Limited. Features a real-time admin portal, role-based access control, and live dashboard metrics for rapid issue resolution.",
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
    codeUrl: "https://github.com/AdekolaDavid",
  },
  {
    id: "stockr",
    title: "StockR",
    description:
      "An internal inventory management web app for a logistics and telematics company. Allows the support team to track physical IT devices and SIM cards—managing stock levels, assignments, and history across operations.",
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
