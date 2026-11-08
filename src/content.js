// Single source of truth for both sites. Edit here, then copy to the other repo.
export const profile = {
  name: "Franklin Magoba",
  title: "Software Engineer",
  location: "Nairobi, Kenya",
  email: "franklinmagoba4@gmail.com",
  phone: "+254 725 254 911",
  phoneHref: "+254725254911",
  links: {
    linkedin: "https://www.linkedin.com/in/franklin-magoba",
    github: "https://github.com/frankMagoba",
    hackerrank: "https://www.hackerrank.com/profile/franklinmagoba4",
    portfolio: "https://frankmagoba.github.io/",
    resume: "https://frankmagoba.github.io/Resume/",
  },
  // Single public-facing title line — keep this the only headline under the name.
  tagline: "Software engineer in Nairobi. Works remotely with US and European timezones.",
  intro:
    "Full-stack engineer with 7 years of production experience across web, mobile and backend. I build TypeScript and Python services, React and React Native apps, and the cloud setup that keeps them running. I've shipped clinic booking APIs, insurance platforms, bank-feed workers, transit integrations and mobile apps used every day, and I've led small teams from spec to release.",
};

export const experience = [
  {
    company: "AfterQuery", role: "Coding Evaluation Contractor", type: "Part-time, remote",
    start: "Aug 2025", end: "Present", tags: ["ai"],
    points: [
      "Write Harbor coding tasks that AI agents must solve, in Python, TypeScript, Kotlin, Swift, Rust and C++, each with a reference solution.",
      "Package each task as a Docker sandbox with gold tests and oracle/nop checks, so a run only passes when the fix is real.",
      "Write tests for the edge cases agents tend to skip, then review the output for code quality, not just a green run.",
    ],
  },
  {
    company: "GitStart (YC S19)", role: "Technical Project Manager", type: "Remote",
    start: "Jan 2023", end: "Present", tags: ["backend", "sre", "ai"],
    points: [
      "Joined the GitEnv team in 2026 to develop and test it. I set up the repo rules and task briefs that let Claude Code, Codex and Cursor work a ticket in parallel, and run every result before it merges.",
      "Built most of the Optibus operator integrations and maintain all of them: about 19 Python modules on AWS Lambda for payroll exports, timetables, duty overviews and PDF or Excel reports.",
      "Do the SRE work on those integrations, with monitoring and alerting in CloudWatch and Grafana.",
      "Built Alaan's NestJS workers on AWS SQS that pull Codat and Xero bank feeds, with retries for when the upstream API flakes.",
      "Shipped DocSum contract-review APIs in FastAPI with pgvector search, and moved slow parse jobs onto RabbitMQ.",
      "Led Ready Travel delivery through early 2025, reviewing Spring Boot and React changes before each release.",
      "Agree API contracts and data models with the client before code gets written, and gave final merge sign-off on 200+ PRs.",
    ],
  },
  {
    company: "GitStart (YC S19)", role: "Senior Software Engineer", type: "Remote",
    start: "May 2021", end: "Jan 2023", tags: ["backend", "frontend", "mobile"],
    points: [
      "Took over as tech lead on Ready Travel in 2022, leading 4 engineers across Spring Boot, React and React Native.",
      "Built real-time React and Next.js screens for Sway on Hasura GraphQL, with Express services behind it.",
      "Built React Native and React screens for Theia Pay, its currency-transaction app, on a Node.js backend running on AWS Lambda.",
      "Betashares Direct: WordPress site, React Native app.",
      "Wrote NestJS services on PostgreSQL with Redis on hot reads, deployed to AWS ECS and Lambda.",
    ],
  },
  {
    company: "Bright Coders Factory", role: "Software Engineer and SRE", type: "Part-time contract, remote (Opole, Poland)",
    start: "Mar 2022", end: "Aug 2023", tags: ["backend", "sre", "mobile"],
    points: [
      "Ran client services on Kubernetes and managed the infrastructure in Terraform.",
      "Set SLOs, SLIs and error budgets for the backend services on AWS, led the postmortems after incidents, and set up CloudWatch monitoring.",
      "Wrote Express APIs in TypeScript for enterprise clients.",
      "Ran A/B tests with Firebase Remote Config on MenoLife, a React Native menopause tracker.",
    ],
  },
  {
    company: "Modern Mirror (US client)", role: "Frontend Web Developer", type: "Part-time, remote",
    start: "2022", end: "2023", tags: ["frontend"],
    points: ["React frontend work on a virtual fitting product for fashion brands."],
  },
  {
    company: "UAP Old Mutual Group", role: "Software Engineer", type: "Full-time, Nairobi",
    start: "Mar 2021", end: "Oct 2021", tags: ["backend", "frontend"],
    points: [
      "Built Node.js services and Next.js screens on PostgreSQL for daily policy transactions, with GraphQL APIs, raw SQL and no ORM.",
      "Cached the heavy report reads in Redis and shipped claims APIs with status notifications.",
    ],
  },
  {
    company: "Kinetic Technology Limited", role: "Software Engineer", type: "Nairobi",
    start: "Sep 2020", end: "Mar 2021", tags: ["frontend", "backend"],
    points: ["Built internal tools in React and Node.js, shipped with Docker, for the Kenya Institute of Supplies Management (KISM), which registers and licenses the country's procurement professionals, and for the Law Society of Kenya (LSK), the bar association every practising advocate belongs to."],
  },
  {
    company: "Startappz Limited", role: "Software Engineer", type: "Nairobi",
    start: "Jul 2020", end: "Sep 2020", tags: ["mobile"],
    points: ["Built the AAR Insurance Kenya app in Flutter, with WebSockets for live updates on a Laravel and MySQL API."],
  },
  {
    company: "Medbook Limited Kenya", role: "Software Engineer", type: "Nairobi",
    start: "May 2019", end: "Jun 2020", tags: ["backend", "frontend"],
    points: ["Built clinic scheduling APIs in Laravel with Angular screens, where a transaction stops 2 staff booking the same slot."],
  },
];

// brief: the portfolio's paragraph for a project. The resume keeps the shorter what/role lines.
export const projects = [
  { name: "Optibus operator integrations",
    brief: "Optibus plans and runs public transport for agencies and operators in more than 7,000 cities. I built most of the integrations that hand its data to operators like SPTrans in Sao Paulo and Xtrafik in Sweden: payroll exports, timetables, duty overviews, PDF and Excel reports. I still maintain all of them, and I do the SRE work too, with monitoring and alerts in CloudWatch and Grafana.",
    what: "Integrations for a public-transport planning platform: payroll exports, timetables, duty overviews and PDF or Excel reports for operators such as SPTrans in Sao Paulo, Xtrafik in Sweden, a Tuscany network and an Austrian operator",
    role: "Built most of them and maintain all of them, plus the SRE work with CloudWatch and Grafana", where: "GitStart", dates: "Jul 2024 to now",
    tags: ["backend", "sre"], stack: ["Python", "AWS Lambda", "CloudWatch", "Grafana", "pytest"], links: [["Optibus", "https://www.optibus.com/"]], note: "The integrations sit behind Optibus's login." },
  { name: "GitEnv",
    brief: "GitEnv is a workspace you install for reviewing pull requests, machines and AI coding sessions across all your repos. I'm on the team that builds and tests it. I set up the repo rules and short task briefs that let Claude Code, Codex and Cursor each take a slice of a ticket at the same time, and I run every result myself before anything merges.", what: "A workspace for reviewing pull requests, machines and AI coding sessions across your repos",
    role: "Develop and test it as part of the team, with AI coding agents each taking a slice of a ticket and every result checked before merge", where: "GitStart", dates: "2026 to now",
    tags: ["ai"], stack: ["Claude Code", "Codex", "Cursor"], links: [["Website", "https://gitenv.dev/"]] },
  { name: "Alaan Pay",
    brief: "Alaan gives companies in the Middle East corporate cards and expense management, and more than 3,000 businesses run on it. My part was the backend that keeps their books in sync. NestJS workers on AWS SQS pull bank feeds through Codat and Xero, retry when the upstream API flakes, and have Jest tests on every sync path.", what: "UAE corporate cards and spend management",
    role: "Backend: NestJS workers on AWS SQS that pull Codat and Xero bank feeds, with retries and Jest tests on the sync paths", where: "GitStart", dates: "Since 2023",
    tags: ["backend"], stack: ["NestJS", "TypeScript", "AWS SQS", "Sequelize", "Jest"],
    links: [["Website", "https://www.alaan.com/"], ["Google Play", "https://play.google.com/store/apps/details?id=com.alaanpay.spender"], ["App Store", "https://apps.apple.com/ae/app/alaan/id1605833078"]] },
  { name: "DocSum",
    brief: "DocSum helps in-house legal teams review contracts, from NDAs to master service agreements. I wrote its contract-review APIs in FastAPI, with pgvector search feeding OpenAI models. Parsing long contracts was slow, so I moved that work onto RabbitMQ jobs.", what: "AI contract review for in-house legal teams",
    role: "Contract-review APIs in FastAPI with pgvector search feeding OpenAI models (RAG), and slow parse jobs moved onto RabbitMQ", where: "GitStart", dates: "Since 2023",
    tags: ["backend", "ai"], stack: ["FastAPI", "PostgreSQL", "pgvector", "RabbitMQ", "OpenAI"], links: [["Website", "https://www.docsum.ai/"]] },
  { name: "Sway",
    brief: "Sway is a free, nonpartisan app where voters research their ballot and organize into voting groups. I built real-time screens for it in React and Next.js on Hasura GraphQL, plus the Express services behind them.", what: "Nonpartisan civic voting-group app",
    role: "Real-time screens in React and Next.js on Hasura GraphQL, with Express services behind it", where: "GitStart", dates: "2021 to 2023",
    tags: ["frontend", "backend"], stack: ["React", "Next.js", "TypeScript", "GraphQL", "Hasura", "Express"],
    links: [["Website", "https://www.sway.co/"], ["Google Play", "https://play.google.com/store/apps/details?id=co.sway.www"], ["App Store", "https://apps.apple.com/us/app/sway-vote-together/id6756804681"]] },
  { name: "Theia",
    brief: "Theia is a fintech app that uses AI agents to research the stock market. My part was Theia Pay, its app for currency transactions: React Native and React screens on a Node.js backend that runs on AWS Lambda.", what: "Fintech and AI stock research app. I worked on Theia Pay, its currency-transaction app",
    role: "React Native and React screens on a Node.js backend running on AWS Lambda", where: "GitStart", dates: "2021 to 2023",
    tags: ["mobile", "frontend"], stack: ["React Native", "React", "Node.js", "AWS Lambda"],
    links: [["Website", "https://www.theiafintech.com/"], ["App Store", "https://apps.apple.com/us/app/ai-stock-trading-bot-agents/id6738607499"]] },
  { name: "Betashares Direct",
    brief: "Betashares Direct is an Australian investing app with $0 brokerage on ETFs listed on the ASX. I worked on both halves of it: the WordPress website and the React Native mobile app.", what: "Australian investing app", role: "WordPress website and React Native mobile app", where: "GitStart", dates: "",
    tags: ["mobile", "frontend"], stack: ["WordPress", "React Native"],
    links: [["Google Play", "https://play.google.com/store/apps/details?id=au.com.betashares.direct"], ["App Store", "https://apps.apple.com/au/app/betashares-direct-investing/id1669109591"]] },
  { name: "Productlane",
    brief: "Productlane is customer support for software teams, built around Linear. It answers customers over email, chat and Slack, then files what they report as Linear issues. I worked on its React frontend.", what: "Customer support and feedback portal built on Linear", role: "React frontend work", where: "GitStart", dates: "",
    tags: ["frontend"], stack: ["React"], links: [["Website", "https://productlane.com/"]] },
  { name: "Ready Travel",
    brief: "A travel product with a Java backend behind its web and mobile apps. I took over as tech lead in 2022, set the architecture and led a team of four engineers across Spring Boot, React and React Native. I kept leading delivery until early 2025, reviewing the Spring Boot and React changes before each release.",
    what: "Travel product with a Java backend serving web and mobile apps",
    role: "Took over as tech lead in 2022, led 4 engineers and set the architecture, then led delivery through early 2025", where: "GitStart", dates: "2022 to early 2025",
    tags: ["backend", "frontend", "mobile"], stack: ["Java", "Spring Boot", "React", "React Native"], links: [] },
  { name: "AfterQuery agent-eval tasks",
    brief: "AfterQuery makes training data and test environments for frontier AI labs. I write the coding tasks that AI agents have to solve, in Python, TypeScript, Kotlin, Swift, Rust and C++. Each one ships with a reference solution, gold tests and a Docker sandbox with oracle and no-op checks, so a run only passes when the fix is real. Then I read what the agents wrote, because a green test run can still hide bad code.",
    what: "Coding tasks that AI agents must solve, used to evaluate models",
    role: "Write each task with a reference solution and gold tests, package it as a Docker sandbox with oracle/nop checks, and review agent output", where: "AfterQuery", dates: "Aug 2025 to now",
    tags: ["ai", "backend"], stack: ["Python", "TypeScript", "Kotlin", "Swift", "Rust", "C++", "Docker"], links: [] },
  { name: "NocoDB (open source)",
    brief: "NocoDB turns a database into a spreadsheet-style app, and it has more than 62,000 stars on GitHub. I co-authored four merged pull requests: invites for several comma-separated emails at once in the NestJS service, a collaborator access dropdown that stopped working after a search, missing translations on the account page, and a scrollbar for the column list.",
    what: "Fixes and a feature in NocoDB, the open-source Airtable alternative",
    role: "Co-authored 4 merged PRs: comma-separated multi-email invites in the NestJS service, a collaborator access dropdown that went dead after search, missing account page translations, and a column list scrollbar", where: "GitStart", dates: "2023",
    tags: ["frontend", "backend"], stack: ["Vue", "TypeScript", "NestJS"],
    links: [["Invites PR", "https://github.com/nocodb/nocodb/pull/6275"], ["Access PR", "https://github.com/nocodb/nocodb/pull/6366"], ["Translations PR", "https://github.com/nocodb/nocodb/pull/6049"], ["Scrollbar PR", "https://github.com/nocodb/nocodb/pull/5586"]] },
  { name: "Crowd.dev (open source)",
    brief: "crowd.dev pulls an open-source community's activity into one place, and it now lives on as the Linux Foundation's LFX Community Data Platform. Three of my fixes were merged. An organization's join date read \"53 years ago\", an organization name sat off-center whenever other fields were empty, and member photos didn't fill their frames.",
    what: "UI fixes in Crowd.dev, a community data platform that is now part of the Linux Foundation",
    role: "3 merged PRs: an organization joined date that read 53 years ago, an organization name that sat off-center when other fields were missing, and member photos that didn't fill their area", where: "GitStart", dates: "2023",
    tags: ["frontend"], stack: ["Vue", "TypeScript", "Tailwind CSS"],
    links: [["Joined date PR", "https://github.com/linuxfoundation/crowd.dev/pull/926"], ["Org name PR", "https://github.com/linuxfoundation/crowd.dev/pull/930"], ["Member photo PR", "https://github.com/linuxfoundation/crowd.dev/pull/1034"]] },
  { name: "Pipedream (open source)",
    brief: "Pipedream connects APIs so developers can build workflows and AI agents on top of them. I opened three pull requests with new actions: find or create a contact in Xero, create items and upload files in Podio, and create clients and projects in Toggl.",
    what: "New integration actions for Pipedream's open-source component library",
    role: "Opened PRs for a Xero find-or-create contact action, Podio create-item and file upload actions, and Toggl client and project creation", where: "GitStart", dates: "2023",
    tags: ["backend"], stack: ["JavaScript", "Node.js", "REST APIs"],
    links: [["Xero PR", "https://github.com/PipedreamHQ/pipedream/pull/8255"], ["Podio PR", "https://github.com/PipedreamHQ/pipedream/pull/8942"], ["Toggl PR", "https://github.com/PipedreamHQ/pipedream/pull/8973"]] },
  { name: "MenoLife",
    brief: "MenoLife helped people track their menopause symptoms. I built it in React Native, with native modules in SwiftUI and Kotlin, and ran A/B tests through Firebase Remote Config before a change reached everyone.", what: "Menopause symptom tracker",
    role: "React Native app with SwiftUI and Kotlin native modules, and Firebase Remote Config A/B tests before full rollout", where: "Bright Coders Factory", dates: "2022 to 2023",
    tags: ["mobile"], stack: ["React Native", "SwiftUI", "Kotlin", "Firebase"], links: [["MenoLabs", "https://menolabs.com/"]],
    note: "Dr Reddy's bought MenoLabs in January 2024 and the app came off the stores in early 2025." },
  { name: "Modern Mirror",
    brief: "Modern Mirror builds virtual fitting for luxury fashion, so shoppers can see how clothes will fit before they buy. I did part-time work on its React frontend.", what: "Virtual fitting for fashion brands", role: "Part-time React frontend developer", where: "US client", dates: "2022 to 2023",
    tags: ["frontend"], stack: ["React"], links: [["Website", "https://themodernmirror.com/home/"]] },
  { name: "UAP Old Mutual internal services",
    brief: "These were the internal services behind an East African insurer's daily policy transactions. I built them in Node.js and Next.js on PostgreSQL, with GraphQL APIs and hand-written SQL instead of an ORM. The heavy reports read from Redis, and the claims APIs send a notification each time a claim changes status.", what: "Internal services for an insurer's daily policy transactions",
    role: "Next.js screens and Node.js services on PostgreSQL, with GraphQL APIs, raw SQL, Redis on heavy report reads, and claims APIs with status notifications", where: "UAP Old Mutual Group", dates: "Mar 2021 to Oct 2021",
    tags: ["backend", "frontend"], stack: ["Node.js", "Next.js", "GraphQL", "PostgreSQL", "Redis"], links: [] },
  { name: "KISM and LSK internal tools",
    brief: "Internal tools for two Kenyan professional bodies. The Kenya Institute of Supplies Management (KISM) registers and licenses the country's procurement and supply chain professionals. The Law Society of Kenya (LSK) is the bar association every practising advocate has to join. I built the tools in React on a Node.js backend and shipped them in Docker.", what: "Internal tools for the Kenya Institute of Supplies Management (KISM) and the Law Society of Kenya (LSK)",
    role: "Built in React on a Node.js backend, shipped with Docker", where: "Kinetic Technology", dates: "Sep 2020 to Mar 2021",
    tags: ["frontend", "backend"], stack: ["React", "Node.js", "Docker"], links: [] },
  { name: "AAR Insurance Kenya",
    brief: "AAR's customer app lets people in Kenya manage their insurance policies, file claims and pay with M-Pesa. I built it in Flutter, with WebSockets for live updates, on a Laravel and MySQL API.", what: "Insurance app: policies, claims and M-Pesa payments",
    role: "Built the Flutter app with WebSockets for live updates, on a Laravel and MySQL API", where: "Startappz", dates: "Jul 2020 to Sep 2020",
    tags: ["mobile"], stack: ["Flutter", "Dart", "WebSockets", "Laravel", "MySQL"],
    links: [["Google Play", "https://play.google.com/store/apps/details?id=com.aarinsurance.customer.app"], ["App Store", "https://apps.apple.com/ke/app/aar-insurance/id1561522021"]] },
  { name: "Medbook",
    brief: "Medbook makes software for hospitals and clinics in Kenya. I built its clinic scheduling APIs, where a database transaction stops two staff from booking the same slot. I also wrote raw SQL for PostgreSQL and MySQL, and built a Swift and SwiftUI app.", what: "Hospital and clinic software",
    role: "Clinic scheduling APIs where a transaction stops 2 staff booking the same slot, raw SQL on PostgreSQL and MySQL, and a Swift and SwiftUI app", where: "Medbook Limited Kenya", dates: "May 2019 to Jun 2020",
    tags: ["backend", "mobile"], stack: ["Swift", "SwiftUI", "Laravel", "PostgreSQL", "MySQL"], links: [["Medbook", "https://medbookafrica.com/"]], note: "The current product may postdate my time there." },
  { name: "Chota",
    brief: "Chota books trucks. I built its Flutter customer app in 2021, then rebuilt the whole thing in 2026 as a demo on seeded data. The rebuild has a race test that fires 25 bookings at once across 12 trucks, and no truck ever gets booked twice.",
    what: "Truck booking. A Flutter customer app from 2021, and a 2026 rebuild as a demo on seeded data",
    role: "Built both. The rebuild's race test fires 25 bookings at once and never double-books any of 12 trucks", where: "Personal", dates: "2021, rebuilt 2026",
    tags: ["mobile", "backend"], stack: ["Flutter", "TypeScript", "PostgreSQL", "Redis", "Docker"], links: [] },
  { name: "Keyhold",
    brief: "Keyhold is a memory vault for AI assistants that stays encrypted on your own machine. Assistants read from it through an MCP server. I wrote it in TypeScript and Node.js, with hybrid recall over local embeddings and an encrypted vector cache.", what: "Local-first, encrypted memory vault that AI assistants read through an MCP server",
    role: "Wrote it in TypeScript on Node.js, with hybrid recall over local embeddings and an encrypted vector cache", where: "Personal", dates: "",
    tags: ["ai", "backend"], stack: ["TypeScript", "Node.js", "MCP", "Embeddings"], links: [] },
];

export const projectTags = { all: "All", mobile: "Mobile", backend: "Backend", frontend: "Frontend", sre: "SRE", ai: "AI" };

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "Swift", "Dart", "Go", "PHP", "SQL"],
  Backend: ["Node.js", "NestJS", "Express", "FastAPI", "Spring Boot", "Laravel", "REST", "GraphQL", "Hasura", "RabbitMQ", "AWS SQS"],
  "Web & mobile": ["React", "Next.js", "Angular", "React Native", "Flutter"],
  Data: ["PostgreSQL", "MySQL", "Redis", "pgvector"],
  "Cloud & reliability": ["AWS", "Kubernetes", "Terraform", "Docker", "GitHub Actions", "CloudWatch", "Grafana", "SLOs", "Postmortems", "OpenTelemetry (personal)"],
  AI: ["Agent evaluation", "RAG", "OpenAI API", "MCP"],
};

export const education = [
  { school: "Multimedia University of Kenya", degree: "BSc Computer Science, Second Class Honours (Upper Division)", start: "2015", end: "2019" },
];

export const certifications = ["Microsoft Azure Fundamentals", "ALC with Microsoft Azure training"];

// Certificate images shown in the viewer. Titles and dates are copied from the certificates themselves.
export const certificates = [
  { file: "az900-exam-prep", title: "Exam Prep: Microsoft Azure Fundamentals (AZ-900)", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "azure-administration-essential", title: "Azure Administration Essential Training", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "azure-management-tools", title: "Learning Azure Management Tools", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "azure-ad-basics", title: "Azure Active Directory: Basics", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "azure-active-directory", title: "Microsoft Azure: Active Directory", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "azure-security-concepts", title: "Microsoft Azure: Security Concepts", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "microsoft-cloud-solution", title: "Planning a Microsoft Cloud Solution", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "azure-storage", title: "Azure Administration: Implement and Manage Storage", issuer: "LinkedIn Learning", date: "Jun 2020" },
  { file: "azure-subscriptions", title: "Azure Administration: Manage Subscriptions and Resources", issuer: "LinkedIn Learning", date: "Jul 2020" },
  { file: "alc-badge", title: "Google Africa Developer Scholarship, Learning Phase I (32 hours)", issuer: "Andela, Pluralsight and Google", date: "" },
];

// FAQ shortcuts for common questions. Answers are written from the fields above
// so they stay aligned with the resume and portfolio copy.
const liveProjects = projects.filter((p) => (p.links || []).some(([, h]) => h));
const openSource = projects.filter((p) => /open source/i.test(p.name));

export const faq = [
  { q: "Who is Franklin?", k: ["who", "about", "intro", "introduce", "bio", "himself"],
    a: `${profile.name}, ${profile.title}, ${profile.location}. ${profile.tagline} ${profile.intro}` },
  { q: "What does Franklin do now?", k: ["now", "current", "role", "job", "doing", "today", "present"],
    a: "Technical Project Manager at GitStart (YC S19) since Jan 2023, still shipping and reviewing code (Optibus integrations, Alaan, DocSum, Ready Travel delivery). Part-time Coding Evaluation Contractor at AfterQuery since Aug 2025, writing Harbor tasks that AI agents must solve." },
  { q: "How many years of experience?", k: ["years", "experience", "long", "senior", "since"],
    a: profile.intro.split(". ")[0] + ". Production work starts May 2019 at Medbook Limited Kenya." },
  { q: "Has he done SRE or DevOps?", k: ["sre", "devops", "kubernetes", "k8s", "terraform", "reliability", "monitoring", "on-call", "slo", "grafana", "cloudwatch"],
    a: "Yes. At Bright Coders Factory (Mar 2022 to Aug 2023) he ran client services on Kubernetes, managed infrastructure in Terraform, set SLOs/SLIs and error budgets on AWS, led postmortems and set up CloudWatch. At GitStart he does the SRE work on the Optibus operator integrations with CloudWatch and Grafana." },
  { q: "What backend stack does he use?", k: ["backend", "node", "nestjs", "python", "fastapi", "api", "stack", "typescript"],
    a: `From the skills list: ${skills.Backend.join(", ")}. Data: ${skills.Data.join(", ")}. Day-to-day examples on the site include NestJS/SQS (Alaan), FastAPI/pgvector/RabbitMQ (DocSum), and Python on AWS Lambda (Optibus).` },
  { q: "Does he build mobile apps?", k: ["mobile", "flutter", "react native", "android", "ios"],
    a: "Yes. AAR Insurance Kenya in Flutter (Startappz); React Native for Theia Pay, MenoLife and Betashares Direct; tech lead on Ready Travel including React Native; plus a personal Flutter app (Chota)." },
  { q: "What AI work has he done?", k: ["ai", "llm", "rag", "agent", "eval", "mcp", "ml", "openai", "pgvector"],
    a: "GitEnv (2026 to now): developing and testing a workspace for reviewing PRs and agent sessions, where coding agents work ticket slices in parallel. AfterQuery: Harbor coding tasks and gold tests for agent evaluation (Python, TypeScript, Kotlin, Swift, Rust, C++, Docker). DocSum: FastAPI contract-review APIs with pgvector search feeding OpenAI (RAG), parse jobs on RabbitMQ. Keyhold: personal local-first MCP memory vault in TypeScript/Node.js." },
  { q: "Is he open to remote work?", k: ["remote", "relocate", "timezone", "nairobi", "us", "europe", "european"],
    a: profile.tagline + ` Recent remote roles include GitStart, AfterQuery, Bright Coders Factory (Poland) and Modern Mirror (US client).` },
  { q: "How do I contact him?", k: ["contact", "email", "phone", "hire", "reach", "linkedin", "github"],
    a: `Email ${profile.email}, call ${profile.phone}, LinkedIn ${profile.links.linkedin}, GitHub ${profile.links.github}, resume ${profile.links.resume}.` },
  { q: "What projects can I see?", k: ["projects", "portfolio", "links", "live", "public"],
    a: `Public product links on the site: ${liveProjects.map((p) => p.name.replace(/ \(open source\)/, "")).join(", ")}. Open-source PRs: ${openSource.map((p) => p.name.replace(/ \(open source\)/, "")).join(", ")}. Full list is in the Projects section.` },
  { q: "Where did he study?", k: ["education", "degree", "university", "study", "school", "multimedia"],
    a: education.map((e) => `${e.degree}, ${e.school}, ${e.start} to ${e.end}`).join("; ") + "." },
];

export function projectBlurb(p) {
  const links = (p.links || []).filter(([, h]) => h).map(([l, h]) => `${l}: ${h}`).join(" · ");
  return [`${p.name} (${p.where}${p.dates ? `, ${p.dates}` : ""})`, p.what + ".", p.role + ".", `Stack: ${p.stack.join(", ")}.`, links, p.note].filter(Boolean).join(" ");
}

// Search corpus: only text that already appears in profile / experience / projects / skills.
// FAQ answers are matched separately in ask.js so paraphrases don't compete with source facts.
export function buildChunks() {
  const out = [];
  out.push({ text: `${profile.name}, ${profile.title}, ${profile.location}. ${profile.intro}`, ref: "About" });
  out.push({ text: profile.tagline, ref: "About" });
  for (const e of experience) {
    const ref = `${e.role}, ${e.company} (${e.start} to ${e.end})`;
    out.push({ text: `${e.role} at ${e.company}, ${e.type}, ${e.start} to ${e.end}.`, ref });
    for (const p of e.points) out.push({ text: p, ref });
  }
  for (const p of projects) out.push({ text: projectBlurb(p), ref: `${p.name} (${p.where})` });
  for (const [k, v] of Object.entries(skills)) out.push({ text: `${k}: ${v.join(", ")}.`, ref: "Skills" });
  for (const e of education) out.push({ text: `${e.degree}, ${e.school}, ${e.start} to ${e.end}.`, ref: "Education" });
  out.push({ text: `Certifications: ${certifications.join(", ")}.`, ref: "Certifications" });
  return out;
}
