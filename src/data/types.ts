// Shared content shape for the saga-os landing page.
// Both content.en.ts and content.id.ts implement this `Content` interface so the
// page sections render from a single typed source per locale.
//
// Rules this content layer must honour (see antislop-copywriting + task brief):
// no em dashes anywhere, no invented stats / testimonials / customers, roadmap
// items (Codex) labelled as coming and never live, and any missing real proof or
// pricing left as a visible `TODO:` string for the owner to fill before launch.

// ---------------------------------------------------------------------------
// Primitive types (shapes mirrored from landing/web/src/data/content.id.ts)
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
}

export interface FeatureItem {
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface LinkGroup {
  heading: string;
  links: NavLink[];
}

// ---------------------------------------------------------------------------
// Section shapes
// ---------------------------------------------------------------------------

export interface MetaContent {
  title: string;
  description: string;
  ogImageAlt: string;
}

export interface NavContent {
  brand: string;
  links: NavLink[];
  primaryCta: Cta;
}

export interface HeroContent {
  headline: string;
  subhead: string;
  ctaPrimary: Cta;
  ctaSecondary: Cta;
  microcopy: string;
  // Labels for the stylized Workspace mock rendered beside the copy.
  mockTitle: string;
  mockStatus: string;
  mockReasoning: string;
  mockToolCall: string;
  mockMeter: string;
}

export interface SocialProofContent {
  heading: string;
  body: string;
  // Honest proof framing only. Until real proof exists these carry a visible
  // TODO string the owner replaces before public launch.
  note: string;
  proofPlaceholder: string;
}

export interface AgentCard {
  name: string;
  job: string;
  shift: string;
  engine: string;
}

export interface AgentsContent {
  eyebrow: string;
  heading: string;
  subhead: string;
  roster: AgentCard[];
  shiftNote: string;
}

export interface ApprovalStep {
  title: string;
  body: string;
}

export interface PolicyLevel {
  level: string;
  body: string;
}

export interface ApprovalLoopContent {
  eyebrow: string;
  heading: string;
  subhead: string;
  steps: ApprovalStep[];
  policyHeading: string;
  policyLevels: PolicyLevel[];
  strictNote: string;
  guarantee: string;
}

export interface FeaturesContent {
  eyebrow: string;
  heading: string;
  subhead: string;
  items: FeatureItem[];
}

export interface IntegrationEngine {
  name: string;
  body: string;
}

export interface IntegrationsContent {
  eyebrow: string;
  heading: string;
  subhead: string;
  engines: IntegrationEngine[];
  capabilities: FeatureItem[];
  roadmapLabel: string;
  roadmapNote: string;
}

export interface MultiCompanyContent {
  eyebrow: string;
  heading: string;
  body: string;
  points: FeatureItem[];
}

export interface HowItWorksStep {
  title: string;
  body: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  subhead: string;
  steps: HowItWorksStep[];
}

export interface PricingContent {
  eyebrow: string;
  heading: string;
  body: string;
  points: FeatureItem[];
  ctaPrimary: Cta;
  earlyAccessNote: string;
}

export interface FaqContent {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
}

export interface FinalCtaContent {
  headline: string;
  subtext: string;
  ctaPrimary: Cta;
  microcopy: string;
}

export interface FooterContact {
  email: string;
  repo: string;
}

export interface FooterContent {
  tagline: string;
  linkGroups: LinkGroup[];
  contact: FooterContact;
  legal: NavLink[];
  copyright: string;
}

export interface WaitlistInterestOption {
  value: string;
  label: string;
}

export interface WaitlistContent {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  companyLabel: string;
  interestLabel: string;
  interestOptions: WaitlistInterestOption[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
}

// ---------------------------------------------------------------------------
// The full content shape
// ---------------------------------------------------------------------------

export interface Content {
  meta: MetaContent;
  nav: NavContent;
  hero: HeroContent;
  socialProof: SocialProofContent;
  agents: AgentsContent;
  approvalLoop: ApprovalLoopContent;
  features: FeaturesContent;
  integrations: IntegrationsContent;
  multiCompany: MultiCompanyContent;
  howItWorks: HowItWorksContent;
  pricing: PricingContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
  waitlist: WaitlistContent;
}
