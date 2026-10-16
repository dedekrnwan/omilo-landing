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
  // Accessible label for the brand logo link (localized).
  homeAriaLabel: string;
}

export interface HeroMock {
  // Nav / breadcrumb labels shown in the AppShell sidebar and breadcrumb.
  navOverview: string;
  navActiveRuns: string;
  // Working card: the agent currently running a shift.
  agentName: string;
  agentRole: string;
  agentStatus: string;
  agentReasoning: string;
  // Token meter label.
  meterLabel: string;
  // Two queued rows beneath the working card.
  queuedRow1Name: string;
  queuedRow1State: string;
  queuedRow2Name: string;
  queuedRow2State: string;
}

export interface HeroContent {
  headline: string;
  subhead: string;
  ctaPrimary: Cta;
  ctaSecondary: Cta;
  microcopy: string;
  // Labels for the stylized Workspace mock rendered beside the copy.
  mock: HeroMock;
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
  // Screen-reader labels for the dt elements in each agent card.
  shiftLabel: string;
  engineLabel: string;
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
  capabilitiesLabel: string;
  capabilities: FeatureItem[];
  roadmapLabel: string;
  roadmapNote: string;
}

export interface MultiCompanyDiagram {
  // "One login" node labels.
  loginHeading: string;
  loginSub: string;
  // Shared label for the company cards: "Own agents + Inbox" equivalent.
  companyDetail: string;
  // Isolation badge label beneath each company card.
  isolatedLabel: string;
}

export interface MultiCompanyContent {
  eyebrow: string;
  heading: string;
  body: string;
  points: FeatureItem[];
  diagram: MultiCompanyDiagram;
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
  contactHeading: string;
  repoLabel: string;
  repoComingLabel: string;
}

export interface FooterContent {
  tagline: string;
  linkGroups: LinkGroup[];
  contact: FooterContact;
  legal: NavLink[];
  copyright: string;
  // Accessible label for the footer brand logo link (localized).
  homeAriaLabel: string;
  // Badge label for legal items that have no page yet.
  comingSoonLabel: string;
}

export interface WaitlistInterestOption {
  value: string;
  label: string;
}

export interface WaitlistContent {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  interestLabel: string;
  selectPlaceholder: string;
  interestOptions: WaitlistInterestOption[];
  submitLabel: string;
  submitSending: string;
  successTitle: string;
  successMessage: string;
  closeLabel: string;
  errorMessage: string;
  // Client-side validation messages (passed via data-* attributes to waitlist.ts).
  validationNameRequired: string;
  validationEmailRequired: string;
  validationEmailInvalid: string;
  // Inline error shown when the fetch itself fails (network error).
  connectionError: string;
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
