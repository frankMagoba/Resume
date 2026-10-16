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
  intro:
    "Full-stack engineer with 7 years of production experience across web, mobile and backend. I build TypeScript and Python services, React and React Native apps, and the cloud setup that keeps them running. I've shipped clinic booking APIs, insurance platforms, bank-feed workers, transit integrations and mobile apps used every day, and I've led small teams from spec to release.",
  tagline: "Backend, full-stack and SRE work on Node.js, Python and AWS.",
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
      "Built React Native and React screens for Theia Pay on Node.js and AWS Lambda, with M-Pesa Daraja for mobile money.",
      "Frontend and mobile work on Betashares Direct, an Australian investing app.",
      "Wrote NestJS services on PostgreSQL with Redis on hot reads, deployed to AWS ECS and Lambda.",
    ],
  },
  {
    company: "Bright Coders Factory", role: "Software Engineer and SRE", type: "Part-time contract, remote (Opole, Poland)",
    start: "Mar 2022", end: "Aug 2023", tags: ["backend", "sre", "mobile"],
    points: [
      "Ran client services on Kubernetes and managed the infrastructure in Terraform.",
      "Set SLOs, SLIs and error budgets for backend services on AWS, led the postmortems and set up CloudWatch monitoring.",
      "Wrote Node.js and Express APIs in TypeScript for enterprise clients.",
      "Ran A/B tests with Firebase Remote Config on MenoLife, a React Native menopause tracker.",
    ],
  },
  {
    company: "Modern Mirror (US client)", role: "Frontend Web Developer", type: "Part-time, remote",
    start: "2022", end: "2023", tags: ["frontend"],
    points: ["Frontend web work on a virtual fitting product for fashion brands."],
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
    points: ["Built internal tools for KISM and LSK in React and Node.js, shipped with Docker."],
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

export const projects = [
  { name: "Optibus operator integrations", what: "Integrations for a public-transport planning platform: payroll exports, timetables, duty overviews and PDF or Excel reports for operators such as SPTrans in Sao Paulo, Xtrafik in Sweden, a Tuscany network and an Austrian operator",
    role: "Built most of them and maintain all of them, plus the SRE work with CloudWatch and Grafana", where: "GitStart", dates: "Jul 2024 to now",
    tags: ["backend", "sre"], stack: ["Python", "AWS Lambda", "CloudWatch", "Grafana", "pytest"], links: [["Optibus", "https://www.optibus.com/"]], note: "The integrations sit behind Optibus's login." },
  { name: "Alaan Pay", what: "UAE corporate cards and spend management",
    role: "Backend: NestJS workers on AWS SQS that pull Codat and Xero bank feeds, with retries and Jest tests on the sync paths", where: "GitStart", dates: "Since 2023",
    tags: ["backend"], stack: ["NestJS", "TypeScript", "AWS SQS", "Sequelize", "Jest"],
    links: [["Website", "https://www.alaan.com/"], ["Google Play", "https://play.google.com/store/apps/details?id=com.alaanpay.spender"], ["App Store", "https://apps.apple.com/ae/app/alaan/id1605833078"]] },
  { name: "DocSum", what: "AI contract review for in-house legal teams",
    role: "Contract-review APIs in FastAPI with pgvector search feeding OpenAI models (RAG), and slow parse jobs moved onto RabbitMQ", where: "GitStart", dates: "Since 2023",
    tags: ["backend", "ai"], stack: ["FastAPI", "PostgreSQL", "pgvector", "RabbitMQ", "OpenAI"], links: [["Website", "https://www.docsum.ai/"]] },
  { name: "Sway", what: "Nonpartisan civic voting-group app",
    role: "Real-time React and Next.js screens on Hasura GraphQL, with Express services behind it", where: "GitStart", dates: "2021 to 2023",
    tags: ["frontend", "backend"], stack: ["React", "Next.js", "TypeScript", "GraphQL", "Hasura", "Express"],
    links: [["Website", "https://www.sway.co/"], ["Google Play", "https://play.google.com/store/apps/details?id=co.sway.www"], ["App Store", "https://apps.apple.com/us/app/sway-vote-together/id6756804681"]] },
  { name: "Theia", what: "Fintech and AI stock research app. I worked on Theia Pay, its currency-transaction app",
    role: "React Native and React screens on Node.js and AWS Lambda, with M-Pesa Daraja for mobile money", where: "GitStart", dates: "2021 to 2023",
    tags: ["mobile", "frontend"], stack: ["React Native", "React", "Node.js", "AWS Lambda", "M-Pesa Daraja"],
    links: [["Website", "https://www.theiafintech.com/"], ["App Store", "https://apps.apple.com/us/app/ai-stock-trading-bot-agents/id6738607499"]] },
  { name: "Betashares Direct", what: "Australian investing app", role: "Frontend and mobile developer", where: "GitStart", dates: "",
    tags: ["mobile", "frontend"], stack: ["Frontend", "Mobile"],
    links: [["Google Play", "https://play.google.com/store/apps/details?id=au.com.betashares.direct"], ["App Store", "https://apps.apple.com/au/app/betashares-direct-investing/id1669109591"]] },
  { name: "Productlane", what: "Customer support and feedback portal built on Linear", role: "Web app work", where: "GitStart", dates: "",
    tags: ["frontend"], stack: ["Web app"], links: [["Website", "https://productlane.com/"]] },
  { name: "Ready Travel", what: "Travel product with a Java backend serving web and mobile apps",
    role: "Took over as tech lead in 2022, led 4 engineers and set the architecture, then led delivery through early 2025", where: "GitStart", dates: "2022 to early 2025",
    tags: ["backend", "frontend", "mobile"], stack: ["Java", "Spring Boot", "React", "React Native"], links: [] },
  { name: "AfterQuery agent-eval tasks", what: "Coding tasks that AI agents must solve, used to evaluate models",
    role: "Write each task with a reference solution and gold tests, package it as a Docker sandbox with oracle/nop checks, and review agent output", where: "AfterQuery", dates: "Aug 2025 to now",
    tags: ["ai", "backend"], stack: ["Python", "TypeScript", "Kotlin", "Swift", "Rust", "C++", "Docker"], links: [] },
  { name: "NocoDB (open source)", what: "Fixes and a feature in NocoDB, the open-source Airtable alternative",
    role: "Co-authored 4 merged PRs: comma-separated multi-email invites in the NestJS service, a collaborator access dropdown that went dead after search, missing account page translations, and a column list scrollbar", where: "GitStart", dates: "2023",
    tags: ["frontend", "backend"], stack: ["Vue", "TypeScript", "NestJS"],
    links: [["Invites PR", "https://github.com/nocodb/nocodb/pull/6275"], ["Access PR", "https://github.com/nocodb/nocodb/pull/6366"], ["Translations PR", "https://github.com/nocodb/nocodb/pull/6049"], ["Scrollbar PR", "https://github.com/nocodb/nocodb/pull/5586"]] },
  { name: "MenoLife", what: "Menopause symptom tracker",
    role: "React Native app with SwiftUI and Kotlin native modules, and Firebase Remote Config A/B tests before full rollout", where: "Bright Coders Factory", dates: "2022 to 2023",
    tags: ["mobile"], stack: ["React Native", "SwiftUI", "Kotlin", "Firebase"], links: [["MenoLabs", "https://menolabs.com/"]],
    note: "Dr Reddy's bought MenoLabs in January 2024 and the app came off the stores in early 2025." },
  { name: "Modern Mirror", what: "Virtual fitting for fashion brands", role: "Part-time frontend web developer", where: "US client", dates: "2022 to 2023",
    tags: ["frontend"], stack: ["Frontend"], links: [["Website", "https://themodernmirror.com/home/"]] },
  { name: "UAP Old Mutual internal services", what: "Internal services for an insurer's daily policy transactions",
    role: "Node.js and Next.js on PostgreSQL with GraphQL APIs, raw SQL, Redis on heavy report reads, and claims APIs with status notifications", where: "UAP Old Mutual Group", dates: "Mar 2021 to Oct 2021",
    tags: ["backend", "frontend"], stack: ["Node.js", "Next.js", "GraphQL", "PostgreSQL", "Redis"], links: [] },
  { name: "KISM and LSK internal tools", what: "Internal tools for the Kenya Institute of Supplies Management and LSK",
    role: "Built in React and Node.js, shipped with Docker", where: "Kinetic Technology", dates: "Sep 2020 to Mar 2021",
    tags: ["frontend", "backend"], stack: ["React", "Node.js", "Docker"], links: [] },
  { name: "AAR Insurance Kenya", what: "Insurance app: policies, claims and M-Pesa payments",
    role: "Built the Flutter app with WebSockets for live updates, on a Laravel and MySQL API", where: "Startappz", dates: "Jul 2020 to Sep 2020",
    tags: ["mobile"], stack: ["Flutter", "Dart", "WebSockets", "Laravel", "MySQL"],
    links: [["Google Play", "https://play.google.com/store/apps/details?id=com.aarinsurance.customer.app"], ["App Store", "https://apps.apple.com/ke/app/aar-insurance/id1561522021"]] },
  { name: "Medbook", what: "Hospital and clinic software",
    role: "Clinic scheduling APIs where a transaction stops 2 staff booking the same slot, raw SQL on PostgreSQL and MySQL, and a Swift and SwiftUI app", where: "Medbook Limited Kenya", dates: "May 2019 to Jun 2020",
    tags: ["backend", "mobile"], stack: ["Swift", "SwiftUI", "Laravel", "PostgreSQL", "MySQL"], links: [["Medbook", "https://medbookafrica.com/"]], note: "The current product may postdate my time there." },
  { name: "Chota", what: "Truck booking. A Flutter customer app from 2021, and a 2026 rebuild as a demo on seeded data",
    role: "Built both. The rebuild's race test fires 25 bookings at once and never double-books any of 12 trucks", where: "Personal", dates: "2021, rebuilt 2026",
    tags: ["mobile", "backend"], stack: ["Flutter", "TypeScript", "PostgreSQL", "Redis", "Docker"], links: [] },
  { name: "Keyhold", what: "Local-first, encrypted memory vault that AI assistants read through an MCP server",
    role: "Wrote it in TypeScript and Node.js, with hybrid recall over local embeddings and an encrypted vector cache", where: "Personal", dates: "",
    tags: ["ai", "backend"], stack: ["TypeScript", "Node.js", "MCP", "Embeddings"], links: [] },
  { name: "Kotlin and KMP apps", what: "Personal Android and Kotlin Multiplatform apps",
    role: "Experiments with GPS, Bluetooth LE, NFC and UWB on device", where: "Personal", dates: "",
    tags: ["mobile"], stack: ["Kotlin", "Kotlin Multiplatform", "Jetpack Compose"], links: [] },
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

// Hand-written answers for the "Ask" box. Keywords are matched first.
export const faq = [
  { q: "What does Franklin do now?", k: ["now", "current", "role", "job", "doing", "today"],
    a: "He's a Technical Project Manager at GitStart and still writes and reviews code most weeks. Part-time, he writes AI coding-eval tasks at AfterQuery." },
  { q: "How many years of experience?", k: ["years", "experience", "long", "senior"],
    a: "He has shipped production software since May 2019, so about 7 years." },
  { q: "Has he done SRE or DevOps?", k: ["sre", "devops", "kubernetes", "k8s", "terraform", "reliability", "monitoring", "on-call", "slo"],
    a: "Yes. At Bright Coders Factory he ran services on Kubernetes with Terraform, set SLOs and led postmortems. At GitStart he does the SRE work on the Optibus integrations with CloudWatch and Grafana." },
  { q: "What backend stack does he use?", k: ["backend", "node", "nestjs", "python", "fastapi", "api", "stack"],
    a: "Mostly Node.js/NestJS and Python/FastAPI on PostgreSQL and Redis, with queues like AWS SQS and RabbitMQ. He has also worked in Spring Boot and Laravel." },
  { q: "Does he build mobile apps?", k: ["mobile", "flutter", "react native", "android", "ios", "app"],
    a: "Yes. He built the AAR Insurance Kenya app in Flutter at Startappz, React Native screens for Theia Pay and MenoLife, and did frontend and mobile work on Betashares Direct." },
  { q: "What AI work has he done?", k: ["ai", "llm", "rag", "agent", "eval", "mcp", "ml"],
    a: "He writes coding tasks and gold tests for AI agents at AfterQuery, shipped RAG search on pgvector for DocSum, and built Keyhold, an MCP memory vault, as a personal project." },
  { q: "Is he open to remote work?", k: ["remote", "relocate", "timezone", "location", "where"],
    a: "He's based in Nairobi (UTC+3) and has worked remotely with US, European and Gulf teams since 2021." },
  { q: "How do I contact him?", k: ["contact", "email", "phone", "hire", "reach", "linkedin"],
    a: "Email franklinmagoba4@gmail.com, call +254 725 254 911, or find him on LinkedIn at linkedin.com/in/franklin-magoba." },
  { q: "What projects can I see?", k: ["projects", "portfolio", "links", "live", "apps"],
    a: "Live ones include Sway, Alaan, DocSum, Theia, Betashares Direct, Productlane, AAR Insurance Kenya and Modern Mirror. The projects section has every link." },
  { q: "Where did he study?", k: ["education", "degree", "university", "study", "school"],
    a: "BSc Computer Science, Second Class Honours (Upper Division), Multimedia University of Kenya, 2019." },
];

// Flat list of facts used by keyword and semantic search.
export function buildChunks() {
  const out = faq.map((f) => ({ text: f.a, ref: f.q }));
  for (const e of experience) for (const p of e.points) out.push({ text: p, ref: `${e.role}, ${e.company} (${e.start} to ${e.end})` });
  for (const p of projects) out.push({ text: `${p.name}: ${p.what}. ${p.role}. Stack: ${p.stack.join(", ")}.`, ref: `${p.name} (${p.where})` });
  for (const [k, v] of Object.entries(skills)) out.push({ text: `${k}: ${v.join(", ")}.`, ref: "Skills" });
  return out;
}
