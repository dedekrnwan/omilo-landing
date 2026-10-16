// Shared content shape for the Omilo landing page.
// content.en.ts and content.id.ts both implement `Content`, so every section
// renders from one typed source per locale.
//
// Rules for this content layer: no em dashes, no invented stats, customers or
// testimonials, and nothing sold as live that is not built yet. Example data in
// the product preview is labelled as an example on the page.

export interface NavLink { label: string; href: string }
export interface Item { title: string; body: string }

/** A helper (AI staff member). `mascot` picks the drawing in Mascot.astro. */
export type MascotKey = 'brand' | 'chief' | 'ops' | 'dev' | 'support' | 'finance' | 'marketing' | 'sales' | 'retro';
export type Tone = 'up' | 'run' | 'warn' | 'idle' | 'bad';

export interface MetaContent { title: string; description: string; ogImageAlt: string }

export interface NavContent {
  brand: string;
  tagline: string;
  links: NavLink[];
  cta: string;
  homeAriaLabel: string;
  languageLabel: string;
}

/** A row in the preview. Give `mascot` for a helper, or `icon` for anything else. */
export interface PreviewRow { mascot?: MascotKey; icon?: string; title: string; meta: string; status: string; tone: Tone }

export type NavKey = 'inbox' | 'workspace' | 'plan' | 'docs' | 'monitor' | 'team' | 'hire' | 'company' | 'settings' | 'harness' | 'connectors' | 'skills' | 'computer';

/** Sidebar of the product preview, mirroring the Saga OS app's NAV in Shell.tsx. */
export interface PreviewGroup { label: string; items: { key: NavKey; label: string }[] }

export interface PreviewStat { label: string; value: string; note?: string; tone?: Tone }
export interface PreviewChat { who: 'you' | MascotKey; name: string; text: string }
export interface PreviewGoal { goal: string; jobs: PreviewRow[] }

/** One page of the preview. Fill whichever of rows / stats / chat / goals fits the page. */
export interface PreviewView {
  key: Exclude<NavKey, 'inbox'>;
  title: string;
  subtitle: string;
  rows?: PreviewRow[];
  stats?: PreviewStat[];
  chat?: PreviewChat[];
  goals?: PreviewGoal[];
}

export interface HeroPreview {
  company: string;
  groups: PreviewGroup[];
  controlLabel: string;
  pause: string;
  resume: string;
  pausedChip: string;
  user: string;
  inboxTitle: string;
  waiting: string;
  proposal: {
    title: string; meta: string; status: string; why: string;
    approve: string; reject: string; adjust: string; notePlaceholder: string; noteValue: string; send: string;
    approved: string; adjusted: string; rejectedPrefix: string; rejectedSuffix: string;
  };
  rows: PreviewRow[];
  views: PreviewView[];
  sample: string;
}

export interface HeroContent {
  kicker: string;
  headline: string;
  headlineSoft: string;
  subhead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  crewNote: string;
  preview: HeroPreview;
}

export interface SectionHead { eyebrow: string; heading: string; subhead?: string }

export interface LoopContent extends SectionHead {
  steps: Item[];
  /** Index of the step where the owner decides (drawn inverted). */
  youIndex: number;
  retroTitle: string;
  retroBody: string;
}

export interface HelperRow { mascot: MascotKey; name: string; when: string; job: string; output: string; tone: Tone }

export interface HelpersContent extends SectionHead {
  columns: { helper: string; when: string; job: string; output: string };
  rows: HelperRow[];
  note: string;
}

export interface WorkspaceContent extends SectionHead {
  items: (Item & { icon: 'plan' | 'inbox' | 'chat' | 'kpi' | 'monitor' | 'docs' })[];
}

export interface GuardrailsContent extends SectionHead {
  neverHeading: string;
  never: string[];
  alwaysHeading: string;
  always: string[];
}

export interface EnginesContent extends SectionHead {
  engines: { label: string; title: string; body: string }[];
}

export interface GrowthContent extends SectionHead {
  items: { label: string; title: string; body: string }[];
}

export interface OfferPlan {
  label: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
  /** 'repo' links to the source; 'waitlist' opens the waitlist dialog. */
  action: 'repo' | 'waitlist';
  highlight?: boolean;
}

export interface OfferContent extends SectionHead {
  plans: OfferPlan[];
  note: string;
}

export interface DemoContent extends SectionHead { videoSrc: string; caption?: string }

export interface FinalCtaContent { headline: string; subtext: string; cta: string; microcopy: string }

export interface FooterContent { tagline: string; note: string; contactLabel: string; email: string; sourceLabel: string; copyright: string }

export interface WaitlistInterestOption { value: string; label: string }

export interface WaitlistContent {
  title: string; subtitle: string;
  nameLabel: string; namePlaceholder: string;
  emailLabel: string; emailPlaceholder: string;
  companyLabel: string; companyPlaceholder: string;
  interestLabel: string; selectPlaceholder: string;
  interestOptions: WaitlistInterestOption[];
  submitLabel: string; submitSending: string;
  successTitle: string; successMessage: string;
  closeLabel: string; errorMessage: string;
  validationNameRequired: string; validationEmailRequired: string; validationEmailInvalid: string;
  connectionError: string;
}

export interface Content {
  meta: MetaContent;
  nav: NavContent;
  hero: HeroContent;
  demo: DemoContent;
  loop: LoopContent;
  helpers: HelpersContent;
  workspace: WorkspaceContent;
  guardrails: GuardrailsContent;
  engines: EnginesContent;
  offer: OfferContent;
  growth: GrowthContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
  waitlist: WaitlistContent;
}
