export const profile = {
  name: 'Faizan Shoukat Abbasi', shortName: 'Faizan Abbasi',
  email: 'abbasi.faizan1997@gmail.com',
  github: 'https://github.com/abbasifaizan70',
  linkedin: 'https://www.linkedin.com/in/faizan-shoukat-abbasi/',
  upwork: 'https://www.upwork.com/freelancers/faizanabbasi70',
  resume: 'https://drive.google.com/file/d/15RZV1a5hjPLRtWmdcs1IaD00QnNIe6uM/view',
  updated: 'November 2026'
};
export const projects = [
  {
    id:'solo', number:'01', name:'Solo / SoloSuit', domain:'Fintech & legal workflows', category:'platform',
    title:'Making complex financial journeys feel simple.',
    description:'Product interfaces, payment integrations, and the backend systems that connect them.',
    role:'Full-stack engineering', type:'Client product',
    stack:['React','Next.js','TypeScript','Ruby on Rails','PostgreSQL','Stripe','Elasticsearch'],
    overview:'Solo helps people navigate debt and legal workflows. My work connects clear customer interfaces with the APIs, documents, and financial processes behind them.',
    problem:'Financial and legal workflows need careful state handling. A good interface has to make the next step clear while the underlying system handles permissions, payments, and changing records reliably.',
    contributions:['Worked on React and Next.js dashboards connected to Rails and PostgreSQL services.','Helped separate the consumer dashboard from the Rails application while retaining the existing backend.','Implemented Elasticsearch search and contributed to payment and third-party integrations.','Handled permissions, duplicate payment events, and reviewable changes to existing workflows.'],
    scope:'Engineering contributions to an established product, working alongside its team.',
    links:[{label:'Visit Solo',href:'https://www.solosuit.com/'}]
  },
  {
    id:'carli', number:'02', name:'Carli', domain:'Care operations', category:'platform',
    title:'Better tools for the people behind care.',
    description:'Recruitment, scheduling, reporting, and dependable everyday workflows for care teams.',
    role:'Full-stack product development', type:'Client product',
    stack:['React','TypeScript','Python','FastAPI','PostgreSQL'],
    overview:'Carli brings care-management work into a connected platform. My contributions span the operational details that help teams manage recruitment, schedules, and reporting.',
    problem:'Care operations cross multiple roles and departments. Small inconsistencies in permissions, scheduling, or reporting can interrupt the people relying on the software every day.',
    contributions:['Developed and refined recruitment and scheduling workflows.','Worked across React interfaces and Python/FastAPI backend services.','Improved reporting behavior and role-aware application flows.','Added regression coverage and used reviewable changes to maintain an evolving codebase.'],
    scope:'A summary of my client contributions. Private source code and operational data are not published here.',
    links:[{label:'Discuss this work',href:'mailto:abbasi.faizan1997@gmail.com?subject=Let%E2%80%99s%20talk%20about%20your%20Carli%20work'}]
  },
  {
    id:'house', number:'03', name:'House', domain:'Agency operations', category:'platform',
    title:'A stronger foundation for a growing platform.',
    description:'Architecture, access boundaries, and maintainable systems for an agency operating platform.',
    role:'Architecture & security review', type:'Client engagement',
    stack:['Next.js','TypeScript','PostgreSQL','Application architecture'],
    overview:'House supports agency operations. My role focuses on reviewing the architecture, understanding the boundaries between users and data, and helping the team make safer technical decisions.',
    problem:'As a business platform grows, architecture and permission decisions need to remain understandable. Teams need a practical path from identified risks to focused, verifiable improvements.',
    contributions:['Reviewed application architecture and authorization boundaries.','Translated technical findings into prioritized, practical implementation guidance.','Helped clarify development, review, and release workflows.','Kept recommendations grounded in the existing product and its operational needs.'],
    scope:'Architecture and security engagement. Client-specific findings and private implementation details are kept confidential.',
    links:[{label:'Discuss this work',href:'mailto:abbasi.faizan1997@gmail.com?subject=Let%E2%80%99s%20talk%20about%20your%20House%20work'}]
  },
  {
    id:'expensify', number:'04', name:'Expensify', domain:'Open-source product engineering', category:'open-source',
    title:'Small details. A real difference in production.',
    description:'React Native and TypeScript contributions, with public pull requests and regression tests.',
    role:'Open-source contributor', type:'Merged contribution',
    stack:['React Native','TypeScript','State management','Regression testing'],
    overview:'I contribute fixes to Expensify’s open-source application through its engineering review process. One example is pull request #99605, merged in September 2026.',
    problem:'Concierge chat history and task visibility interacted in ways that could hide useful controls or messages. The fix needed to respect several different chat states and preserve existing behavior.',
    contributions:['Fixed the missing Show history control in the native Concierge chat flow.','Refined visibility behavior so still-open tasks remain accessible.','Addressed message visibility around server timestamp updates.','Added regression coverage and iterated through public code review.'],
    scope:'A contribution to Expensify’s application UI and state handling. The linked pull request documents my changes and review history.',
    links:[{label:'Read merged PR #99605',href:'https://github.com/Expensify/App/pull/99605'},{label:'Visit Expensify',href:'https://www.expensify.com/'}]
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
