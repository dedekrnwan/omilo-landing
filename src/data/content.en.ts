// Landing copy, English (default locale).
// Grounded in saga-os/README.md. No invented stats, customers, or testimonials.
// No em dashes anywhere. Roadmap items are labelled as coming, never as live.
// Missing real proof or pricing is left as a visible TODO for the owner.

import type { Content } from './types';

export const content: Content = {
  meta: {
    title: 'Saga OS, the office where you run a company of AI staff',
    description:
      'Saga OS is an open-source gateway for running a team of AI staff agents. Your agents propose the work, you decide in an Inbox, and approved work runs in code. You stay in control.',
    ogImageAlt: 'The Saga OS workspace showing an AI staff agent working while the owner reviews a proposal.',
  },

  nav: {
    brand: 'Saga OS',
    links: [
      { label: 'Your AI staff', href: '#agents' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    primaryCta: { label: 'Join the waitlist' },
  },

  hero: {
    headline: 'Run your business with a team of AI staff, and keep the final say.',
    subhead:
      'You are the bottleneck when every decision and task runs through you. Saga OS gives you a team of AI agents that do the work and propose what comes next. You approve it in an Inbox, and the approved work runs. Nothing goes out without your yes.',
    ctaPrimary: { label: 'Join the waitlist' },
    ctaSecondary: { label: 'See how it works' },
    microcopy: 'Open-source and self-hosted. You bring your own Claude and pay only for the usage.',
    mockTitle: 'Marketing agent, morning shift',
    mockStatus: 'Working',
    mockReasoning: 'Reviewing last week\'s posts, drafting three for your review.',
    mockToolCall: 'docs_read: Company/Voice.md',
    mockMeter: 'Tokens, cost and time tracked per run',
  },

  socialProof: {
    heading: 'Built for owners who run lean.',
    body:
      'Saga OS is for the small and medium business owner who does too much by hand. Digitize how your business runs, hand the repeat work to AI staff, and watch the numbers in one place, while you keep control of every outside action.',
    note: 'TODO: owner to add real proof here before public launch (named early users, a real repo star count, or a short quote from someone who ran it). Do not add any of this until it is real.',
    proofPlaceholder: 'TODO: real social proof pending',
  },

  agents: {
    eyebrow: 'Your AI staff',
    heading: 'A team that shows up for its shifts.',
    subhead:
      'Each agent has one job, a schedule, and the engine that powers it. The Chief of Staff runs the team and hands out work. You can hire, pause, or change any of them from the Team page.',
    roster: [
      {
        name: 'Chief of Staff',
        job: 'Runs the team, hands out work against your goals, and leads the weekly retro.',
        shift: 'Weekly retro on Fridays, digest on Mondays',
        engine: 'Claude Code',
      },
      {
        name: 'Sales',
        job: 'Tracks leads and deals and drafts the follow-ups for you to approve.',
        shift: 'Runs on the schedule you set',
        engine: 'Claude Code',
      },
      {
        name: 'Marketing',
        job: 'Drafts posts and campaigns in your voice and brings them to your Inbox.',
        shift: 'Runs on the schedule you set',
        engine: 'Claude Code',
      },
      {
        name: 'Dev',
        job: 'Works in the folders you share: install, build, test, and propose changes.',
        shift: 'Runs on the schedule you set',
        engine: 'Claude Code',
      },
      {
        name: 'Finance',
        job: 'Keeps your KPIs and records current and flags what needs a decision.',
        shift: 'Runs on the schedule you set',
        engine: 'Claude Code',
      },
      {
        name: 'Support',
        job: 'Reads messages, drafts replies, and routes what needs a human to you.',
        shift: 'Runs on the schedule you set',
        engine: 'Claude Code',
      },
      {
        name: 'Ops',
        job: 'Handles the recurring admin and keeps the company knowledge up to date.',
        shift: 'Runs on the schedule you set',
        engine: 'Claude Code',
      },
    ],
    shiftNote:
      'Shifts are cron schedules in your own time zone. Each agent carries its own little SVG character, drawn by the app from its id and its job.',
  },

  approvalLoop: {
    eyebrow: 'Who is in charge',
    heading: 'Agents propose. You decide. The gateway runs it in code.',
    subhead:
      'Every task, proposal, question, and report passes through Saga OS. When an agent wants to do something outside the app, it files a proposal. You approve, ask for changes, or reject with a note. Only then does the approved text run.',
    steps: [
      {
        title: 'Propose',
        body: 'An agent finishes a shift and files what it wants to do next as a proposal, with its reasoning and the exact text it would send.',
      },
      {
        title: 'Decide',
        body: 'You open the Inbox. Approve to run it as written, request changes to get a revision, or reject with a note the agent reads before its next run.',
      },
      {
        title: 'Execute in code',
        body: 'Approved work runs as an execution task that does exactly the approved text. The rule lives in the code, not in a prompt the agent could talk its way around.',
      },
    ],
    policyHeading: 'You set the rule per action type.',
    policyLevels: [
      { level: 'Off', body: 'The agent cannot take this action at all.' },
      { level: 'Ask', body: 'The agent proposes it and waits for your approval in the Inbox.' },
      { level: 'Do and tell', body: 'The agent does it and posts a notice so you see what happened.' },
      { level: 'Auto', body: 'The agent does it without asking. You choose this per action, on purpose.' },
    ],
    strictNote:
      'Strict mode is on by default and caps every external action at Ask. Agents cannot send, spend, merge, deploy, or publish on their own.',
    guarantee:
      'The retro that tunes your team each week can never change permissions, budgets, the engine, or the hard rules.',
  },

  features: {
    eyebrow: 'What you get',
    heading: 'The whole office, on one screen.',
    subhead:
      'Saga OS keeps chat and work together, with everything an agent reads or does recorded as it happens.',
    items: [
      {
        title: 'Work',
        body: 'Shifts turn into tasks. The worker runs them one per agent, writes checkpoints as it goes, and files a report at the end.',
      },
      {
        title: 'Inbox',
        body: 'A board of proposals, questions, and alerts. Approve, request changes, or reject from a drawer that opens anywhere.',
      },
      {
        title: 'Policy',
        body: 'Set off, ask, do and tell, or auto per action type, per agent. Strict mode holds every outside action at ask.',
      },
      {
        title: 'Chat',
        body: 'A master thread with the Chief of Staff, plus a thread per agent, task, and proposal. Replies render like Claude: code, tables, and file previews.',
      },
      {
        title: 'Workspace',
        body: 'Watch an agent work live: its reasoning, each tool call with its input and output, the sources it read, and a meter for tokens, cost, and time.',
      },
      {
        title: 'Docs',
        body: 'An Obsidian-style vault of Markdown notes with wiki links, backlinks, full version history, and a graph view. It is a plain folder you can open in Obsidian too.',
      },
      {
        title: 'Monitor',
        body: 'See the last 24 hours, 7 days, or 30 days: tokens and spend, jobs finished and the success rate, what waits on you, and why jobs failed. Set a monthly budget per agent with alerts at 80 and 100 percent.',
      },
    ],
  },

  integrations: {
    eyebrow: 'The engine',
    heading: 'Claude does the thinking. You bring the Claude.',
    subhead:
      'Pick how Saga OS talks to Claude. Both run your agents through Claude Code and the Saga tools, and both record every tool call.',
    engines: [
      {
        name: 'Claude Code pool',
        body: 'Add your Claude subscriptions and put agents on the pool. Each job leases the account that has been idle longest. When one hits its usage limit, the job resumes on another account, so no work is lost.',
      },
      {
        name: 'Built-in Claude',
        body: 'Use your own Claude API key instead. Saga OS installs Claude Code and runs every agent with your key. Usage is billed to your key and shown as real spend.',
      },
    ],
    capabilities: [
      {
        title: 'MCP connectors',
        body: 'Connect any MCP server by web address or as a local program. "Ask me first" connectors stay locked until you approve a request. Add social and work apps through Composio or Zapier.',
      },
      {
        title: 'Skills',
        body: 'Drop a SKILL.md file to give an agent a playbook. Standard skills apply everywhere, others switch on per chat.',
      },
      {
        title: 'Shared folders',
        body: 'Share folders on the machine running Saga OS, each set to read, or read and edit. Even with edit rights, agents cannot push, publish, deploy, or run destructive commands on their own.',
      },
    ],
    roadmapLabel: 'Coming later',
    roadmapNote:
      'Codex in the harness is on the roadmap and is not available yet. Today the engine is Claude.',
  },

  multiCompany: {
    eyebrow: 'More than one business',
    heading: 'Run every company you own from one Saga OS.',
    body:
      'Switch companies from the top of the sidebar, and the badge shows what is waiting in the others. Each company is fully separate, so work in one never touches another.',
    points: [
      {
        title: 'Separate by default',
        body: 'Every company has its own agents, jobs, Inbox, Docs, knowledge, budgets, connectors, shared folders, and Claude pool.',
      },
      {
        title: 'One login',
        body: 'Only your sign-in is shared across companies. Everything else stays in its own place.',
      },
      {
        title: 'Its own data',
        body: 'Each company gets its own database and vault. With Postgres you can give each one a separate database.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'Getting started',
    heading: 'From empty to a working team in three steps.',
    subhead: 'No engineering needed. The wizard does the setup from plain questions.',
    steps: [
      {
        title: 'Answer the onboarding wizard',
        body: 'Nine short steps with examples and tap-to-choose answers cover your business, customers, offer, goals, voice, tools, and rules. Saga OS writes your knowledge files, suggests a team from your goals, and runs a first practice job so you see an approval in your Inbox right away.',
      },
      {
        title: 'Your agents run their shifts',
        body: 'Each agent wakes for its shift, does the work, and files a proposal with its reasoning. You can follow along live in the Workspace.',
      },
      {
        title: 'You approve, and it runs',
        body: 'Open the Inbox, approve what looks right, ask for changes, or reject with a note. Approved work runs exactly as written, and your notes become lessons the agent reads next time.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    heading: 'The software is free. You pay only for the Claude you use.',
    body:
      'Saga OS is open-source and self-hosted. There are no per-seat SaaS tiers. You run it on your own machine or server and bring your own Claude, either a Claude API key or a pool of Claude Code subscriptions, and you pay that usage directly.',
    points: [
      {
        title: 'Free, open-source software',
        body: 'Self-host Saga OS under the MIT license. The code is yours to run and read.',
      },
      {
        title: 'Bring your own Claude',
        body: 'Use your Claude API key, or add your Claude Code subscriptions to the pool. Usage is billed to you, not to us.',
      },
      {
        title: 'See the spend',
        body: 'Monitor shows tokens and cost per agent, and you can set a monthly budget with alerts before an agent pauses itself.',
      },
    ],
    ctaPrimary: { label: 'Join the waitlist' },
    earlyAccessNote:
      'TODO: owner to confirm whether a managed or hosted option will be offered, and on what terms, before public launch. Until then the only path shown is self-hosting plus the waitlist.',
  },

  faq: {
    eyebrow: 'Questions',
    heading: 'What owners ask before they trust it.',
    items: [
      {
        q: 'Can an agent send, spend, or publish without me?',
        a: 'No. Strict mode is on by default and holds every external action at ask, so the agent proposes and waits. Agents cannot send, spend, merge, deploy, or publish on their own. You set the rule per action type and can turn specific actions to auto only if you choose to.',
      },
      {
        q: 'Where does my data live?',
        a: 'On the machine you run Saga OS on. It is self-hosted, with your notes kept as a plain Markdown vault you can open in Obsidian, and a local database (SQLite, or Postgres if you prefer).',
      },
      {
        q: 'Do I need to be technical to set it up?',
        a: 'The onboarding wizard is built for non-engineers: plain questions, examples, and tap-to-choose answers. Running the server does take a one-time setup, and the CLI and Docker options are there for that.',
      },
      {
        q: 'Which engine powers the agents?',
        a: 'Claude, either through a pool of Claude Code subscriptions with auto-failover on usage limits, or through your own Claude API key with built-in Claude. Codex is on the roadmap and is not available yet.',
      },
      {
        q: 'Can I run more than one business?',
        a: 'Yes. Run several fully separate companies from one Saga OS. Each has its own agents, Inbox, Docs, budgets, connectors, and Claude pool. Only your login is shared.',
      },
      {
        q: 'How do the agents learn from me?',
        a: 'Every regular job is a loop. When you reject or ask for changes, your note becomes a lesson the agent reads before its next run. Each week the Chief of Staff runs a retro and makes a few measured changes, which roll back automatically if results drop.',
      },
    ],
  },

  finalCta: {
    headline: 'Stop being the bottleneck in your own business.',
    subtext:
      'Join the waitlist to get Saga OS running: a team of AI staff that proposes the work, and an Inbox where you keep the final say.',
    ctaPrimary: { label: 'Join the waitlist' },
    microcopy: 'Open-source and self-hosted. Bring your own Claude.',
  },

  footer: {
    tagline: 'The office where you run a company of AI staff.',
    linkGroups: [
      {
        heading: 'Product',
        links: [
          { label: 'Your AI staff', href: '#agents' },
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
    ],
    contact: {
      email: 'hello@saga.co.id',
      repo: 'TODO: public repository link to add before launch',
    },
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
    copyright: '© 2026 Saga OS. MIT licensed.',
  },

  waitlist: {
    title: 'Join the Saga OS waitlist',
    subtitle: 'Tell us a little about your business and we will reach out when it is your turn.',
    nameLabel: 'Your name',
    emailLabel: 'Email',
    companyLabel: 'Company',
    interestLabel: 'What are you after?',
    interestOptions: [
      { value: 'self-host', label: 'I want to self-host it' },
      { value: 'managed', label: 'I would prefer a managed option' },
      { value: 'exploring', label: 'Just exploring for now' },
    ],
    submitLabel: 'Join the waitlist',
    successMessage: 'You are on the list. We will be in touch.',
    errorMessage: 'Something went wrong. Please try again, or email hello@saga.co.id.',
  },
};
