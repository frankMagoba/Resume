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
    "I run delivery for client pods at GitStart and still write and review TypeScript and Python most weeks. I've shipped production software since 2019: clinic booking APIs, insurance services, bank-feed workers, transit integrations and mobile apps. Part-time, I write coding tasks for AI agents at AfterQuery and check whether their fixes hold up.",
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
    start: "Mar 2021", end: "Oct 2021", tags: ["backend"],
    points: [
      "Built Node.js services on PostgreSQL for daily policy transactions, with raw SQL and no ORM.",
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
  { name: "Sway", what: "Civic voting-group app", where: "GitStart", stack: ["React", "Next.js", "Hasura", "Express"],
    links: [["Website", "https://www.sway.co/"], ["Google Play", "https://play.google.com/store/apps/details?id=co.sway.www"], ["App Store", "https://apps.apple.com/us/app/sway-vote-together/id6756804681"]] },
  { name: "Alaan", what: "UAE corporate cards. I built the bank-feed workers", where: "GitStart", stack: ["NestJS", "AWS SQS", "Codat", "Xero"],
    links: [["Website", "https://www.alaan.com/"], ["Google Play", "https://play.google.com/store/apps/details?id=com.alaanpay.spender"], ["App Store", "https://apps.apple.com/ae/app/alaan/id1605833078"]] },
  { name: "DocSum", what: "AI contract review for in-house legal teams", where: "GitStart", stack: ["FastAPI", "pgvector", "RabbitMQ"],
    links: [["Website", "https://www.docsum.ai/"]] },
  { name: "Optibus", what: "Transit planning. My integrations sit behind their login", where: "GitStart", stack: ["Python", "AWS Lambda", "CloudWatch", "Grafana"],
    links: [["Website", "https://www.optibus.com/"]] },
  { name: "Productlane", what: "Customer feedback portal built on Linear", where: "GitStart", stack: ["Web app"],
    links: [["Website", "https://productlane.com/"]] },
  { name: "Theia", what: "AI stock research app", where: "GitStart", stack: ["React Native", "Node.js"],
    links: [["Website", "https://www.theiafintech.com/"], ["App Store", "https://apps.apple.com/us/app/ai-stock-trading-bot-agents/id6738607499"]] },
  { name: "Betashares Direct", what: "Australian investing app, frontend and mobile", where: "GitStart", stack: ["Frontend", "Mobile"],
    links: [["Google Play", "https://play.google.com/store/apps/details?id=au.com.betashares.direct"], ["App Store", "https://apps.apple.com/au/app/betashares-direct-investing/id1669109591"]] },
  { name: "AAR Insurance Kenya", what: "Policies, claims and M-Pesa payments", where: "Startappz", stack: ["Flutter", "WebSockets", "Laravel"],
    links: [["Google Play", "https://play.google.com/store/apps/details?id=com.aarinsurance.customer.app"], ["App Store", "https://apps.apple.com/ke/app/aar-insurance/id1561522021"]] },
  { name: "MenoLife", what: "Menopause tracker. Dr Reddy's bought MenoLabs in January 2024 and the app came off the stores in early 2025", where: "Bright Coders Factory", stack: ["React Native", "Firebase"],
    links: [["MenoLabs", "https://menolabs.com/"]] },
  { name: "Modern Mirror", what: "Virtual fitting for fashion brands", where: "US client", stack: ["Frontend"],
    links: [["Website", "https://themodernmirror.com/home/"]] },
  { name: "Chota", what: "Truck booking demo on seeded data. Its race test fires 25 bookings at once and never double-books any of 12 trucks", where: "Personal demo", stack: ["TypeScript", "PostgreSQL", "Redis", "Flutter"], links: [] },
  { name: "Keyhold", what: "Local-first memory vault that AI assistants read through an MCP server I wrote in TypeScript", where: "Personal, private repo", stack: ["TypeScript", "MCP", "Embeddings", "Tauri"], links: [] },
];

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
  { q: "Where did he study?", k: ["education", "degree", "university", "study", "school"],
    a: "BSc Computer Science, Second Class Honours (Upper Division), Multimedia University of Kenya, 2019." },
];

// Flat list of facts used by keyword and semantic search.
export function buildChunks() {
  const out = faq.map((f) => ({ text: f.a, ref: f.q }));
  for (const e of experience) for (const p of e.points) out.push({ text: p, ref: `${e.role}, ${e.company} (${e.start} to ${e.end})` });
  for (const p of projects) out.push({ text: `${p.name}: ${p.what}. Stack: ${p.stack.join(", ")}.`, ref: `${p.name} (${p.where})` });
  for (const [k, v] of Object.entries(skills)) out.push({ text: `${k}: ${v.join(", ")}.`, ref: "Skills" });
  return out;
}
