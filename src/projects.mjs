export const profile = {
  name: 'Faizan Shoukat Abbasi', shortName: 'Faizan Abbasi',
  email: 'abbasi.faizan1997@gmail.com',
  github: 'https://github.com/abbasifaizan70',
  linkedin: 'https://www.linkedin.com/in/faizan-shoukat-abbasi/',
  upwork: 'https://www.upwork.com/freelancers/faizanabbasi70',
  resume: 'https://drive.google.com/file/d/15RZV1a5hjPLRtWmdcs1IaD00QnNIe6uM/view',
  updated: 'November 2026'
};
// Keep plain-text contributions for older open pages; detailed references are additive.
const expensifyContributions = [
      {
        title:'Interactive charts',
        text:'Added full-screen chart expansion, then improved rendering at larger sizes and added pinch, double-tap zoom, and pan. The follow-up included unit tests for chart scaling.',
        prs:[95249,97698]
      },
      {
        title:'Search and loading performance',
        text:'Reduced repeated autocomplete work through debouncing, memoization, and more efficient matching. Also migrated selected icons and illustrations to lazy loading to reduce the startup bundle.',
        prs:[86925,75330]
      },
      {
        title:'Chat and offline reliability',
        text:'Fixed read-state synchronization after reconnecting, restored native Concierge history controls while keeping pending tasks visible, and stopped attachment and chart interactions from closing the side panel.',
        prs:[94738,99605,102937]
      },
      {
        title:'Accessible navigation',
        text:'Added heading semantics for screen readers and corrected nested focus traps so keyboard users can reach the Back button and tabs in the manual expense flow.',
        prs:[80538,99114]
      },
      {
        title:'Expenses, reporting, and payment feedback',
        text:'Added the Top Spenders default report, placed the bank-account filter with withdrawal filters for reconciliation, and surfaced the actual bank return reason when a report payment fails.',
        prs:[78410,104042,84823]
      },
      {
        title:'Shared UI and dependable tests',
        text:'Refactored confirmation dialogs across report and room-management screens to use a shared hook, and fixed a hanging report-creation test by initializing its required parent-report state.',
        prs:[77948,76377]
      }
    ];
export const projects = [
  {
    id:'solo', number:'01', name:'Solo / SoloSuit', domain:'Fintech & legal workflows', category:'platform',
    title:'Making complex financial journeys feel simple.',
    description:'Full-stack engineer working on dashboards, Rails APIs, payment integrations, and Elasticsearch search.',
    role:'Full-stack engineer', type:'Client product',
    cardContributions:['Consumer dashboard migration','Rails APIs & payment integrations','Elasticsearch search'],
    stack:['React','Next.js','TypeScript','Ruby on Rails','PostgreSQL','Stripe','Elasticsearch'],
    overview:'Solo helps people navigate debt and legal workflows. My work connects clear customer interfaces with the APIs, documents, and financial processes behind them.',
    problem:'Financial and legal workflows need careful state handling. A good interface has to make the next step clear while the underlying system handles permissions, payments, and changing records reliably.',
    contributions:['Built React/Next.js dashboards backed by Rails APIs.','Helped separate the consumer dashboard from the Rails app.','Integrated payments and Elasticsearch search.','Handled permissions and duplicate payment events.'],
    scope:'Engineering contributions to an established product, working alongside its team.',
    links:[{label:'Visit Solo',href:'https://www.solosuit.com/'}]
  },
  {
    id:'carli', number:'02', name:'Carli', domain:'Care operations', category:'platform',
    title:'Better tools for the people behind care.',
    description:'Full-stack engineer building recruitment, scheduling, reporting, and permission-aware workflows for care teams.',
    role:'Full-stack engineer', type:'Client product',
    cardContributions:['Recruitment & scheduling workflows','React interfaces & FastAPI services','Reporting & role-based access'],
    stack:['React','TypeScript','Python','FastAPI','PostgreSQL'],
    overview:'Carli brings care-management work into a connected platform. My contributions span the operational details that help teams manage recruitment, schedules, and reporting.',
    problem:'Care operations cross multiple roles and departments. Small inconsistencies in permissions, scheduling, or reporting can interrupt the people relying on the software every day.',
    contributions:['Built recruitment and scheduling workflows.','Connected React interfaces to Python/FastAPI services.','Improved reporting and role-based access.','Added regression tests for existing workflows.'],
    scope:'A summary of my client contributions. Private source code and operational data are not published here.',
    links:[{label:'Discuss this work',href:'mailto:abbasi.faizan1997@gmail.com?subject=Let%E2%80%99s%20talk%20about%20your%20Carli%20work'}]
  },
  {
    id:'house', number:'03', name:'House', domain:'Agency operations', category:'platform',
    title:'A stronger foundation for a growing platform.',
    description:'Architecture and security reviewer assessing permissions, prioritizing improvements, and guiding release workflows.',
    role:'Architecture & security reviewer', type:'Client engagement',
    cardContributions:['Architecture & permissions review','Prioritized security recommendations','Development & release guidance'],
    stack:['Next.js','TypeScript','PostgreSQL','Application architecture'],
    overview:'House supports agency operations. My role focuses on reviewing the architecture, understanding the boundaries between users and data, and helping the team make safer technical decisions.',
    problem:'As a business platform grows, architecture and permission decisions need to remain understandable. Teams need a practical path from identified risks to focused, verifiable improvements.',
    contributions:['Reviewed architecture and authorization boundaries.','Prioritized security and maintainability recommendations.','Clarified development, review, and release workflows.','Aligned improvements with the existing platform.'],
    scope:'Architecture and security engagement. Client-specific findings and private implementation details are kept confidential.',
    links:[{label:'Discuss this work',href:'mailto:abbasi.faizan1997@gmail.com?subject=Let%E2%80%99s%20talk%20about%20your%20House%20work'}]
  },
  {
    id:'expensify', number:'04', name:'Expensify', domain:'Open-source product engineering', category:'open-source',
    title:'From interactive charts to reliable everyday workflows.',
    description:'Open-source contributor improving Expensify’s React Native and TypeScript application.',
    role:'Open-source contributor', type:'Merged contributions',
    highlights:[{value:'50+',label:'Merged PRs'},{value:'50+',label:'Issues resolved'}],
    stack:['React Native','TypeScript','Onyx state management','Accessibility','Regression testing'],
    overview:'I have authored 53 merged pull requests for Expensify’s open-source app, from November 2025 to November 2026. I have also resolved 50+ issues. My contributions range from new reporting and chart features to performance, accessibility, offline reliability, and shared UI improvements. The examples below highlight 14 merged PRs; this record was checked on 6 November 2026.',
    problem:'An expense and collaboration app needs to stay responsive while handling large report lists, offline changes, keyboard navigation, and nested screens. My work makes those everyday flows easier to use and more consistent across web and mobile.',
    contributions:expensifyContributions.map(c=>`${c.title}: ${c.text}`),
    contributionDetails:expensifyContributions,
    scope:'53 authored PRs confirmed merged as of 6 November 2026. Each example links to its public code and review history. Closed, unmerged PRs are excluded from this count.',
    links:[{label:'My merged contributions',href:'https://github.com/Expensify/App/pulls?q=is%3Apr+is%3Amerged+author%3Aabbasifaizan70'},{label:'View my pull requests',href:'https://github.com/Expensify/App/pulls?q=is%3Apr+state%3Aclosed+assignee%3Aabbasifaizan70'},{label:'View merged PRs',href:'https://github.com/Expensify/App/pulls?q=is%3Apr+is%3Amerged+assignee%3Aabbasifaizan70'},{label:'Visit Expensify',href:'https://www.expensify.com/'}]
  },
  {
    id:'boon', number:'05', name:'Boon', domain:'Referral hiring', category:'platform',
    title:'Connecting people. Simplifying referrals.',
    description:'A connected hiring experience with authentication, integrations, and reliable background work.',
    role:'Full-stack development & integrations', type:'Client product',
    stack:['React','Ruby on Rails','PostgreSQL','AWS','REST APIs'],
    overview:'Boon is a referral-hiring platform. I worked across its frontend and backend, connecting product workflows to external services and keeping the application’s data moving.',
    problem:'Hiring products depend on connected information and low-friction onboarding. Integrations need to support the user’s workflow without turning external service failures into product dead ends.',
    contributions:['Built React interfaces backed by Rails and PostgreSQL.','Integrated Google OAuth, LinkedIn Contacts, and Google Maps.','Developed REST APIs and scheduled background tasks.','Worked on application delivery in an AWS environment.'],
    scope:'My contributions cover product development and integrations; they do not represent authorship of the entire platform.',
    links:[{label:'Visit Boon',href:'https://www.goboon.co/'}]
  },
  {
    id:'voxa', number:'06', name:'Voxa', domain:'Voice AI exploration', category:'ai',
    title:'From a spoken thought to a spoken answer.',
    description:'A turn-based voice assistant with transcription, LLM responses, and speech playback.',
    role:'Personal project', type:'AI lab',
    stack:['React','TypeScript','Node.js','Express','OpenAI','Groq','Playwright'],
    overview:'Voxa explores the complete voice interaction: record a question, transcribe it, generate a response, and play the answer back. I built the frontend and the API integration layer.',
    problem:'Voice interfaces need more than a model response. Users need to understand whether the app is listening, processing, or speaking—and recover when any step fails.',
    contributions:['Built recording, transcription, response, and playback states.','Integrated explicit OpenAI and Groq provider selection with server-side credentials.','Added bounded conversation context, cancellation, and stage-specific retry behavior.','Validated application flows with API and browser tests.'],
    scope:'A personal technical project. The interaction is turn-based; this is not a claim of a deployed telephony service or commercial user adoption.',
    links:[{label:'Explore the source',href:'https://github.com/abbasifaizan70/voxa-voice-agent'}]
  },
  {
    id:'agents', number:'07', name:'Agent systems lab', domain:'Retrieval & tool orchestration', category:'ai',
    title:'Teaching tools to work together.',
    description:'A LangGraph and Weaviate exploration of tool routing and structured agent responses.',
    role:'Technical assessment project', type:'AI lab',
    stack:['Node.js','LangGraph','Weaviate','LLM APIs'],
    overview:'This assessment project explores a delegating agent that routes requests to document retrieval and a mock chart tool, then returns a consistent structured response.',
    problem:'An agent needs clear tool contracts and predictable outputs. The orchestration layer should make it possible to understand which tool ran and how its result reached the interface.',
    contributions:['Implemented a LangGraph workflow with explicit tool routing.','Connected Weaviate-backed document retrieval.','Used structured answer and data fields to keep responses predictable.','Explored provider selection and a mock chart tool for structured visualization output.'],
    scope:'An assessment and learning project, with a mock chart tool. It is not presented as a production MCP deployment.',
    links:[{label:'Explore the source',href:'https://github.com/abbasifaizan70/weaviate-langgraph-agent'}]
  }
];
