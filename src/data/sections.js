export const sections = [
  {
    id: "problem",
    navLabel: "The Springfield Paradox",
    navPreview: "D'oh! Why fragmented data costs Springfield $4.8M/year",
    icon: "alert-circle",

    heroStat: {
      value: "3.2x",
      label: "more donuts Homer could buy if spatial data wasn't fragmented",
      countUp: false,
      duration: 2000
    },

    keyInsight: "Every Springfield department solves the same problems independently. Mr. Burns runs the plant his way, Chief Wiggum maps crime his way, and Mayor Quimby... well, he doesn't really do much at all.",

    visualType: "splitComparison",
    visualData: {
      before: {
        label: "Springfield Today",
        description: "742 Evergreen Terrace: No one knows what anyone else is doing",
        icon: "scattered",
        details: [
          "Nuclear plant data in Burns' vault (excellent...)",
          "Police records in Wiggum's donut box",
          "School data wherever Skinner left it",
          "Moe's customer database: napkin-based"
        ]
      },
      after: {
        label: "With Framework",
        description: "One Springfield standard, local flexibility (even for Shelbyville)",
        icon: "connected",
        details: [
          "Shared emergency response (finally!)",
          "Consistent AI-ready formats",
          "Automated quality pipelines",
          "Bart can't hack it (probably)"
        ]
      }
    },

    cta: {
      text: "Show the D'oh! cost",
      type: "reveal",
      reveal: "$4.8M/year in Springfield alone - that's 960,000 donuts, Homer."
    },

    supportingPoints: [
      "Springfield Nuclear Plant negotiated separately from Shelbyville's for the same safety monitoring",
      "Chief Wiggum's crime mapping is incompatible with Lou and Eddie's actual patrol routes",
      "Principal Skinner repeats data quality checks that Mrs. Krabappel already did",
      "When Sideshow Bob escapes (again), incompatible data formats delay response by 2.3 episodes"
    ]
  },

  {
    id: "advantage",
    navLabel: "Springfield's Hidden Assets",
    navPreview: "30+ departments, surprisingly 3-5 years ahead",
    icon: "zap",

    heroStat: {
      value: "30+",
      label: "Springfield departments that somehow keep the town running",
      countUp: true,
      duration: 2000,
      suffix: ""
    },

    keyInsight: "Springfield isn't asking for special treatment - despite the chaos, they're actually 3-5 years ahead. Professor Frink's been doing AI since 1989. GLAVIN!",

    visualType: "toggleComparison",
    visualData: {
      metrics: ["Platform Maturity", "Open Data Readiness", "Digital Twin Progress"],
      waValues: [85, 80, 70],
      nationalValues: [60, 55, 40],
      toggleStates: [
        { id: "wa", label: "Springfield" },
        { id: "national", label: "Shelbyville" }
      ]
    },

    cta: {
      text: "Why Springfield is different",
      type: "reveal",
      reveal: [
        "Professor Frink's Lab = whole-of-government R&D, not just explosions",
        "Economic modeling shows Duff Beer alone drives nation-leading GSP impact",
        "Already using AI-ready formats (Burns approved them... reluctantly)",
        "30+ departments collaborating despite Quimby's 'leadership'"
      ]
    },

    supportingPoints: [
      "Springfield Elementary's computer lab has been operational since Season 1",
      "Krusty Burger provides unified food safety data across all franchises",
      "Springfield Gorge digital twin integrates real-time and historical skateboard trajectory data",
      "Town already committed to open data principles (Lisa insisted)"
    ]
  },

  {
    id: "national-framework",
    navLabel: "The Springfield Protocol",
    navPreview: "Ship a working minimum in 6 months using Springfield templates",
    icon: "network",

    heroStat: {
      value: "4",
      label: "pilot towns needed (not Shelbyville, they're the worst)",
      countUp: true,
      duration: 1500,
      suffix: ""
    },

    keyInsight: "Use Springfield's existing specs as templates. Ship a working minimum in 6 months, not 2 years. Even Homer could follow it. Probably.",

    visualType: "animatedLayers",
    visualData: {
      layers: [
        {
          name: "Platforms & Services",
          description: "Nuclear monitoring, Kwik-E-Mart inventory, digital twins",
          waArtifact: "Springfield Data Integration patterns + API specs",
          color: "blue"
        },
        {
          name: "Standards & Schemas",
          description: "Metadata, formats, governance rules (Burns-approved)",
          waArtifact: "Springfield metadata schema v2.0 - Now with fewer typos!",
          color: "teal"
        },
        {
          name: "Policy & Principles",
          description: "Ethics (Lisa), Privacy (Flanders), AI safety (everyone else)",
          waArtifact: "Springfield Data Ethics Framework (Marge wrote it)",
          color: "navy"
        }
      ]
    },

    stepper: {
      title: "The 90-day sprint to state-wide standard",
      steps: [
        {
          action: "Map current frameworks across all jurisdictions",
          time: "2 weeks",
          myRole: "Interview Burns, Quimby, and Wiggum (bring donuts)"
        },
        {
          action: "Draft minimum viable standard using Springfield templates",
          time: "3 weeks",
          myRole: "Author specs in plain language (Homer-readable level)"
        },
        {
          action: "Pilot with diverse towns (NOT Shelbyville)",
          time: "4 weeks",
          myRole: "Support integration and gather feedback (and donuts)"
        },
        {
          action: "Iterate standard based on pilot learnings",
          time: "2 weeks",
          myRole: "Synthesize feedback, update docs, avoid monorail salesmen"
        },
        {
          action: "Lock governance model and support structure",
          time: "1 week",
          myRole: "Design review cycles - Lisa chairs the ethics committee"
        }
      ]
    },

    cta: {
      text: "See Springfield's reusable artifacts",
      type: "reveal",
      reveal: [
        "Nuclear Safety Schema: 30+ years of near-misses, finally documented",
        "Kwik-E-Mart API Patterns: REST, real-time Squishee inventory",
        "Springfield Governance Model: Co-design with 30+ departments",
        "Open Data Policy: Privacy-preserving (Flanders reviewed it twice)"
      ]
    },

    supportingPoints: [
      "SNPP and Springfield Elementary provide existing governance structures",
      "Springfield already participates in state spatial standards (when they remember)",
      "Framework designed for federation - each town maintains sovereignty",
      "Even Shelbyville could join (if they ask nicely)"
    ]
  },

  {
    id: "wa-adoption",
    navLabel: "Operation: Fix Springfield",
    navPreview: "18→6 months saved by starting with existing patterns",
    icon: "route",

    heroStat: {
      value: "18→6",
      label: "months saved - enough time for Homer to finish his to-do list (just kidding)",
      countUp: false,
      duration: 2000,
      suffix: " mos"
    },

    keyInsight: "Adoption isn't a compliance exercise. It's showing teams how standards make their work easier. Even Lenny and Carl get it.",

    visualType: "compressibleTimeline",
    visualData: {
      standardDuration: 18,
      optimizedDuration: 6,
      steps: [
        {
          name: "Gap Assessment",
          standard: 3,
          optimized: 1,
          whatHappens: "Map framework requirements vs current Springfield standards",
          myValue: "Facilitate discovery interviews (bring Duff, not Fudd)",
          artifact: "Gap analysis report + priority matrix for Springfield"
        },
        {
          name: "Co-design Workshops",
          standard: 4,
          optimized: 1.5,
          whatHappens: "Bring Burns, departments, and Frink together to design approach",
          myValue: "Lead workshops with spec-driven materials and visual examples",
          artifact: "Springfield Implementation Guide v0.1 + department playbooks"
        },
        {
          name: "Standards Development",
          standard: 5,
          optimized: 1.5,
          whatHappens: "Create Springfield-specific extensions and integration specs",
          myValue: "Author clear specs with examples (Frink reviews, adds 'GLAVIN!')",
          artifact: "Technical specifications + reference implementations"
        },
        {
          name: "Pilot Rollout",
          standard: 4,
          optimized: 1.5,
          whatHappens: "Test with SNPP, Police, School, Kwik-E-Mart, and Moe's",
          myValue: "Mentor leads, troubleshoot issues, document patterns",
          artifact: "Proven integration patterns + lessons learned"
        },
        {
          name: "Training & Enablement",
          standard: 2,
          optimized: 0.5,
          whatHappens: "Deliver training across all Springfield departments",
          myValue: "Run tailored programs (executive: Quimby | technical: Frink)",
          artifact: "Training materials + self-service resources (with pictures for Homer)"
        }
      ]
    },

    cta: {
      text: "How we accelerate adoption",
      type: "reveal",
      reveal: [
        "Start with existing Springfield patterns, not from scratch",
        "Governance as enabler: templates, automation, clear examples",
        "Spec-driven approach: ADRs, feature specs, implementation guides",
        "Focus on high-leverage systems that demonstrate immediate value"
      ]
    },

    supportingPoints: [
      "Springfield Nuclear already has strong technical capability (somehow)",
      "Departments have established collaboration patterns through annual Whacking Day",
      "Can demonstrate quick wins with systems already near AI-readiness",
      "Implementation guide becomes living playbook - updated after each crisis"
    ]
  },

  {
    id: "capability",
    navLabel: "The Compound D'oh!",
    navPreview: "$2.4M annual value - that's a LOT of donuts",
    icon: "trending-up",

    heroStat: {
      value: "2.4",
      label: "annual value ($M) from reuse - or 480,000 donuts, for context",
      countUp: true,
      duration: 2500,
      prefix: "$",
      suffix: "M"
    },

    keyInsight: "This isn't a project. It's a capability that compounds. Each department makes the next adoption easier. It's like compound interest, but for competence. Excellent...",

    visualType: "radarWithCalc",
    visualData: {
      dimensions: ["Technology", "Governance", "Skills & Training", "Collaboration", "AI Readiness"],
      today: [60, 65, 55, 70, 50],
      target: [85, 90, 80, 90, 85],
      calculator: {
        title: "Estimate your department's benefit",
        orgSizes: [
          {
            label: "Small (Moe's Tavern size)",
            value: "small",
            benefit: 45000,
            description: "Reduced duplicate effort, access to shared resources, better napkin alternatives"
          },
          {
            label: "Medium (Springfield Elementary size)",
            value: "medium",
            benefit: 180000,
            description: "Standardized workflows, reusable components, Skinner finally gets budget visibility"
          },
          {
            label: "Large (Nuclear Plant size)",
            value: "large",
            benefit: 450000,
            description: "Platform efficiencies, AI capabilities, Burns actually impressed (once)"
          }
        ]
      },
      growthAnimation: {
        title: "The compound effect over 5 years",
        milestones: [
          { year: 1, agencies: 3, value: "Foundation set: SNPP, Police, School" },
          { year: 2, agencies: 8, value: "Patterns proven: Krusty Burger, Hospital join" },
          { year: 3, agencies: 15, value: "2 shared services launched, Frink trains others" },
          { year: 4, agencies: 25, value: "Community thriving, even Comic Book Guy contributes" },
          { year: 5, agencies: 30, value: "Mature capability - Springfield becomes the model" }
        ]
      }
    },

    cta: {
      text: "See the compound effect",
      type: "reveal",
      reveal: "Growth trajectory included in visualization below. Monorail not included."
    },

    supportingPoints: [
      "Living playbook maintained by community of practice (Lisa is secretary)",
      "Track metrics: reuse rates, data quality, crisis response times",
      "Training programs evolve based on real department needs",
      "Success stories accelerate adoption - even Shelbyville wants in now",
      "Framework becomes foundation for next-gen services (Professor Frink already planning)"
    ]
  }
];

// Export metadata for easy reference
export const appMetadata = {
  title: "Springfield's AI-Ready Spatial Framework",
  subtitle: "A 10-minute interactive story (Excellent...)",
  totalSections: sections.length,
  estimatedTime: "10 minutes",
  author: "Craig McDonnell",
  version: "2.0.0-springfield"
};
