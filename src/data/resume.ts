// To update the résumé page, edit the entries below (it mirrors the PDF resume).
// summaryParagraphs is rendered as HTML: use <strong class="kw"> for tech keywords
// and <em class="emph"> for lines worth calling out.
export const summaryParagraphs = [
  `Senior full-stack engineer with 7 years shipping production software across two full backend stacks: <strong class="kw">Python/Django</strong> and <strong class="kw">Node.js/TypeScript</strong>, plus <strong class="kw">Rust</strong> for performance-critical services.`,
  `At Vividly I've built or contributed to nearly every layer of a multi-tenant B2B SaaS platform: an internal developer platform (<strong class="kw">Python</strong> CLI, <strong class="kw">MCP server</strong>, CI/CD), a production <strong class="kw">LLM</strong> pipeline, a <strong class="kw">Rust</strong> forecast engine (<strong class="kw">axum</strong>, <strong class="kw">Rayon</strong>, <strong class="kw">SQLx</strong>), <strong class="kw">Django</strong> REST APIs, <strong class="kw">Strawberry GraphQL</strong>, <strong class="kw">Celery</strong> async jobs, and <strong class="kw">React/TypeScript</strong> interfaces on top of all of it.`,
  `I write tests at every layer, instrument what I ship with <strong class="kw">Sentry</strong> and <strong class="kw">GCP Cloud Trace</strong> rather than finding out about problems from customers, and <em class="emph">design for the failure case first</em>.`,
  `<strong class="kw">Node.js</strong> has been my primary backend since 2019, including a founding-engineer build that scaled to <em class="emph">100K+ daily active users</em>, but I move between stacks based on what the problem needs, not habit.`,
];

export const work = [
  {
    title: "Full-Stack Engineer",
    org: "Vividly",
    dates: "Oct 2023 – Present",
    location: "Remote",
    context:
      "B2B SaaS platform for enterprise trade promotion management · 2,500+ professional users · $63M raised · 20-person engineering team",
    bullets: [
      `Built and set the roadmap for an internal developer platform used by the entire engineering team, including during every on-call incident: a <strong class="kw">Python</strong> CLI, an <strong class="kw">MCP server</strong> (<strong class="kw">FastMCP</strong>) with AI agent support, and <strong class="kw">GitHub Actions</strong> CI/CD integrations. Includes a performance scanner integrating <strong class="kw">Sentry</strong>, <strong class="kw">GCP Cloud Trace</strong>, and <strong class="kw">Query Insights</strong>, PR health reporting delivered to Slack, and a <strong class="kw">Django</strong> public API code generator with Cursor AI agent support.`,
      `Designed and shipped a full-stack AI Contract Generation Engine on <strong class="kw">Django</strong>: template analysis, field extraction, and a verification pipeline built on <strong class="kw">LLMs</strong>, with a <strong class="kw">React</strong> and <strong class="kw">TypeScript</strong> interface. <em class="emph">Cut contract creation from roughly 2 hours to under 5 minutes, a 95% cut in manual effort</em> for 2,500+ enterprise users. Also built AI Scenario Planning for trade promotion simulation.`,
      `Designed and implemented an ERP Integration framework on <strong class="kw">Django</strong> and <strong class="kw">PostgreSQL</strong>, with URL allowlisting and SSRF guardrails derived from a written threat model. Built the Integrations Trigger Page (<strong class="kw">React</strong>, <strong class="kw">TypeScript</strong>, <strong class="kw">GraphQL</strong>) so business administrators configure and trigger third-party connections themselves, no engineering involvement needed.`,
      `Architected the Promotion Email Generation system end to end on <strong class="kw">Django</strong> and <strong class="kw">Strawberry GraphQL</strong>: database schema, email templates backend, a SendPromotionEmail mutation, <strong class="kw">Celery</strong> async delivery, and the full <strong class="kw">React</strong> and <strong class="kw">TypeScript</strong> interface.`,
      `Own the <strong class="kw">Rust</strong> forecast microservice (<strong class="kw">axum</strong>, <strong class="kw">Rayon</strong>, <strong class="kw">SQLx</strong>), updated to respect user-configurable lift preferences across millions of rows. Built the companion Forecast Version Comparison UI (<strong class="kw">React</strong>, <strong class="kw">TypeScript</strong>, <strong class="kw">GraphQL</strong>) with weekly drill-down.`,
      `Built the Budget 2.0 filter system (<strong class="kw">React</strong>, <strong class="kw">TypeScript</strong>, <strong class="kw">GraphQL</strong>): fund type filters, a date-pivot table, and clear-filters UX. Optimized the underlying GraphQL query performance in <strong class="kw">Django</strong>, and used <strong class="kw">BigQuery</strong> to fix budgeting and forecast revenue alignment discrepancies.`,
      `Built the backend validation framework for the Promotions model in <strong class="kw">Django</strong> and <strong class="kw">PostgreSQL</strong>, covering 7+ field validators. Implemented the Promotion Submission and Approval workflow and Advanced Promotion Duplication.`,
      `Built the IFM (Indirect Financial Model) Updater as a scheduled <strong class="kw">GCP Cloud Run</strong> job in <strong class="kw">Python</strong> for automated financial recalculations, and restructured the underlying IFM data model. Added ROI, revenue, and margin columns to promotion tables.`,
      `Own around 10 production API endpoints across REST and <strong class="kw">GraphQL</strong>. The three highest-traffic hold p95 latency under 100ms; <em class="emph">cut query latency on the biggest datasets from ~3s to 500ms (6x)</em> by profiling with <strong class="kw">GCP Query Insights</strong> and cleaning up N+1 patterns.`,
      `Wrote tests at every layer: <strong class="kw">Vitest</strong> for the frontend with a configurable mock data factory, <strong class="kw">pytest</strong> for the backend with coverage-exclusion paths configured so the number means something, and integration tests for the <strong class="kw">Rust</strong> services. Built a custom <strong class="kw">ESLint</strong> plugin for test conventions and maintained <strong class="kw">Storybook</strong>.`,
      `<em class="emph">Led a live migration of a production financial calculation system without downtime</em>: ran the old and new versions in parallel with automated output comparison, then flipped traffic over with feature flags once the numbers matched. That approach is now the team's playbook for anything similarly risky.`,
      `Led project teams of 4-5 engineers and worked directly with product managers, designers, and business analysts. Interviewed, helped hire, and onboarded 5 engineers, held regular 1:1s.`,
    ],
    tags: ["Django", "Python", "React", "TypeScript", "GraphQL", "Rust", "GCP"],
  },
  {
    title: "Founding Engineer",
    org: "StrainBrain",
    dates: "Feb 2021 – Sep 2023",
    location: "Remote",
    context:
      "Consumer recommendation platform · Acquired by Powr Plant (Dec 2024, post-departure) · 100K+ daily active users · 130+ business customers · 15 markets",
    bullets: [
      `Joined as the first engineer with nothing to build on. Picked <strong class="kw">Node.js</strong> and <strong class="kw">TypeScript</strong> as the backend and built the entire API layer from scratch, along with every data model and infrastructure decision that came after.`,
      `Built the recommendation engine and its consumer-facing interface, matching users to products based on their preferences, usage context, and live inventory. <em class="emph">This was the product that led to the acquisition.</em>`,
      `<em class="emph">Scaled from zero to 100K+ daily active users</em> across 130+ business customers in 15 markets without a major rewrite: going stateless early, adding read replicas for analytics, and moving anything non-blocking onto async jobs.`,
      `Delivered features end to end under real startup constraints: talked to non-technical business users directly, then designed, built, deployed, and handled whatever broke afterward.`,
    ],
    tags: ["Node.js", "TypeScript"],
  },
  {
    title: "Full-Stack Developer",
    org: "WayCool Foods",
    dates: "Jul 2019 – Dec 2020",
    location: "Bangalore",
    context: "One of India's largest agri-food distribution platforms",
    bullets: [
      `Built full-stack features in <strong class="kw">Node.js</strong> and <strong class="kw">JavaScript</strong> for internal operations teams: supply chain visibility, order management, and reporting dashboards used daily across the business.`,
      `Built a bidding platform for farmers to sell their goods, using <strong class="kw">Angular 6</strong> for the frontend and <strong class="kw">Node.js</strong> + <strong class="kw">Express</strong> for the backend.`,
    ],
    tags: ["Node.js", "JavaScript", "Angular"],
  },
  {
    title: "Software Development Engineer, Intern",
    org: "CaratLane",
    dates: "Nov 2018 – May 2019",
    location: "Chennai",
    context: "One of India's largest online jewellery retailers (Tata group)",
    bullets: ["Built and shipped production frontend features for a high-traffic e-commerce platform."],
    tags: [],
  },
];

export const skills = [
  { label: "Languages", value: "TypeScript, JavaScript, Python, SQL, Rust" },
  {
    label: "Backend & APIs",
    value:
      "Node.js (primary backend since 2019), Express, Django, DRF, RESTful API design, GraphQL (Strawberry, async-graphql), Celery, axum (Rust), Rayon, SQLx, microservices",
  },
  {
    label: "Frontend",
    value:
      "React, Next.js, TypeScript, Angular, responsive & accessible UI (WCAG 2.2 AA), semantic HTML, CSS, design systems, Jotai, Storybook",
  },
  {
    label: "AI / ML",
    value:
      "Production LLM pipelines, prompt engineering, structured outputs (JSON-schema mode), MCP server development (FastMCP), AI agent tooling, natural language document parsing, fail-soft architecture",
  },
  {
    label: "Databases",
    value: "PostgreSQL (schema design, Row-Level Security, multi-tenant architecture, query optimization), BigQuery, Redis",
  },
  {
    label: "Testing",
    value: "Vitest, pytest, component testing, mock data factories, custom ESLint plugins, coverage reporting, TDD",
  },
  {
    label: "Cloud & DevOps",
    value: "GCP (Cloud Run, Cloud Trace, Query Insights, Secret Manager, Monitoring), Docker, GitHub Actions, CI/CD, Sentry",
  },
  {
    label: "Leadership",
    value:
      "System design, RFC & architecture documentation, code review, mentoring, hiring & onboarding, end-to-end ownership, cross-functional collaboration",
  },
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    org: "SGGSIE&T Nanded",
    dates: "2015 – 2019",
  },
];
