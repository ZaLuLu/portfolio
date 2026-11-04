export interface ProjectRecord {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  status: string;
  isFlagship: boolean;
  summary: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  links: {
    live?: string;
    repo?: string;
  };
  metricsNote?: string;
  curatorNote?: string;
}

export const projects: ProjectRecord[] = [
  {
    slug: "retailmind",
    title: "RetailMind",
    subtitle: "Retail Sales Analysis & Business Intelligence Platform",
    category: "Data Systems & Analytics",
    role: "Sole Developer",
    status: "Production Deployed",
    isFlagship: true,
    summary: "End-to-end retail intelligence application analyzing sales trends, category performance, regional sales, profitability metrics, customer behavior, and inventory health.",
    problem: "Translating raw retail transaction datasets into structured business intelligence for pricing, inventory forecasting, and regional performance evaluation.",
    contributions: [
      "Designed and implemented data preprocessing pipelines for transactional retail datasets",
      "Conducted exploratory data analysis across revenue, volume, and customer retention metrics",
      "Engineered profitability analysis and visual sales dashboard components",
      "Deployed responsive web interface for public demonstration"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Web UI"],
    links: {
      live: "https://retailmind-six.vercel.app/",
      repo: "https://github.com/ZaLuLu/retailmind",
    },
    metricsNote: "Live application deployed and publicly verifiable.",
  },
  {
    slug: "machine-learning-implementations",
    title: "Machine Learning Implementations",
    subtitle: "Algorithmic Showcase from First Principles & Scikit-Learn",
    category: "Machine Learning",
    role: "Implementer & Researcher",
    status: "Academic Showcase",
    isFlagship: false,
    summary: "Systematic implementations and evaluations of core supervised and unsupervised machine learning algorithms, comparing mathematical foundations against library benchmarks.",
    problem: "Deepening algorithmic understanding by inspecting gradient updates, decision boundaries, and spatial clustering dynamics beyond black-box APIs.",
    contributions: [
      "Implemented supervised architectures: Decision Trees, KNN, Naive Bayes, Logistic Regression, Random Forest, and AdaBoost",
      "Built clustering pipelines utilizing K-Means, DBSCAN, and Hierarchical Clustering",
      "Formulated metric comparisons across precision, recall, and convergence stability"
    ],
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn", "NumPy"],
    links: {
      repo: "https://github.com/wafiqnawaz",
    },
    curatorNote: "Presented as a rigorous technical academic showcase rather than an inflated production claim.",
  },
  {
    slug: "cybersecurity-field-notes",
    title: "Cybersecurity Field Notes",
    subtitle: "Hands-on Linux Reconnaissance & Network Packet Analysis",
    category: "Systems & Security",
    role: "Systems Explorer",
    status: "Active Exploration",
    isFlagship: false,
    summary: "Practical field notes, packet analysis workflows, and Linux systems administration routines examining network protocol layers, service daemons, and socket behavior.",
    problem: "Gaining real-world systems visibility into host-level traffic, service states, and permission hierarchies under Linux environments.",
    contributions: [
      "Conducted packet inspection and protocol decoding with Wireshark and tcpdump",
      "Audited local network topology and port states using Nmap and ip/ss tooling",
      "Configured system service managers (systemd/systemctl) and inspected journalctl audit trails"
    ],
    technologies: ["Wireshark", "Nmap", "Linux CLI", "systemd", "Networking"],
    links: {
      repo: "https://github.com/wafiqnawaz",
    },
    curatorNote: "Documented as exploratory systems lab work without exaggerated exploit claims.",
  },
  {
    slug: "hajime-initiative",
    title: "The Hajime Initiative",
    subtitle: "Multi-Disciplinary Systems Mastery Protocol",
    category: "Systems Protocol",
    role: "Initiative Lead",
    status: "Phase 1: In Progress",
    isFlagship: false,
    summary: "A deliberate, long-term personal initiative to acquire, document, and deploy verified competencies across software systems, security, and hardware with uncompromising self-reliance.",
    problem: "Avoiding superficial learning and automation crutches by enforcing foundational comprehension, manual implementation, and transparent documentation.",
    contributions: [
      "Structured a 4-phase progression from fundamentals to advanced systems engineering",
      "Enforced a strict policy of zero AI automation for foundational implementation phases",
      "Established reproducible documentation standards for all technical deliverables"
    ],
    technologies: ["Systems Architecture", "Linux", "Networking", "Computer Science"],
    links: {
      repo: "https://github.com/wafiqnawaz",
    },
    curatorNote: "An ongoing umbrella initiative documented progressively as deliverables are finalized.",
  },
];
