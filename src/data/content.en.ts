// Landing copy, English (default locale, served at /).
// No em dashes. No invented stats, customers or testimonials.
// The product preview uses a fictional example business and is labelled as an example.

import type { Content } from './types';

export const content: Content = {
  meta: {
    title: 'Omilo, grow your business with a team of AI staff',
    description:
      'Omilo gives your business a team of AI helpers that run the recurring work on a schedule, report back and propose the next step. Nothing important happens until you approve it.',
    ogImageAlt: 'The Omilo inbox, with AI helpers reporting their work and one proposal waiting for approval.',
  },

  nav: {
    brand: 'Omilo',
    tagline: 'AI staff for growing businesses',
    links: [
      { label: 'How it works', href: '#loop' },
      { label: 'Helpers', href: '#helpers' },
      { label: 'Guardrails', href: '#guardrails' },
      { label: 'Plans', href: '#offer' },
    ],
    cta: 'Early access',
    homeAriaLabel: 'Omilo, home',
    languageLabel: 'Language',
  },

  hero: {
    kicker: 'Open source · now in early access',
    headline: 'Grow your business',
    headlineSoft: 'with a team of AI helpers.',
    subhead:
      'Each helper owns a recurring job: operations, support, finance, marketing, sales, even code. They work on a schedule, report back, and propose the next step. Nothing important happens until you approve it.',
    ctaPrimary: 'Join the waitlist',
    ctaSecondary: 'See how it works',
    crewNote: 'A Chief of Staff and six helpers, ready on day one',
    preview: {
      company: 'Kopi Senja (example)',
      groups: [
        { label: 'Work', items: [{ key: 'inbox', label: 'Inbox' }, { key: 'workspace', label: 'Workspace' }, { key: 'plan', label: 'Plan' }, { key: 'docs', label: 'Docs' }, { key: 'monitor', label: 'Monitor' }] },
        { label: 'Company', items: [{ key: 'team', label: 'Team' }, { key: 'hire', label: 'Hire' }, { key: 'company', label: 'Company' }, { key: 'settings', label: 'Settings' }] },
        { label: 'Capabilities', items: [{ key: 'harness', label: 'Harness' }, { key: 'connectors', label: 'Connectors' }, { key: 'skills', label: 'Skills' }, { key: 'computer', label: 'Computer' }] },
      ],
      controlLabel: 'Control',
      pause: 'Pause all helpers',
      resume: 'Resume all helpers',
      pausedChip: 'Paused',
      user: 'You',
      inboxTitle: 'Inbox',
      waiting: '1 waits on you',
      proposal: {
        title: 'Publish 3 posts about the new delivery area',
        meta: 'Marketing · proposal',
        status: 'Waiting',
        why: 'Why: "do you deliver to my area?" was the top customer question this week (from Support).',
        approve: 'Approve',
        reject: 'Reject with note',
        adjust: 'Adjust with AI',
        notePlaceholder: 'Tell the helper what to change',
        noteValue: 'Two posts, and add a weekend promo.',
        send: 'Send note',
        approved: 'Approved. Marketing drafts the posts on its next run.',
        adjusted: 'Revision 2: two posts plus a short video script. Approve or reject it below.',
        rejectedPrefix: 'Rejected with note: "',
        rejectedSuffix: '". The next run reads it.',
      },
      rows: [
        { mascot: 'dev', title: 'Website change ready for review', meta: 'Dev · 13:00', status: 'Review', tone: 'run' },
        { mascot: 'ops', title: 'Orders, site and payments all healthy', meta: 'Ops · 14:00', status: 'OK', tone: 'up' },
        { mascot: 'support', title: "Yesterday's messages, grouped into 4 themes", meta: 'Support · 06:30', status: 'Done', tone: 'up' },
      ],
      views: [
        {
          key: 'workspace', title: 'Workspace', subtitle: 'Chat with the Chief of Staff or any helper',
          chat: [
            { who: 'you', name: 'You', text: 'What did customers ask about most this week?' },
            { who: 'chief', name: 'Chief of Staff', text: 'Delivery areas, by a wide margin. Marketing has proposed three posts about it. They are in your Inbox.' },
            { who: 'you', name: 'You', text: 'Make it two posts and add a weekend promo.' },
            { who: 'marketing', name: 'Marketing', text: 'Done. Revision 2 is waiting for your approval.' },
          ],
        },
        {
          key: 'plan', title: 'Plan', subtitle: 'Goals you set, and the jobs that move them',
          goals: [
            { goal: 'Grow online orders', jobs: [
              { mascot: 'marketing', title: 'Weekly posts about delivery', meta: 'Marketing', status: 'Working', tone: 'run' },
              { mascot: 'sales', title: 'Follow up catering leads', meta: 'Sales', status: 'Queued', tone: 'idle' },
              { mascot: 'dev', title: 'Add delivery zones to the website', meta: 'Dev', status: 'Waits on you', tone: 'warn' },
            ] },
            { goal: 'Keep customers happy', jobs: [
              { mascot: 'support', title: 'Draft replies within the hour', meta: 'Support', status: 'Done', tone: 'up' },
            ] },
          ],
        },
        {
          key: 'docs', title: 'Docs', subtitle: 'What your helpers know and remember',
          rows: [
            { icon: 'docs', title: 'Brand voice', meta: 'Edited by you · Mon', status: 'Pinned', tone: 'idle' },
            { icon: 'docs', title: 'Menu and prices', meta: 'Updated by Ops · Tue', status: 'Shared', tone: 'idle' },
            { icon: 'docs', title: 'Lesson: short posts with a photo did best', meta: 'Weekly retro · Fri', status: 'Memory', tone: 'run' },
            { icon: 'docs', title: 'Run log: Support, Thursday', meta: 'Support · Thu 06:30', status: 'Log', tone: 'idle' },
          ],
        },
        {
          key: 'monitor', title: 'Monitor', subtitle: 'Last 7 days',
          stats: [
            { label: 'Jobs finished', value: '46', note: 'up from 39', tone: 'up' },
            { label: 'Success rate', value: '94%', note: '3 retried', tone: 'up' },
            { label: 'Waiting on you', value: '1', note: 'Marketing proposal', tone: 'warn' },
            { label: 'Spend this month', value: 'Rp 312 rb', note: 'of Rp 1 jt budget' },
          ],
        },
        {
          key: 'team', title: 'Team', subtitle: 'Your helpers and what they are doing now',
          rows: [
            { mascot: 'chief', title: 'Chief of Staff', meta: 'Hands out work · weekly retro', status: 'Ready', tone: 'idle' },
            { mascot: 'marketing', title: 'Marketing', meta: 'Drafting revision 2', status: 'Working', tone: 'run' },
            { mascot: 'support', title: 'Support', meta: 'Next run 06:30', status: 'Ready', tone: 'idle' },
            { mascot: 'ops', title: 'Ops', meta: 'Checked 14:00', status: 'Ready', tone: 'idle' },
            { mascot: 'sales', title: 'Sales', meta: 'Waiting on your goal update', status: 'Waiting', tone: 'warn' },
          ],
        },
        {
          key: 'hire', title: 'Hire', subtitle: 'Add a helper from a template, or describe your own',
          rows: [
            { icon: 'team', title: 'Bookkeeper', meta: 'Records sales and costs, flags gaps', status: 'Hire', tone: 'idle' },
            { icon: 'team', title: 'Content writer', meta: 'Posts, captions and newsletters', status: 'Hire', tone: 'idle' },
            { icon: 'team', title: 'Researcher', meta: 'Competitors, prices and suppliers', status: 'Hire', tone: 'idle' },
            { icon: 'team', title: 'Customer success', meta: 'Check-ins and reviews follow-up', status: 'Hire', tone: 'idle' },
          ],
        },
        {
          key: 'company', title: 'Company', subtitle: 'KPIs, each with an owner helper',
          stats: [
            { label: 'Monthly revenue', value: 'Rp 48 jt', note: '+8% vs last month', tone: 'up' },
            { label: 'Orders per week', value: '312', note: '+5%', tone: 'up' },
            { label: 'Repeat customers', value: '41%', note: 'target 45%', tone: 'warn' },
            { label: 'First reply time', value: '52 min', note: 'target 60 min', tone: 'up' },
          ],
        },
        {
          key: 'settings', title: 'Settings', subtitle: 'Rules every helper follows',
          rows: [
            { icon: 'settings', title: 'Strict mode', meta: 'Every outside action waits for you', status: 'On', tone: 'up' },
            { icon: 'settings', title: 'Monthly budget', meta: 'Alerts at 80% and 100%', status: 'Rp 1 jt', tone: 'idle' },
            { icon: 'settings', title: 'Time zone', meta: 'Schedules run in your local time', status: 'WIB', tone: 'idle' },
          ],
        },
        {
          key: 'harness', title: 'Harness', subtitle: 'The AI engines your helpers run on',
          rows: [
            { icon: 'harness', title: 'Claude Code', meta: 'Your own sign-in, in a container', status: 'Active', tone: 'up' },
            { icon: 'harness', title: 'Claude API', meta: 'Daily cost cap', status: 'Standby', tone: 'idle' },
            { icon: 'harness', title: 'Practice mode', meta: 'Pretend agent for trying things out', status: 'Off', tone: 'idle' },
          ],
        },
        {
          key: 'connectors', title: 'Connectors', subtitle: 'Apps your helpers can reach',
          rows: [
            { icon: 'connectors', title: 'Gmail', meta: 'Read and draft', status: 'Connected', tone: 'up' },
            { icon: 'connectors', title: 'Google Sheets', meta: 'Orders and costs', status: 'Connected', tone: 'up' },
            { icon: 'connectors', title: 'Instagram', meta: 'Posting', status: 'Ask me first', tone: 'warn' },
            { icon: 'connectors', title: 'Zapier', meta: 'Everything else', status: 'Connected', tone: 'up' },
          ],
        },
        {
          key: 'skills', title: 'Skills', subtitle: 'Reusable know-how your helpers share',
          rows: [
            { icon: 'skills', title: 'Write in our brand voice', meta: 'Used by Marketing, Support', status: '2 helpers', tone: 'idle' },
            { icon: 'skills', title: 'Weekly KPI report', meta: 'Used by Finance', status: '1 helper', tone: 'idle' },
            { icon: 'skills', title: 'Answer delivery questions', meta: 'Used by Support', status: '1 helper', tone: 'idle' },
          ],
        },
        {
          key: 'computer', title: 'Computer', subtitle: 'Where helpers work with files and the web',
          rows: [
            { icon: 'computer', title: 'Shared folders', meta: 'website, reports', status: '2 folders', tone: 'idle' },
            { icon: 'computer', title: 'Browser', meta: 'Dev opened your menu page · 13:02', status: 'Screenshot', tone: 'run' },
            { icon: 'computer', title: 'Terminal', meta: 'Website build passed · 13:05', status: 'OK', tone: 'up' },
          ],
        },
      ],
      sample: 'Example business and data · click around the menu',
    },
  },

  loop: {
    eyebrow: 'How it works',
    heading: 'Every helper runs the same loop',
    subhead:
      'A helper is triggered, gathers context, does the work, then reports with proposals. You decide. The next run carries out what you approved.',
    steps: [
      { title: 'Trigger', body: 'A schedule, an event, or you asking in Chat.' },
      { title: 'Context', body: "Goals, KPIs, memory and last run's notes." },
      { title: 'Work', body: 'Inside locked permissions and a budget.' },
      { title: 'Report', body: 'What happened, plus proposals.' },
      { title: 'You decide', body: 'Approve, or reject with a note it reads.' },
      { title: 'Execute', body: 'The next run does the approved work.' },
    ],
    youIndex: 4,
    retroTitle: 'Weekly retro, Friday 16:00.',
    retroBody: 'Up to three improvements a week, each measured, with automatic rollback and undo.',
  },

  helpers: {
    eyebrow: 'Your team',
    heading: 'Who works when',
    subhead:
      'The Chief of Staff hands out work toward your goals. Six helpers cover the week. Start with two and add one at a time as you trust them.',
    columns: { helper: 'Helper', when: 'Runs (default)', job: 'Job', output: 'Leaves you' },
    rows: [
      { mascot: 'ops', name: 'Ops', when: 'Hourly', job: 'Checks your site, orders, payments and queues.', output: 'Alert if something is off', tone: 'up' },
      { mascot: 'support', name: 'Support', when: 'Daily 06:30', job: "Reads yesterday's customer messages and groups them.", output: 'Themes + draft replies', tone: 'up' },
      { mascot: 'finance', name: 'Finance', when: 'Mon 07:00', job: 'Updates revenue, costs, churn and runway.', output: 'KPI scorecard', tone: 'up' },
      { mascot: 'marketing', name: 'Marketing', when: 'Mon 08:00', job: 'Plans the week of posts from real customer questions.', output: 'Content proposals', tone: 'warn' },
      { mascot: 'sales', name: 'Sales', when: 'Tue · Thu 09:00', job: 'Researches leads and drafts follow-ups.', output: 'Drafts, never sent', tone: 'idle' },
      { mascot: 'dev', name: 'Dev', when: '01:00 · 13:00', job: 'Picks one ready task on your website or app and builds it.', output: '1 change to review', tone: 'run' },
      { mascot: 'chief', name: 'Chief of Staff', when: 'Fri 16:00', job: 'Reviews the week and tunes how every helper works.', output: 'Up to 3 changes', tone: 'idle' },
    ],
    note: 'Schedules run in your own time zone. Change them, pause a helper, or hire a new one for any job that repeats.',
  },

  workspace: {
    eyebrow: 'The workspace',
    heading: "See what moves, what's stuck, and what waits on you",
    items: [
      { icon: 'plan', title: 'Plan', body: 'You set the goals; the Chief breaks them into jobs. The Work Map traces each job back to its goal.' },
      { icon: 'inbox', title: 'Inbox', body: 'One queue of decisions. Proposals keep their revision history.' },
      { icon: 'chat', title: 'Chat', body: 'Ask about any run, or rerun a helper with your instructions. Chat can propose; only you approve.' },
      { icon: 'kpi', title: 'KPIs', body: 'Value, trend, target and source on each KPI, with an owner helper who keeps it current.' },
      { icon: 'monitor', title: 'Monitor', body: 'A simple dashboard, or a virtual office where you watch helpers work. Only real events move.' },
      { icon: 'docs', title: 'Docs & memory', body: 'Lessons, run logs and company knowledge live as docs you can read and edit.' },
    ],
  },

  guardrails: {
    eyebrow: 'Guardrails',
    heading: 'Helpers propose. You decide.',
    subhead: 'Hard rules are enforced by a policy engine, not left to a prompt. Every action lands in an audit log.',
    neverHeading: 'Never without you',
    never: [
      'Send anything to customers',
      'Spend money',
      'Publish, merge code or deploy',
      'Change your production data',
      "Invent facts or promise what isn't real",
    ],
    alwaysHeading: 'Always on',
    always: [
      'Locked permissions, budgets and approvals',
      'Automatic retry on rate limits and short outages',
      'Social posting set to "Ask me first"',
      'Self-host it, or let us run it in our cloud',
      'Several businesses, fully separate, one login',
    ],
  },

  engines: {
    eyebrow: 'Engines',
    heading: 'Bring your own AI',
    subhead:
      'Pick the engine per helper. Practice mode runs the whole flow with a pretend agent, so you can try it before spending anything.',
    engines: [
      { label: 'Claude Code', title: 'Your own sign-in', body: 'Runs with your Claude Code login or API key, in a container on your server.' },
      { label: 'Claude API', title: 'Daily cost cap', body: 'Direct API calls that stop at the limit you set.' },
      { label: 'Practice mode', title: 'Free to try', body: 'A pretend agent walks through every step so you learn the flow.' },
    ],
  },

  offer: {
    eyebrow: 'Ways to use Omilo',
    heading: 'Open source at the core. Help when you want it.',
    subhead:
      'Omilo is open source, so you can run it yourself for free. When you would rather not do it alone, we set it up with you, support it, or run it for you.',
    plans: [
      {
        label: 'Open source',
        title: 'Self-host it',
        body: 'The full platform, free to run on your own server with your own AI.',
        points: ['Every feature on this page', 'Your data stays on your server', 'Community help on GitHub'],
        cta: 'View the source',
        action: 'repo',
      },
      {
        label: 'Consulting',
        title: 'Onboarding & support',
        body: 'We map the work that repeats in your business and set up helpers that fit it.',
        points: ['Setup on your server or ours', 'Helpers, goals and KPIs designed with you', 'Ongoing support and weekly tuning'],
        cta: 'Talk to us',
        action: 'waitlist',
        highlight: true,
      },
      {
        label: 'Cloud',
        title: 'Managed by us',
        body: 'We host, update and back up Omilo for you. Nothing to install.',
        points: ['Ready in a day', 'Updates and backups handled', 'Bring your own AI or use ours'],
        cta: 'Join the cloud waitlist',
        action: 'waitlist',
      },
    ],
    note: 'Consulting, support and cloud are quoted per business while we are in early access.',
  },

  growth: {
    eyebrow: 'Why owners use it',
    heading: 'Grow before you hire',
    subhead:
      'Most growing businesses hit the same wall: the owner is the bottleneck. Omilo takes the repeat work off your plate so your time goes to the decisions only you can make.',
    items: [
      { label: 'Time', title: 'Hours back every week', body: 'Reports, follow-ups, replies and checks get done on schedule without you starting them.' },
      { label: 'Focus', title: 'Decisions, not busywork', body: 'You see a short queue of proposals with the reasoning, and say yes, no, or change this.' },
      { label: 'Clarity', title: 'One view of the business', body: 'Goals, KPIs and every helper’s work in one place, updated by the helpers themselves.' },
    ],
  },

  finalCta: {
    headline: 'Hire your first AI staff',
    subtext: "Tell us what your business does and which work repeats every week. We'll help you set up your first two helpers.",
    cta: 'Join the waitlist',
    microcopy: 'Free and open source to self-host. Onboarding, support and cloud from our team.',
  },

  footer: {
    tagline: 'AI staff for growing businesses.',
    note: 'Early access. Some features are still being tested with real accounts.',
    contactLabel: 'Contact',
    sourceLabel: 'Source code',
    email: 'omilio@saga.co.id',
    copyright: '© 2026 Omilo',
  },

  waitlist: {
    title: 'Join the Omilo waitlist',
    subtitle: 'Tell us a little about your business and we will reach out when it is your turn.',
    nameLabel: 'Your name',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    companyLabel: 'Company',
    companyPlaceholder: 'Your company or project',
    interestLabel: 'What are you after?',
    selectPlaceholder: 'Select one...',
    interestOptions: [
      { value: 'self-host', label: 'Self-host the open source version' },
      { value: 'managed', label: 'Managed cloud' },
      { value: 'consulting', label: 'Onboarding and support' },
      { value: 'exploring', label: 'Just exploring for now' },
    ],
    submitLabel: 'Join the waitlist',
    submitSending: 'Sending...',
    successTitle: 'You are on the list.',
    successMessage: 'You are on the list. We will be in touch.',
    closeLabel: 'Close',
    errorMessage: 'Something went wrong. Please try again, or email omilio@saga.co.id.',
    validationNameRequired: 'Name is required.',
    validationEmailRequired: 'Email is required.',
    validationEmailInvalid: 'Please enter a valid email address.',
    connectionError: 'Connection failed, please try again.',
  },
};
