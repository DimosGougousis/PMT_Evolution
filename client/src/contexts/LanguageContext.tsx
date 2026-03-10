import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  function t(key: string): any {
    const keys = key.split(".");
    let val: any = translations[language];
    for (const k of keys) {
      if (val === undefined) return key;
      val = val[k];
    }
    return val ?? key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
const translations: Record<Language, any> = {
  en: {
    nav: {
      title: "SaaS Strategy & Roadmap",
      links: ["Executive Brief", "Market Context", "Software Clusters", "Architecture", "Regulatory", "Gap Analysis", "Compliance Cost", "Roadmap"],
    },
    hero: {
      badge: "Draft Strategy Briefing — March 2026",
      title1: "PMT SaaS Strategy",
      title2: "and Roadmap",
      subtitle: "A comprehensive product strategy for the Dutch supermarket workforce management platform — covering software architecture, regulatory compliance, and the 18-month delivery roadmap.",
      cta1: "Explore the Strategy",
      cta2: "View Gap Analysis",
      stats: [
        { value: "7", label: "Software Clusters" },
        { value: "4", label: "Critical Compliance Gaps" },
        { value: "€290M", label: "Max Fine Exposure" },
        { value: "Jan 2027", label: "Next Regulatory Cliff" },
      ],
      author: "Prepared by Dimos Gougousis, Product Owner",
    },
    market: {
      eyebrow: "Chapter 01 — Market Context",
      title: "The market we are building for",
      subtitle: "Albert Heijn operates over 1,000 stores across the Netherlands and Belgium, employing more than 120,000 people. Workforce scheduling at this scale is not a back-office function — it is a mission-critical operational system.",
      cards: [
        { title: "120,000+ Employees", body: "AH is the largest supermarket employer in the Netherlands. Scheduling errors at scale translate directly into regulatory fines, union grievances, and operational disruption." },
        { title: "CAO Supermarkt", body: "The sector-level collective labour agreement governs pay premiums, rest periods, and working-time rules for every employee. Non-compliance triggers back-pay liability and union enforcement." },
        { title: "Flex Workforce", body: "A significant proportion of AH's workforce is on flexible contracts — uitzendkrachten, oproepkrachten, and min-max contracts. Each contract type carries distinct legal obligations." },
        { title: "Regulatory Velocity", body: "Four major legislative changes take effect between August 2026 and January 2027. The platform must be ready before each deadline — not after." },
      ],
      gaps: {
        title: "Four gaps not in the draft research",
        subtitle: "The draft research covers the existing regulatory landscape well. However, four high-impact legislative changes arriving before January 2027 are entirely absent.",
        items: [
          { law: "WTTA", date: "Jan 1, 2027", impact: "Must verify agency certification before scheduling any temp worker", badge: "badge-critical", badgeLabel: "Critical" },
          { law: "Wet meer zekerheid flexwerkers", date: "Jan 1, 2027", impact: "Zero-hour contracts abolished; new basic contract with minimum guaranteed hours required", badge: "badge-critical", badgeLabel: "Critical" },
          { law: "EU AI Act", date: "Aug 2, 2026", impact: "Automated rostering classified as high-risk AI — conformity assessment, human oversight, and audit trail required", badge: "badge-critical", badgeLabel: "Critical" },
          { law: "Pay Transparency Directive", date: "Jan 2027 (NL)", impact: "Gender pay gap reporting module and disaggregated pay data model required", badge: "badge-warning", badgeLabel: "High" },
        ],
      },
    },
    clusters: {
      eyebrow: "Chapter 02 — Software Clusters",
      title: "Seven modular clusters",
      subtitle: "The platform is organised into seven independently deployable clusters. Each cluster owns a distinct domain, can be released separately, and maps directly to a set of regulatory obligations.",
      items: [
        { id: "01", title: "Branch & Shift Management", color: "#0071e3", description: "The operational scheduling core. Branch managers create, publish, and adjust rosters. The ATW guard runs in real-time to prevent working-time violations before they are committed.", features: ["Real-time ATW working-hours guard", "Shift creation, editing, and publishing", "Manager approval workflows", "Multi-branch visibility", "Conflict detection and resolution"] },
        { id: "02", title: "Compliance & Governance Hub", color: "#ff3b30", description: "The regulatory brain of the platform. The CAO rule engine calculates premiums automatically. The WTTA tracker blocks scheduling from uncertified agencies. The AI Act module provides the human oversight layer.", features: ["CAO premium calculation engine", "WTTA agency certification hard-block", "EU AI Act conformity module", "Audit trail (immutable, encrypted)", "Works Council reporting tools"] },
        { id: "03", title: "Resource Pool Management", color: "#34c759", description: "Manages the full workforce lifecycle — from permanent employees to flex workers and temp agency staff. The agency portal provides real-time certification status for WTTA compliance.", features: ["Employee profiles and contract management", "Flex pool and availability management", "Agency portal with WTTA certification status", "Temp-to-perm conversion tracker", "Skills and qualification matrix"] },
        { id: "04", title: "Demand Forecasting & Labour Optimisation", color: "#ff9500", description: "AI-powered demand forecasting and automated roster generation. All AI recommendations require manager approval (EU AI Act human oversight obligation). Bias monitoring runs continuously.", features: ["AI-powered demand forecasting", "Automated roster generation (with human oversight)", "Bias monitoring dashboard", "What-if scenario simulator", "Labour cost optimisation engine"] },
        { id: "05", title: "Employee Self-Service & Engagement", color: "#af52de", description: "The employee-facing mobile application. Employees view rosters, submit availability, request shift swaps, and access their contract details. The basic contract view is required by the Wet meer zekerheid flexwerkers.", features: ["Mobile roster view", "Availability submission", "Shift swap requests", "Basic contract view (min hours display)", "In-app messaging and notifications"] },
        { id: "06", title: "Time & Attendance", color: "#5ac8fa", description: "Clock-in/out management, discrepancy resolution, and payroll export. The audit log is the primary defence against the €10,000 ATW record-keeping fine.", features: ["Clock-in/out (mobile and terminal)", "Discrepancy detection and resolution", "Payroll export connector", "Overtime and premium calculation", "Immutable time record audit log"] },
        { id: "07", title: "Analytics, Reporting & Incident Management", color: "#ff2d55", description: "The intelligence layer. KPI dashboards for branch managers, compliance reports for legal, and the pay gap reporting module required by the Pay Transparency Directive.", features: ["Branch KPI dashboards", "Compliance and regulatory reports", "Pay gap reporting module (EU Directive)", "Incident logging and response workflow", "Executive summary export"] },
      ],
    },
    architecture: {
      eyebrow: "Chapter 03 — Software Architecture",
      title: "Three-layer architecture",
      subtitle: "The platform is structured across three distinct but interconnected layers. Gaps occur where a regulatory obligation exists but neither the business process nor the software feature has been designed to address it.",
      layers: [
        { id: "L1", label: "Layer 1", title: "Business Architecture", color: "#0071e3", description: "Defines what the organisation must do: schedule shifts, manage flex workers, track labour costs, handle incidents, and report to regulators. This layer is driven by operational need and commercial objectives.", items: ["Shift scheduling and roster management", "Flex workforce lifecycle management", "Labour cost tracking and budgeting", "Incident logging and response", "Regulatory reporting to NLA and AP"] },
        { id: "L2", label: "Layer 2", title: "Software Architecture", color: "#34c759", description: "Defines how the system enables those activities. Seven modular clusters, each with a distinct domain boundary, communicate via event-driven APIs. The compliance cluster is the authoritative source of truth for all regulatory rules.", items: ["7 modular clusters (independently deployable)", "Event-driven microservices architecture", "Immutable audit log (shared infrastructure)", "RBAC security model (principle of least privilege)", "API-first design (payroll, HR, agency integrations)"] },
        { id: "L3", label: "Layer 3", title: "Regulatory Architecture", color: "#ff9500", description: "Defines the rules that constrain both layers. Cascades from EU directives down to Dutch law and sector-level CAO agreements. The compliance cluster translates these rules into enforceable software logic.", items: ["EU AI Act (Aug 2026)", "GDPR / AVG (ongoing)", "ATW — Arbeidstijdenwet", "CAO Supermarkt 2024–2026", "WTTA (Jan 2027)", "Wet meer zekerheid flexwerkers (Jan 2027)"] },
      ],
      missionCritical: {
        title: "Mission-Critical Systems",
        subtitle: "Five systems are classified as mission-critical. Their failure immediately triggers regulatory liability or financial loss. Each has a defined Recovery Time Objective.",
        items: [
          { system: "ATW Working Hours Guard", consequence: "NLA fines begin accruing immediately", rto: "< 1 hour", badge: "badge-critical" },
          { system: "CAO Rule Engine", consequence: "Every shift scheduled = potential back pay liability", rto: "< 1 hour", badge: "badge-critical" },
          { system: "Time & Attendance Engine", consequence: "€10,000 flat fine for record-keeping failure", rto: "< 2 hours", badge: "badge-critical" },
          { system: "GDPR Data Controller Module", consequence: "Unlawful data processing — AP enforcement", rto: "< 4 hours", badge: "badge-critical" },
          { system: "WTTA Hard-Block Engine", consequence: "€10,000 per uncertified worker scheduled", rto: "< 1 hour", badge: "badge-critical" },
        ],
        headers: ["System", "Failure Consequence", "RTO", "Status"],
      },
    },
    regulatory: {
      eyebrow: "Chapter 04 — Regulatory Landscape",
      title: "The regulatory stack",
      subtitle: "Six regulatory instruments govern the platform. They cascade from EU directives through Dutch national law to sector-level collective agreements. Each layer adds obligations that the software must enforce.",
      items: [
        { id: "R1", badge: "EU Directive", badgeClass: "badge-critical", title: "EU AI Act", effective: "Aug 2, 2026", description: "Automated scheduling systems are classified as high-risk AI under Annex III. Requires a conformity assessment, human oversight mechanism, audit trail, bias monitoring, and registration in the EU AI database.", obligations: ["Conformity assessment before deployment", "Human oversight UI (manager must approve AI recommendations)", "Immutable AI decision audit trail", "Bias monitoring by age, gender, contract type", "EU AI system registration (Article 51)"], fine: "€15M or 3% global turnover" },
        { id: "R2", badge: "EU Regulation", badgeClass: "badge-critical", title: "GDPR / AVG", effective: "Ongoing (since 2018)", description: "All employee scheduling data is personal data. The platform processes sensitive categories (health data for sick leave, biometric data if fingerprint clock-in is used). The 72-hour breach notification obligation is already in force and currently unaddressed.", obligations: ["72-hour breach notification to AP (Article 33)", "Data Subject Rights Portal (access, erasure, portability)", "Privacy by Design in all new features", "Data Processing Agreements with all sub-processors", "Lawful basis documented for every data category"], fine: "€20M or 4% global turnover" },
        { id: "R3", badge: "Dutch Law", badgeClass: "badge-warning", title: "ATW — Arbeidstijdenwet", effective: "Ongoing", description: "The Dutch Working Hours Act sets maximum daily and weekly working hours, minimum rest periods, and mandatory break rules. The NLA enforces with per-employee, per-day fines that multiply by company size.", obligations: ["Real-time ATW guard (prevent violations before scheduling)", "Maximum hours tracking per employee per week", "Rest period enforcement (11-hour minimum)", "Immutable time records (€10,000 fine for failure)", "Repeat offence detection (fines double)"], fine: "€200–€400 per employee per day" },
        { id: "R4", badge: "Dutch Law", badgeClass: "badge-warning", title: "WTTA — Wet toelating terbeschikkingstelling van arbeidskrachten", effective: "Jan 1, 2027", description: "From January 2027, only certified temp agencies may supply workers. Hirers who use uncertified agencies face fines of up to €10,000 per worker. The certification registry is maintained by the NLA.", obligations: ["Agency certification register (real-time NLA API or CSV fallback)", "Scheduling hard-block for uncertified agencies", "Automated re-certification alerts (annual renewal)", "Audit trail of all agency scheduling decisions"], fine: "€10,000 per worker scheduled from uncertified agency" },
        { id: "R5", badge: "Sector CAO", badgeClass: "badge-info", title: "CAO Supermarkt 2024–2026", effective: "Ongoing", description: "The collective labour agreement for the supermarket sector governs pay scales, shift premiums (evening, weekend, public holiday), rest period rules, and notice requirements for roster changes. AH has its own supplementary CAO.", obligations: ["Automatic premium calculation (evening, weekend, holiday)", "Minimum notice period for roster changes", "Rest period enforcement per CAO rules", "Pay scale progression tracking", "Union reporting (FNV/CNV)"], fine: "Unlimited back pay + damages (class action risk)" },
        { id: "R6", badge: "EU Directive", badgeClass: "badge-info", title: "Pay Transparency Directive", effective: "Jan 2027 (NL implementation)", description: "Requires employers to report gender pay gaps and provide pay transparency to employees. The NL implementation is expected by January 2027. Requires a disaggregated pay data model and a reporting module.", obligations: ["Gender pay gap data model (by role, grade, contract type)", "Annual pay gap report (EU template)", "Employee pay band disclosure", "Remediation plan if gap exceeds 5%"], fine: "TBD — NL implementation pending" },
      ],
    },
    gaps: {
      eyebrow: "Chapter 05 — Gap Analysis",
      title: "Mission Critical Areas",
      subtitle: "Four critical gaps represent time-bound, existential risks to the platform's legality. Each has a quantifiable fine exposure and a defined build requirement.",
      items: [
        { id: "GAP-01", title: "GDPR Breach Notification Workflow", deadline: "Overdue — in force now", fine: "€10M or 2% global turnover", status: "badge-critical", statusLabel: "Overdue", color: "#ff3b30", description: "GDPR Article 33 requires notification to the Autoriteit Persoonsgegevens within 72 hours of discovering a personal data breach. The platform currently has no automated breach detection, no notification workflow, and no AP notification template. This obligation has been in force since 2018.", buildRequirement: "Automated breach detection alerting, 72-hour countdown workflow, AP notification template integration, DPO escalation path.", priority: "Immediate — Sprint 1" },
        { id: "GAP-02", title: "EU AI Act Conformity Module", deadline: "Aug 2, 2026", fine: "€15M or 3% global turnover", status: "badge-critical", statusLabel: "Critical", color: "#ff3b30", description: "The automated rostering engine is a high-risk AI system under EU AI Act Annex III. Without a conformity assessment, human oversight mechanism, and audit trail, the system cannot legally operate after August 2, 2026.", buildRequirement: "AI conformity assessment documentation, human oversight UI (manager approval for every AI recommendation), immutable AI decision audit trail, bias monitoring dashboard, Works Council consultation, EU AI system registration.", priority: "Phase 2 — Sprints 11–20" },
        { id: "GAP-03", title: "WTTA Agency Certification Hard-Block", deadline: "Jan 1, 2027", fine: "€10,000 per worker scheduled", status: "badge-critical", statusLabel: "Critical", color: "#ff9500", description: "From January 2027, scheduling a worker from an uncertified temp agency is a direct regulatory violation. The platform has no agency certification register and no mechanism to block scheduling from uncertified agencies.", buildRequirement: "Agency data model with WTTA certification status, NLA API integration (CSV fallback), scheduling hard-block engine, automated re-certification alerts.", priority: "Phase 3 — Sprints 21–32" },
        { id: "GAP-04", title: "Basic Contract Engine", deadline: "Jan 1, 2027", fine: "Unlimited back pay liability", status: "badge-critical", statusLabel: "Critical", color: "#ff9500", description: "The Wet meer zekerheid flexwerkers abolishes zero-hour contracts from January 2027. All affected workers must be migrated to a new 'basic contract' type with a guaranteed minimum number of hours. The platform has no basic contract type and no minimum hours enforcement engine.", buildRequirement: "New basic contract type in the data model, minimum hours guarantee tracking engine, payroll connector update, employee ESS contract view, zero-hour contract migration tool.", priority: "Phase 3 — Sprints 21–32" },
      ],
      standards: {
        title: "Industry Standards Required",
        subtitle: "Four certifications are the most strategically important for regulatory compliance and enterprise client procurement.",
        items: [
          { standard: "ISO/IEC 27001 + 27701", scope: "Information Security & Privacy", regulation: "GDPR / AVG", priority: "badge-critical", priorityLabel: "Critical" },
          { standard: "ISO/IEC 42001", scope: "AI Management System", regulation: "EU AI Act", priority: "badge-critical", priorityLabel: "Critical" },
          { standard: "SOC 2 Type II", scope: "Security, Availability, Confidentiality", regulation: "Enterprise procurement gate", priority: "badge-warning", priorityLabel: "High" },
          { standard: "NIST CSF 2.0", scope: "Cybersecurity Framework", regulation: "Cross-cutting", priority: "badge-warning", priorityLabel: "High" },
          { standard: "IEEE 7000", scope: "Ethical AI Design", regulation: "EU AI Act (supplementary)", priority: "badge-info", priorityLabel: "Recommended" },
        ],
        headers: ["Standard", "Scope", "Regulation", "Priority"],
      },
    },
    compliance: {
      eyebrow: "Chapter 06 — Compliance Cost Analysis",
      title: "The cost of non-compliance",
      subtitle: "Every gap in the platform carries a quantifiable financial risk. The combined maximum exposure across all gaps exceeds €290M — dwarfing the cost of building the required features.",
      callout: "The cost of building the four critical gap features is estimated at 6–12 months of engineering effort. The cost of not building them is a single GDPR enforcement action that could exceed €290 million, or an EU AI Act penalty of up to €15 million. The business case for compliance investment is unambiguous.",
      stats: [
        { value: "€290M+", label: "Combined Maximum Fine Exposure", sub: "Across all four critical gaps", color: "#ff3b30" },
        { value: "€500K+", label: "Realistic Single-Incident Exposure", sub: "WTTA: 50 workers from uncertified agency", color: "#ff9500" },
        { value: "€5M–€50M", label: "Likely GDPR Enforcement Range", sub: "Based on Dutch AP precedents", color: "#0071e3" },
      ],
      chartTitle: "Maximum Fine by Regulation (€M)",
      chartNote: "ATW and WTTA fines shown as indicative — actual scale differs per incident; see table below for per-incident figures.",
      headers: ["Regulation", "Enforcer", "Maximum Fine", "Typical Fine", "Primary Trigger", "Software Defence", "Severity"],
      rows: [
        { regulation: "GDPR — Article 83.5", enforcer: "Autoriteit Persoonsgegevens (AP)", maxFine: "€20M or 4% global turnover", typicalFine: "€750K – €10M", trigger: "Unlawful processing, breach without notification, missing legal basis", defence: "GDPR Module, Breach Notification Workflow, Audit Log", badge: "badge-critical", badgeLabel: "Critical" },
        { regulation: "EU AI Act — High-Risk", enforcer: "AP (anticipated)", maxFine: "€15M or 3% global turnover", typicalFine: "€5M – €15M", trigger: "High-risk AI without conformity assessment, no human oversight", defence: "AI Conformity Module, Human Oversight UI, Bias Monitor", badge: "badge-critical", badgeLabel: "Critical" },
        { regulation: "GDPR — Article 83.4", enforcer: "AP", maxFine: "€10M or 2% global turnover", typicalFine: "€475K – €5M", trigger: "Missed 72-hr breach notification to AP", defence: "72-hr Breach Notification Workflow", badge: "badge-warning", badgeLabel: "High" },
        { regulation: "ATW (Working Hours Act)", enforcer: "Nederlandse Arbeidsinspectie (NLA)", maxFine: "€10,000 (record-keeping flat)", typicalFine: "€200–€400 per employee/day", trigger: "Hours violations, missing time records, repeat offences", defence: "ATW Guard, Time & Attendance Audit Log", badge: "badge-warning", badgeLabel: "High" },
        { regulation: "WTTA", enforcer: "NLA", maxFine: "~€10,000 per worker scheduled", typicalFine: "€8,000 – €10,000", trigger: "Hiring from uncertified temp agency", defence: "WTTA Agency Register, Scheduling Hard-Block", badge: "badge-warning", badgeLabel: "High" },
        { regulation: "CAO Violations", enforcer: "FNV/CNV unions + courts", maxFine: "Unlimited back pay + damages", typicalFine: "€50K – €500K (class action)", trigger: "Incorrect premium calculations, rest period violations", defence: "CAO Rule Engine, Premium Calculator", badge: "badge-info", badgeLabel: "Operational" },
      ],
    },
    roadmap: {
      eyebrow: "Chapter 07 — 18-Month Roadmap",
      title: "Four phases to full compliance",
      subtitle: "The sequence is governed by three rules: nearest hard deadline first, foundation before superstructure, and the one overdue obligation (GDPR breach notification) starts immediately.",
      phases: [
        { id: "P1", label: "Phase 1", title: "Foundation & GDPR", period: "Apr – Jul 2026", sprints: "Sprints 1–10", deadline: "Ongoing (overdue)", accentColor: "#ff3b30", statusLabel: "Start Now", description: "Lay the shared compliance infrastructure and close the one gap that is already in force: the GDPR 72-hour breach notification obligation.", deliverables: [{ name: "Encrypted Audit Log Infrastructure", team: "Engineering", priority: "critical" }, { name: "RBAC Hardening (principle of least privilege)", team: "Engineering / Security", priority: "critical" }, { name: "GDPR Breach Detection Alerting", team: "Engineering", priority: "critical" }, { name: "72-Hour AP Notification Workflow", team: "Engineering / Legal", priority: "critical" }, { name: "Data Subject Rights Portal", team: "Engineering / UX", priority: "warning" }], standards: ["ISO 27001 ISMS initiation", "GDPR Art. 33 & 34"], teams: ["Security Engineering", "Legal/DPO", "Backend"] },
        { id: "P2", label: "Phase 2", title: "EU AI Act Conformity", period: "Aug – Dec 2026", sprints: "Sprints 11–20", deadline: "Dec 31, 2026", accentColor: "#ff9500", statusLabel: "Hard Deadline", description: "Build the EU AI Act conformity module before the deadline. This is the highest-priority engineering workstream in the programme.", deliverables: [{ name: "AI System Registration (EU Art. 51 database)", team: "Legal", priority: "critical" }, { name: "Human Oversight UI (manager approval required)", team: "Engineering / UX", priority: "critical" }, { name: "AI Decision Audit Trail (immutable log)", team: "Engineering", priority: "critical" }, { name: "Bias Monitoring Dashboard", team: "Data Science", priority: "critical" }, { name: "Works Council (OR) Consultation", team: "Product / HR", priority: "critical" }, { name: "AI Transparency Disclosure (employee-facing)", team: "Engineering / UX", priority: "warning" }], standards: ["ISO 42001", "EU AI Act Annex III", "IEEE 7000"], teams: ["AI/ML Engineering", "Frontend", "Legal", "Works Council"], criticalPath: "Works Council consultation must begin Sprint 5 (informally) to avoid blocking Sprint 13." },
        { id: "P3", label: "Phase 3", title: "WTTA & Basic Contract", period: "Jan – Jun 2027", sprints: "Sprints 21–32", deadline: "Jun 30, 2027", accentColor: "#ff9500", statusLabel: "Hard Deadline", description: "Build the two January 2027 compliance features in parallel: WTTA agency certification hard-block and the new basic contract engine.", deliverables: [{ name: "Agency Register (certified/uncertified status)", team: "Engineering", priority: "critical" }, { name: "WTTA API Integration (NLA registry)", team: "Engineering", priority: "critical" }, { name: "Scheduling Hard-Block Engine", team: "Engineering", priority: "critical" }, { name: "Basic Contract Type (min hours guarantee)", team: "Engineering", priority: "critical" }, { name: "Payroll Connector Update", team: "Engineering", priority: "warning" }, { name: "Zero-Hour Contract Migration Tool", team: "Engineering / HR", priority: "warning" }], standards: ["WTTA 2027", "Wet meer zekerheid flexwerkers"], teams: ["Backend", "HR Systems", "Payroll Integration", "Legal"], criticalPath: "NLA API availability uncertain — design CSV fallback from Sprint 20." },
        { id: "P4", label: "Phase 4", title: "Pay Transparency & ISO 27001", period: "Jul – Dec 2027", sprints: "Sprints 33–48", deadline: "Dec 2027 (NL implementation)", accentColor: "#0071e3", statusLabel: "Planned", description: "Complete the Pay Transparency reporting module and achieve ISO 27001 certification — the enterprise procurement gate for major clients.", deliverables: [{ name: "Gender Pay Gap Data Model", team: "Data Engineering", priority: "warning" }, { name: "Pay Transparency Report Builder", team: "Engineering", priority: "warning" }, { name: "ISO 27001 External Certification Audit", team: "Security / External Auditor", priority: "warning" }, { name: "SOC 2 Type II Readiness Assessment", team: "Security", priority: "info" }], standards: ["Pay Transparency Directive", "ISO 27001", "SOC 2 Type II"], teams: ["Data Engineering", "HR", "Security", "External Auditor"] },
      ],
      riskTitle: "Programme Risk Register",
      risks: [
        { risk: "Works Council consultation delayed", probability: "Medium", impact: "High", mitigation: "Start informal OR engagement in Sprint 3, before formal consultation begins in Sprint 7.", probBadge: "badge-warning", impactBadge: "badge-critical" },
        { risk: "NLA WTTA API not available by Q3 2026", probability: "Medium", impact: "High", mitigation: "Design Agency Register to support manual CSV upload as fallback so Hard-Block still functions.", probBadge: "badge-warning", impactBadge: "badge-critical" },
        { risk: "Engineering capacity split by commercial features", probability: "High", impact: "Critical", mitigation: "Formally ring-fence a dedicated compliance squad. PO must escalate any capacity conflicts immediately.", probBadge: "badge-critical", impactBadge: "badge-critical" },
        { risk: "ISO 27001 Stage 2 audit failure", probability: "Low", impact: "Medium", mitigation: "Engage certification body for pre-assessment in Sprint 15 to identify gaps before the formal audit.", probBadge: "badge-covered", impactBadge: "badge-warning" },
      ],
      riskHeaders: ["Risk", "Probability", "Impact", "Mitigation"],
      deliverables: "Deliverables",
      deadline: "Deadline",
      standards: "Standards",
      teams: "Teams",
      criticalPathLabel: "Critical Path Risk",
    },
    footer: {
      title: "PMT SaaS Strategy & Roadmap",
      subtitle: "A board-level strategy briefing for the Dutch supermarket workforce management platform.",
      author: "Prepared by Dimos Gougousis",
      role: "Product Owner — Shift & Resource Management",
      copyright: "© 2026 Dimos Gougousis. All rights reserved.",
      disclaimer: "This document is a strategic briefing prepared for internal board use. All regulatory information is based on publicly available legislation and is subject to change.",
      description: "Shift and Resource Management platform strategy for the Dutch supermarket sector. Prepared for board-level review.",
      authorLabel: "Author",
      classificationLabel: "Classification",
      classification: "Internal — Confidential",
      version: "Version 1.0 · March 2026",
      research: "Research basis: Dutch ATW · CAO Supermarkt · GDPR · EU AI Act · WTTA · Wet meer zekerheid flexwerkers · Pay Transparency Directive",
      standards: "Standards: ISO 27001 · ISO 42001 · SOC 2 · NIST CSF 2.0 · TOGAF 10",
    },
  },

  nl: {
    nav: {
      title: "SaaS Strategie & Roadmap",
      links: ["Samenvatting", "Marktcontext", "Softwareclusters", "Architectuur", "Regelgeving", "Lacune-analyse", "Nalevingskosten", "Roadmap"],
    },
    hero: {
      badge: "Concept Strategie Briefing — Maart 2026",
      title1: "PMT SaaS Strategie",
      title2: "en Roadmap",
      subtitle: "Een uitgebreide productstrategie voor het Nederlandse supermarkt personeelsplanningsplatform — inclusief softwarearchitectuur, regelgevingsnaleving en de 18-maanden leveringsroadmap.",
      cta1: "Verken de Strategie",
      cta2: "Bekijk Lacune-analyse",
      stats: [
        { value: "7", label: "Softwareclusters" },
        { value: "4", label: "Kritieke Nalevingslacunes" },
        { value: "€290M", label: "Max. Boeteblootstelling" },
        { value: "Jan 2027", label: "Volgende Regelgevingsklif" },
      ],
      author: "Opgesteld door Dimos Gougousis, Product Owner",
    },
    market: {
      eyebrow: "Hoofdstuk 01 — Marktcontext",
      title: "De markt waarvoor we bouwen",
      subtitle: "Albert Heijn exploiteert meer dan 1.000 winkels in Nederland en België en heeft meer dan 120.000 medewerkers in dienst. Personeelsplanning op deze schaal is geen backoffice-functie — het is een bedrijfskritisch operationeel systeem.",
      cards: [
        { title: "120.000+ Medewerkers", body: "AH is de grootste supermarktarbeidgever van Nederland. Planningsfouten op schaal vertalen zich direct in regelgevingsboetes, vakbondsklachten en operationele verstoringen." },
        { title: "CAO Supermarkt", body: "De sectorale collectieve arbeidsovereenkomst regelt loontoeslagen, rusttijden en arbeidstijdregels voor elke medewerker. Niet-naleving leidt tot aansprakelijkheid voor nabetaling en vakbondshandhaving." },
        { title: "Flexibele Arbeidskrachten", body: "Een aanzienlijk deel van het AH-personeel werkt op flexibele contracten — uitzendkrachten, oproepkrachten en min-maxcontracten. Elk contracttype brengt afzonderlijke wettelijke verplichtingen met zich mee." },
        { title: "Regelgevingssnelheid", body: "Vier grote wetswijzigingen treden in werking tussen augustus 2026 en januari 2027. Het platform moet vóór elke deadline gereed zijn — niet erna." },
      ],
      gaps: {
        title: "Vier lacunes niet in het conceptonderzoek",
        subtitle: "Het conceptonderzoek dekt het bestaande regelgevingslandschap goed. Echter, vier ingrijpende wetswijzigingen die vóór januari 2027 van kracht worden, ontbreken volledig.",
        items: [
          { law: "WTTA", date: "1 jan. 2027", impact: "Certificering van uitzendbureau verplicht vóór inroostering van uitzendkrachten", badge: "badge-critical", badgeLabel: "Kritiek" },
          { law: "Wet meer zekerheid flexwerkers", date: "1 jan. 2027", impact: "Nuluren-contracten afgeschaft; nieuw basiscontract met gegarandeerd minimumaantal uren vereist", badge: "badge-critical", badgeLabel: "Kritiek" },
          { law: "EU AI-wet", date: "2 aug. 2026", impact: "Geautomatiseerde roostering geclassificeerd als hoog-risico AI — conformiteitsbeoordeling, menselijk toezicht en audittrail vereist", badge: "badge-critical", badgeLabel: "Kritiek" },
          { law: "Richtlijn Loontransparantie", date: "Jan. 2027 (NL)", impact: "Module voor rapportage van de loonkloof tussen mannen en vrouwen en gedisaggregeerd loongegevensmodel vereist", badge: "badge-warning", badgeLabel: "Hoog" },
        ],
      },
    },
    clusters: {
      eyebrow: "Hoofdstuk 02 — Softwareclusters",
      title: "Zeven modulaire clusters",
      subtitle: "Het platform is georganiseerd in zeven onafhankelijk inzetbare clusters. Elk cluster heeft een eigen domein, kan afzonderlijk worden uitgebracht en is direct gekoppeld aan een reeks regelgevingsverplichtingen.",
      items: [
        { id: "01", title: "Vestiging & Dienst­beheer", color: "#0071e3", description: "De operationele planningskern. Vestigingsmanagers maken, publiceren en passen roosters aan. De ATW-bewaker werkt in realtime om arbeidstijdovertredingen te voorkomen voordat ze worden begaan.", features: ["Realtime ATW-arbeidstijdbewaker", "Aanmaken, bewerken en publiceren van diensten", "Goedkeuringsworkflows voor managers", "Zichtbaarheid over meerdere vestigingen", "Conflictdetectie en -oplossing"] },
        { id: "02", title: "Compliance & Governance Hub", color: "#ff3b30", description: "Het regelgevende brein van het platform. De CAO-regelmotor berekent toeslagen automatisch. De WTTA-tracker blokkeert inroostering van niet-gecertificeerde bureaus. De AI-wetmodule biedt de menselijke toezichtslaag.", features: ["CAO-toeslag berekeningsmotor", "WTTA-harde blokkering voor niet-gecertificeerde bureaus", "EU AI-wet conformiteitsmodule", "Audittrail (onveranderlijk, versleuteld)", "Rapportagetools voor de ondernemingsraad"] },
        { id: "03", title: "Resourcepool­beheer", color: "#34c759", description: "Beheert de volledige arbeidscyclus — van vaste medewerkers tot flexwerkers en uitzendkrachten. Het bureauportaal biedt realtime certificeringsstatus voor WTTA-naleving.", features: ["Medewerkersprofielen en contractbeheer", "Flexpool en beschikbaarheidsbeheer", "Bureauportaal met WTTA-certificeringsstatus", "Tracker voor omzetting van tijdelijk naar vast", "Vaardigheden- en kwalificatiematrix"] },
        { id: "04", title: "Vraagprognose & Arbeids­optimalisatie", color: "#ff9500", description: "AI-gestuurde vraagprognose en geautomatiseerde roostergeneratie. Alle AI-aanbevelingen vereisen goedkeuring van de manager (EU AI-wet verplichting menselijk toezicht). Biasmonitoring loopt continu.", features: ["AI-gestuurde vraagprognose", "Geautomatiseerde roostergeneratie (met menselijk toezicht)", "Biasmonitoring dashboard", "Wat-als scenario simulator", "Arbeidskosten optimalisatiemotor"] },
        { id: "05", title: "Medewerker Selfservice & Betrokkenheid", color: "#af52de", description: "De medewerkersgerichte mobiele applicatie. Medewerkers bekijken roosters, dienen beschikbaarheid in, vragen dienstwissels aan en raadplegen hun contractgegevens. De basiscontractweergave is vereist door de Wet meer zekerheid flexwerkers.", features: ["Mobiele roosterweergave", "Beschikbaarheid indienen", "Dienstwisselverzoeken", "Basiscontractweergave (weergave minimumaantal uren)", "In-app berichten en meldingen"] },
        { id: "06", title: "Tijd & Aanwezigheid", color: "#5ac8fa", description: "Beheer van in- en uitklokken, afwijkingsoplossing en salarisexport. Het auditlogboek is de primaire verdediging tegen de €10.000 ATW-boete voor administratiefalen.", features: ["In-/uitklokken (mobiel en terminal)", "Afwijkingsdetectie en -oplossing", "Salarisexport connector", "Overwerk- en toeslag berekening", "Onveranderlijk tijdregistratie auditlogboek"] },
        { id: "07", title: "Analyse, Rapportage & Incidentbeheer", color: "#ff2d55", description: "De intelligentielaag. KPI-dashboards voor vestigingsmanagers, nalevingsrapporten voor juridische zaken en de loonkloof rapportagemodule vereist door de Richtlijn Loontransparantie.", features: ["Vestiging KPI-dashboards", "Nalevings- en regelgevingsrapporten", "Loonkloof rapportagemodule (EU-richtlijn)", "Incidentregistratie en responsworkflow", "Samenvatting export voor directie"] },
      ],
    },
    architecture: {
      eyebrow: "Hoofdstuk 03 — Softwarearchitectuur",
      title: "Drielaagse architectuur",
      subtitle: "Het platform is gestructureerd in drie afzonderlijke maar onderling verbonden lagen. Lacunes ontstaan waar een regelgevingsverplichting bestaat maar noch het bedrijfsproces noch de softwarefunctie is ontworpen om deze aan te pakken.",
      layers: [
        { id: "L1", label: "Laag 1", title: "Bedrijfsarchitectuur", color: "#0071e3", description: "Definieert wat de organisatie moet doen: diensten inplannen, flexwerkers beheren, arbeidskosten bijhouden, incidenten afhandelen en rapporteren aan toezichthouders.", items: ["Dienst­inroostering en roosterbeheer", "Levenscyclusbeheer van flexibele arbeidskrachten", "Bijhouden en budgetteren van arbeidskosten", "Incidentregistratie en -respons", "Regelgevingsrapportage aan NLA en AP"] },
        { id: "L2", label: "Laag 2", title: "Softwarearchitectuur", color: "#34c759", description: "Definieert hoe het systeem die activiteiten mogelijk maakt. Zeven modulaire clusters communiceren via event-gestuurde API's. Het nalevingscluster is de gezaghebbende bron voor alle regelgevingsregels.", items: ["7 modulaire clusters (onafhankelijk inzetbaar)", "Event-gestuurde microservices-architectuur", "Onveranderlijk auditlogboek (gedeelde infrastructuur)", "RBAC-beveiligingsmodel (principe van minste rechten)", "API-first ontwerp (salaris-, HR-, bureauintegraties)"] },
        { id: "L3", label: "Laag 3", title: "Regelgevingsarchitectuur", color: "#ff9500", description: "Definieert de regels die beide lagen beperken. Cascadeert van EU-richtlijnen via Nederlands nationaal recht naar sectorale CAO-overeenkomsten.", items: ["EU AI-wet (aug. 2026)", "AVG / GDPR (doorlopend)", "ATW — Arbeidstijdenwet", "CAO Supermarkt 2024–2026", "WTTA (jan. 2027)", "Wet meer zekerheid flexwerkers (jan. 2027)"] },
      ],
      missionCritical: {
        title: "Bedrijfskritieke Systemen",
        subtitle: "Vijf systemen zijn geclassificeerd als bedrijfskritiek. Hun uitval leidt onmiddellijk tot regelgevingsaansprakelijkheid of financieel verlies.",
        items: [
          { system: "ATW Arbeidstijdbewaker", consequence: "NLA-boetes beginnen onmiddellijk op te lopen", rto: "< 1 uur", badge: "badge-critical" },
          { system: "CAO-regelmotor", consequence: "Elke ingeplande dienst = potentiële nabetaling", rto: "< 1 uur", badge: "badge-critical" },
          { system: "Tijd & Aanwezigheidsmotor", consequence: "€10.000 vaste boete bij administratiefalen", rto: "< 2 uur", badge: "badge-critical" },
          { system: "AVG Gegevensbeheermodule", consequence: "Onrechtmatige gegevensverwerking — AP-handhaving", rto: "< 4 uur", badge: "badge-critical" },
          { system: "WTTA Harde Blokkeermotor", consequence: "€10.000 per ingeplande niet-gecertificeerde kracht", rto: "< 1 uur", badge: "badge-critical" },
        ],
        headers: ["Systeem", "Gevolg bij Uitval", "RTO", "Status"],
      },
    },
    regulatory: {
      eyebrow: "Hoofdstuk 04 — Regelgevingslandschap",
      title: "De regelgevingsstack",
      subtitle: "Zes regelgevingsinstrumenten zijn van toepassing op het platform. Ze cascaderen van EU-richtlijnen via Nederlands nationaal recht naar sectorale collectieve overeenkomsten.",
      items: [
        { id: "R1", badge: "EU-richtlijn", badgeClass: "badge-critical", title: "EU AI-wet", effective: "2 aug. 2026", description: "Geautomatiseerde planningssystemen zijn geclassificeerd als hoog-risico AI onder Bijlage III. Vereist een conformiteitsbeoordeling, menselijk toezichtmechanisme, audittrail, biasmonitoring en registratie in de EU AI-database.", obligations: ["Conformiteitsbeoordeling vóór inzet", "Menselijk toezicht UI (manager moet AI-aanbevelingen goedkeuren)", "Onveranderlijk AI-beslissing audittrail", "Biasmonitoring op leeftijd, geslacht, contracttype", "EU AI-systeemregistratie (Artikel 51)"], fine: "€15M of 3% wereldwijde omzet" },
        { id: "R2", badge: "EU-verordening", badgeClass: "badge-critical", title: "AVG / GDPR", effective: "Doorlopend (sinds 2018)", description: "Alle medewerkers planningsgegevens zijn persoonsgegevens. Het platform verwerkt bijzondere categorieën (gezondheidsgegevens voor ziekteverlof, biometrische gegevens bij vingerafdruk inklokken). De 72-uur meldplicht is al van kracht maar nog niet geïmplementeerd.", obligations: ["72-uur melding aan AP (Artikel 33)", "Portaal voor rechten van betrokkenen (inzage, verwijdering, overdraagbaarheid)", "Privacy by Design in alle nieuwe functies", "Verwerkersovereenkomsten met alle subverwerkers", "Gedocumenteerde rechtsgrondslag voor elke gegevenscategorie"], fine: "€20M of 4% wereldwijde omzet" },
        { id: "R3", badge: "Nederlandse wet", badgeClass: "badge-warning", title: "ATW — Arbeidstijdenwet", effective: "Doorlopend", description: "De Arbeidstijdenwet stelt maximale dagelijkse en wekelijkse werktijden, minimale rusttijden en verplichte pauzeregels vast. De NLA handhaaft met per-medewerker, per-dag boetes die worden vermenigvuldigd met de bedrijfsomvang.", obligations: ["Realtime ATW-bewaker (voorkom overtredingen vóór inroostering)", "Maximale uren bijhouden per medewerker per week", "Handhaving rusttijden (minimaal 11 uur)", "Onveranderlijke tijdregistraties (€10.000 boete bij falen)", "Detectie van herhaalde overtredingen (boetes verdubbelen)"], fine: "€200–€400 per medewerker per dag" },
        { id: "R4", badge: "Nederlandse wet", badgeClass: "badge-warning", title: "WTTA — Wet toelating terbeschikkingstelling van arbeidskrachten", effective: "1 jan. 2027", description: "Vanaf januari 2027 mogen alleen gecertificeerde uitzendbureaus arbeidskrachten leveren. Inleners die niet-gecertificeerde bureaus gebruiken riskeren boetes tot €10.000 per arbeidskracht.", obligations: ["Bureaucertificeringsregister (realtime NLA API of CSV-fallback)", "Harde blokkering voor niet-gecertificeerde bureaus", "Geautomatiseerde hercertificeringsmeldingen (jaarlijkse verlenging)", "Audittrail van alle bureauplanningsbeslissingen"], fine: "€10.000 per ingeplande kracht van niet-gecertificeerd bureau" },
        { id: "R5", badge: "Sector CAO", badgeClass: "badge-info", title: "CAO Supermarkt 2024–2026", effective: "Doorlopend", description: "De collectieve arbeidsovereenkomst voor de supermarktsector regelt loonschalen, diensttoeslagen (avond, weekend, feestdag), rusttijdregels en opzegtermijnen voor roosterwijzigingen.", obligations: ["Automatische toeslag berekening (avond, weekend, feestdag)", "Minimale opzegtermijn voor roosterwijzigingen", "Handhaving rusttijden conform CAO-regels", "Bijhouden van loonschaalprogressie", "Vakbondsrapportage (FNV/CNV)"], fine: "Onbeperkte nabetaling + schadevergoeding (risico op collectieve actie)" },
        { id: "R6", badge: "EU-richtlijn", badgeClass: "badge-info", title: "Richtlijn Loontransparantie", effective: "Jan. 2027 (NL implementatie)", description: "Verplicht werkgevers om loonkloven tussen mannen en vrouwen te rapporteren en loontransparantie te bieden aan medewerkers. De Nederlandse implementatie wordt verwacht in januari 2027.", obligations: ["Loonkloof gegevensmodel (per functie, schaal, contracttype)", "Jaarlijks loonkloof rapport (EU-sjabloon)", "Bekendmaking van loonbanden aan medewerkers", "Herstelplan als kloof meer dan 5% bedraagt"], fine: "N.t.b. — NL implementatie in behandeling" },
      ],
    },
    gaps: {
      eyebrow: "Hoofdstuk 05 — Lacune-analyse",
      title: "Bedrijfskritieke Gebieden",
      subtitle: "Vier kritieke lacunes vertegenwoordigen tijdgebonden, existentiële risico's voor de wettigheid van het platform. Elk heeft een kwantificeerbare boeteblootstelling en een gedefinieerde bouwvereiste.",
      items: [
        { id: "GAP-01", title: "AVG Datalekmelding Workflow", deadline: "Achterstallig — nu van kracht", fine: "€10M of 2% wereldwijde omzet", status: "badge-critical", statusLabel: "Achterstallig", color: "#ff3b30", description: "AVG Artikel 33 vereist melding aan de Autoriteit Persoonsgegevens binnen 72 uur na ontdekking van een datalek. Het platform heeft momenteel geen geautomatiseerde lekdetectie, geen meldworkflow en geen AP-meldsjabloon.", buildRequirement: "Geautomatiseerde lekdetectiemeldingen, 72-uur afteltimer workflow, AP-meldsjabloon integratie, FG-escalatiepad.", priority: "Onmiddellijk — Sprint 1" },
        { id: "GAP-02", title: "EU AI-wet Conformiteitsmodule", deadline: "2 aug. 2026", fine: "€15M of 3% wereldwijde omzet", status: "badge-critical", statusLabel: "Kritiek", color: "#ff3b30", description: "De geautomatiseerde roostermotor is een hoog-risico AI-systeem onder EU AI-wet Bijlage III. Zonder conformiteitsbeoordeling, menselijk toezichtmechanisme en audittrail mag het systeem na 2 augustus 2026 niet meer legaal opereren.", buildRequirement: "AI-conformiteitsbeoordelingsdocumentatie, menselijk toezicht UI, onveranderlijk AI-beslissing audittrail, biasmonitoring dashboard, ondernemingsraadconsultatie, EU AI-systeemregistratie.", priority: "Fase 2 — Sprints 11–20" },
        { id: "GAP-03", title: "WTTA Bureau Certificering Harde Blokkering", deadline: "1 jan. 2027", fine: "€10.000 per ingeplande kracht", status: "badge-critical", statusLabel: "Kritiek", color: "#ff9500", description: "Vanaf januari 2027 is het inroosteren van een kracht van een niet-gecertificeerd uitzendbureau een directe regelgevingsovertreding. Het platform heeft geen bureaucertificeringsregister en geen mechanisme om inroostering van niet-gecertificeerde bureaus te blokkeren.", buildRequirement: "Bureaugegevensmodel met WTTA-certificeringsstatus, NLA API-integratie (CSV-fallback), harde blokkeermotor voor inroostering, geautomatiseerde hercertificeringsmeldingen.", priority: "Fase 3 — Sprints 21–32" },
        { id: "GAP-04", title: "Basiscontractmotor", deadline: "1 jan. 2027", fine: "Onbeperkte nabetaling", status: "badge-critical", statusLabel: "Kritiek", color: "#ff9500", description: "De Wet meer zekerheid flexwerkers schrapt nuluren-contracten per januari 2027. Alle getroffen medewerkers moeten worden gemigreerd naar een nieuw 'basiscontract' met een gegarandeerd minimumaantal uren.", buildRequirement: "Nieuw basiscontracttype in het gegevensmodel, motor voor bijhouden van minimumurengarantie, update salarisconnector, selfservice contractweergave voor medewerkers, migratietool voor nuluren-contracten.", priority: "Fase 3 — Sprints 21–32" },
      ],
      standards: {
        title: "Vereiste Industriestandaarden",
        subtitle: "Vier certificeringen zijn het meest strategisch belangrijk voor regelgevingsnaleving en inkoop door zakelijke klanten.",
        items: [
          { standard: "ISO/IEC 27001 + 27701", scope: "Informatiebeveiliging & Privacy", regulation: "AVG / GDPR", priority: "badge-critical", priorityLabel: "Kritiek" },
          { standard: "ISO/IEC 42001", scope: "AI-beheersysteem", regulation: "EU AI-wet", priority: "badge-critical", priorityLabel: "Kritiek" },
          { standard: "SOC 2 Type II", scope: "Beveiliging, Beschikbaarheid, Vertrouwelijkheid", regulation: "Zakelijke inkoopdrempel", priority: "badge-warning", priorityLabel: "Hoog" },
          { standard: "NIST CSF 2.0", scope: "Cyberbeveiligingsraamwerk", regulation: "Overkoepelend", priority: "badge-warning", priorityLabel: "Hoog" },
          { standard: "IEEE 7000", scope: "Ethisch AI-ontwerp", regulation: "EU AI-wet (aanvullend)", priority: "badge-info", priorityLabel: "Aanbevolen" },
        ],
        headers: ["Standaard", "Toepassingsgebied", "Regelgeving", "Prioriteit"],
      },
    },
    compliance: {
      eyebrow: "Hoofdstuk 06 — Nalevingskostenanalyse",
      title: "De kosten van niet-naleving",
      subtitle: "Elke lacune in het platform brengt een kwantificeerbaar financieel risico met zich mee. De gecombineerde maximale blootstelling over alle lacunes bedraagt meer dan €290M — veel meer dan de kosten van het bouwen van de vereiste functies.",
      callout: "De kosten van het bouwen van de vier kritieke lacunefuncties worden geschat op 6–12 maanden engineeringinspanning. De kosten van het niet bouwen ervan zijn een enkele AVG-handhavingsactie die €290 miljoen kan overschrijden, of een EU AI-wet boete van maximaal €15 miljoen. De zakelijke rechtvaardiging voor nalevingsinvestering is ondubbelzinnig.",
      stats: [
        { value: "€290M+", label: "Gecombineerde Maximale Boeteblootstelling", sub: "Over alle vier kritieke lacunes", color: "#ff3b30" },
        { value: "€500K+", label: "Realistische Blootstelling bij Enkel Incident", sub: "WTTA: 50 krachten van niet-gecertificeerd bureau", color: "#ff9500" },
        { value: "€5M–€50M", label: "Waarschijnlijk AVG-handhavingsbereik", sub: "Op basis van Nederlandse AP-precedenten", color: "#0071e3" },
      ],
      chartTitle: "Maximale Boete per Regelgeving (€M)",
      chartNote: "ATW- en WTTA-boetes zijn indicatief weergegeven — werkelijke schaal verschilt per incident; zie tabel hieronder voor per-incident bedragen.",
      headers: ["Regelgeving", "Handhaver", "Maximale Boete", "Gebruikelijke Boete", "Primaire Aanleiding", "Softwareverdediging", "Ernst"],
      rows: [
        { regulation: "AVG — Artikel 83.5", enforcer: "Autoriteit Persoonsgegevens (AP)", maxFine: "€20M of 4% wereldwijde omzet", typicalFine: "€750K – €10M", trigger: "Onrechtmatige verwerking, lek zonder melding, ontbrekende rechtsgrondslag", defence: "AVG-module, Datalekmelding Workflow, Auditlogboek", badge: "badge-critical", badgeLabel: "Kritiek" },
        { regulation: "EU AI-wet — Hoog risico", enforcer: "AP (verwacht)", maxFine: "€15M of 3% wereldwijde omzet", typicalFine: "€5M – €15M", trigger: "Hoog-risico AI zonder conformiteitsbeoordeling, geen menselijk toezicht", defence: "AI Conformiteitsmodule, Menselijk Toezicht UI, Biasmonitor", badge: "badge-critical", badgeLabel: "Kritiek" },
        { regulation: "AVG — Artikel 83.4", enforcer: "AP", maxFine: "€10M of 2% wereldwijde omzet", typicalFine: "€475K – €5M", trigger: "Gemiste 72-uur melding aan AP", defence: "72-uur Datalekmelding Workflow", badge: "badge-warning", badgeLabel: "Hoog" },
        { regulation: "ATW (Arbeidstijdenwet)", enforcer: "Nederlandse Arbeidsinspectie (NLA)", maxFine: "€10.000 (vaste administratieboete)", typicalFine: "€200–€400 per medewerker/dag", trigger: "Arbeidstijdovertredingen, ontbrekende tijdregistraties, herhaalde overtredingen", defence: "ATW-bewaker, Tijd & Aanwezigheid Auditlogboek", badge: "badge-warning", badgeLabel: "Hoog" },
        { regulation: "WTTA", enforcer: "NLA", maxFine: "~€10.000 per ingeplande kracht", typicalFine: "€8.000 – €10.000", trigger: "Inhuren van niet-gecertificeerd uitzendbureau", defence: "WTTA Bureauregister, Inroostering Harde Blokkering", badge: "badge-warning", badgeLabel: "Hoog" },
        { regulation: "CAO-overtredingen", enforcer: "FNV/CNV vakbonden + rechtbanken", maxFine: "Onbeperkte nabetaling + schadevergoeding", typicalFine: "€50K – €500K (collectieve actie)", trigger: "Onjuiste toeslag berekeningen, overtredingen rusttijden", defence: "CAO-regelmotor, Toeslag Calculator", badge: "badge-info", badgeLabel: "Operationeel" },
      ],
    },
    roadmap: {
      eyebrow: "Hoofdstuk 07 — 18-Maanden Roadmap",
      title: "Vier fasen naar volledige naleving",
      subtitle: "De volgorde wordt bepaald door drie regels: eerst de dichtstbijzijnde harde deadline, fundament vóór bovenbouw, en de ene achterstallige verplichting (AVG datalekmelding) begint onmiddellijk.",
      phases: [
        { id: "P1", label: "Fase 1", title: "Fundament & AVG", period: "Apr – jul. 2026", sprints: "Sprints 1–10", deadline: "Doorlopend (achterstallig)", accentColor: "#ff3b30", statusLabel: "Nu Starten", description: "Leg de gedeelde nalevingsinfrastructuur en sluit de ene lacune die al van kracht is: de AVG 72-uur datalekmelding verplichting.", deliverables: [{ name: "Versleutelde Auditlogboek Infrastructuur", team: "Engineering", priority: "critical" }, { name: "RBAC Hardening (principe van minste rechten)", team: "Engineering / Beveiliging", priority: "critical" }, { name: "AVG Datalekdetectie Meldingen", team: "Engineering", priority: "critical" }, { name: "72-Uur AP Meldworkflow", team: "Engineering / Juridisch", priority: "critical" }, { name: "Portaal Rechten van Betrokkenen", team: "Engineering / UX", priority: "warning" }], standards: ["ISO 27001 ISMS initiatie", "AVG Art. 33 & 34"], teams: ["Beveiligingsengineering", "Juridisch/FG", "Backend"] },
        { id: "P2", label: "Fase 2", title: "EU AI-wet Conformiteit", period: "Aug – dec. 2026", sprints: "Sprints 11–20", deadline: "31 dec. 2026", accentColor: "#ff9500", statusLabel: "Harde Deadline", description: "Bouw de EU AI-wet conformiteitsmodule vóór de deadline. Dit is de hoogst geprioriteerde engineeringwerkstroom in het programma.", deliverables: [{ name: "AI-systeemregistratie (EU Art. 51 database)", team: "Juridisch", priority: "critical" }, { name: "Menselijk Toezicht UI (managersgoedkeuring vereist)", team: "Engineering / UX", priority: "critical" }, { name: "AI-beslissing Audittrail (onveranderlijk logboek)", team: "Engineering", priority: "critical" }, { name: "Biasmonitoring Dashboard", team: "Data Science", priority: "critical" }, { name: "Ondernemingsraad (OR) Consultatie", team: "Product / HR", priority: "critical" }, { name: "AI Transparantie Openbaarmaking (medewerkersgericht)", team: "Engineering / UX", priority: "warning" }], standards: ["ISO 42001", "EU AI-wet Bijlage III", "IEEE 7000"], teams: ["AI/ML Engineering", "Frontend", "Juridisch", "Ondernemingsraad"], criticalPath: "OR-consultatie moet beginnen in Sprint 5 (informeel) om blokkering van Sprint 13 te voorkomen." },
        { id: "P3", label: "Fase 3", title: "WTTA & Basiscontract", period: "Jan – jun. 2027", sprints: "Sprints 21–32", deadline: "30 jun. 2027", accentColor: "#ff9500", statusLabel: "Harde Deadline", description: "Bouw de twee januari 2027 nalevingsfuncties parallel: WTTA bureaucertificering harde blokkering en de nieuwe basiscontractmotor.", deliverables: [{ name: "Bureauregister (gecertificeerd/niet-gecertificeerd)", team: "Engineering", priority: "critical" }, { name: "WTTA API-integratie (NLA-register)", team: "Engineering", priority: "critical" }, { name: "Inroostering Harde Blokkeermotor", team: "Engineering", priority: "critical" }, { name: "Basiscontracttype (minimumurengarantie)", team: "Engineering", priority: "critical" }, { name: "Salarisconnector Update", team: "Engineering", priority: "warning" }, { name: "Nuluren-contract Migratietool", team: "Engineering / HR", priority: "warning" }], standards: ["WTTA 2027", "Wet meer zekerheid flexwerkers"], teams: ["Backend", "HR-systemen", "Salarisintegratie", "Juridisch"], criticalPath: "NLA API-beschikbaarheid onzeker — ontwerp CSV-fallback vanaf Sprint 20." },
        { id: "P4", label: "Fase 4", title: "Loontransparantie & ISO 27001", period: "Jul – dec. 2027", sprints: "Sprints 33–48", deadline: "Dec. 2027 (NL implementatie)", accentColor: "#0071e3", statusLabel: "Gepland", description: "Voltooi de Loontransparantie rapportagemodule en behaal ISO 27001-certificering — de zakelijke inkoopdrempel voor grote klanten.", deliverables: [{ name: "Loonkloof Gegevensmodel", team: "Data Engineering", priority: "warning" }, { name: "Loontransparantie Rapportbouwer", team: "Engineering", priority: "warning" }, { name: "ISO 27001 Externe Certificeringsaudit", team: "Beveiliging / Externe Auditor", priority: "warning" }, { name: "SOC 2 Type II Gereedheidsonderzoek", team: "Beveiliging", priority: "info" }], standards: ["Richtlijn Loontransparantie", "ISO 27001", "SOC 2 Type II"], teams: ["Data Engineering", "HR", "Beveiliging", "Externe Auditor"] },
      ],
      riskTitle: "Programma Risicoregister",
      risks: [
        { risk: "OR-consultatie vertraagd", probability: "Gemiddeld", impact: "Hoog", mitigation: "Start informeel OR-overleg in Sprint 3, vóór de formele consultatie begint in Sprint 7.", probBadge: "badge-warning", impactBadge: "badge-critical" },
        { risk: "NLA WTTA API niet beschikbaar voor K3 2026", probability: "Gemiddeld", impact: "Hoog", mitigation: "Ontwerp Bureauregister met ondersteuning voor handmatige CSV-upload als fallback zodat Harde Blokkering nog steeds werkt.", probBadge: "badge-warning", impactBadge: "badge-critical" },
        { risk: "Engineeringcapaciteit verdeeld over commerciële functies", probability: "Hoog", impact: "Kritiek", mitigation: "Formeel een dedicated nalevingsteam reserveren. PO moet capaciteitsconflicten onmiddellijk escaleren.", probBadge: "badge-critical", impactBadge: "badge-critical" },
        { risk: "ISO 27001 Fase 2 audit mislukt", probability: "Laag", impact: "Gemiddeld", mitigation: "Certificeringsinstantie inschakelen voor vooronderzoek in Sprint 15 om lacunes te identificeren vóór de formele audit.", probBadge: "badge-covered", impactBadge: "badge-warning" },
      ],
      riskHeaders: ["Risico", "Kans", "Impact", "Mitigatie"],
      deliverables: "Deliverables",
      deadline: "Deadline",
      standards: "Standaarden",
      teams: "Teams",
      criticalPathLabel: "Kritiek Pad Risico",
    },
    footer: {
      title: "PMT SaaS Strategie & Roadmap",
      subtitle: "Een bestuursniveau strategie briefing voor het Nederlandse supermarkt personeelsplanningsplatform.",
      author: "Opgesteld door Dimos Gougousis",
      role: "Product Owner — Dienst & Resourcebeheer",
      copyright: "© 2026 Dimos Gougousis. Alle rechten voorbehouden.",
      disclaimer: "Dit document is een strategische briefing opgesteld voor intern bestuursgebruik. Alle regelgevingsinformatie is gebaseerd op openbaar beschikbare wetgeving en kan worden gewijzigd.",
      description: "Strategie voor het Dienst- en Resourcebeheer platform voor de Nederlandse supermarktsector. Opgesteld voor bestuursreview.",
      authorLabel: "Auteur",
      classificationLabel: "Classificatie",
      classification: "Intern — Vertrouwelijk",
      version: "Versie 1.0 · Maart 2026",
      research: "Onderzoeksbasis: ATW · CAO Supermarkt · AVG/GDPR · EU AI-wet · WTTA · Wet meer zekerheid flexwerkers · Richtlijn Loontransparantie",
      standards: "Standaarden: ISO 27001 · ISO 42001 · SOC 2 · NIST CSF 2.0 · TOGAF 10",
    },
  },
};
