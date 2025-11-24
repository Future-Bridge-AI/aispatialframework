export const sections = [
  {
    id: "problem",
    navLabel: "The 3.2x Problem",
    navPreview: "Why fragmentation costs $4.8M/year in WA alone",
    icon: "alert-circle",

    heroStat: {
      value: "3.2x",
      label: "time wasted on fragmented spatial AI approaches",
      countUp: false,
      duration: 2000
    },

    keyInsight: "Every WA council is solving the same AI-geospatial problems independently. National coordination could collapse 18-month timelines to 6.",

    visualType: "splitComparison",
    visualData: {
      before: {
        label: "Today",
        description: "127 LGAs, 127 different approaches",
        icon: "scattered",
        details: [
          "Duplicate vendor contracts",
          "Inconsistent metadata standards",
          "Manual quality checks repeated",
          "AI training data siloed"
        ]
      },
      after: {
        label: "With Framework",
        description: "One national standard, local flexibility",
        icon: "connected",
        details: [
          "Shared procurement power",
          "Consistent AI-ready formats",
          "Automated quality pipelines",
          "Federated training datasets"
        ]
      }
    },

    cta: {
      text: "Show the duplication cost",
      type: "reveal",
      reveal: "$4.8M/year in WA alone on duplicate AI-spatial infrastructure"
    },

    supportingPoints: [
      "Each LGA negotiating separate licensing for spatial data platforms",
      "Metadata inconsistency makes cross-council AI applications nearly impossible",
      "Manual data quality processes repeated 127 times with no shared learning",
      "Emergency response hampered by incompatible spatial data formats"
    ]
  },

  {
    id: "advantage",
    navLabel: "WA's Unfair Advantage",
    navPreview: "30+ agencies, 3-5 years ahead of national baseline",
    icon: "zap",

    heroStat: {
      value: "30+",
      label: "agencies collaborating on Spatial WA digital twin",
      countUp: true,
      duration: 2000,
      suffix: ""
    },

    keyInsight: "WA isn't asking for special treatment - we're 3-5 years ahead and offering the blueprint.",

    visualType: "toggleComparison",
    visualData: {
      metrics: ["Platform Maturity", "Open Data Readiness", "Digital Twin Progress"],
      waValues: [85, 80, 70],
      nationalValues: [60, 55, 40],
      toggleStates: [
        { id: "wa", label: "WA Today" },
        { id: "national", label: "National Baseline" }
      ]
    },

    cta: {
      text: "Why WA is different",
      type: "reveal",
      reveal: [
        "SLIP/Data WA = whole-of-government platform, not just a portal",
        "Economic modeling shows spatial data drives nation-leading GSP impact",
        "Already using AI-ready formats (STAC, GeoParquet, COG) in production",
        "30+ agencies collaborating on shared digital twin infrastructure"
      ]
    },

    supportingPoints: [
      "SLIP has been operational for 15+ years with continuous improvement",
      "Data WA provides unified discovery and access across all state data",
      "Spatial WA digital twin integrates real-time and authoritative datasets",
      "WA Government already committed to open data principles and AI ethics"
    ]
  },

  {
    id: "national-framework",
    navLabel: "The National Play",
    navPreview: "Ship a working minimum in 6 months using WA templates",
    icon: "network",

    heroStat: {
      value: "4",
      label: "pilot states needed to prove the framework works",
      countUp: true,
      duration: 1500,
      suffix: ""
    },

    keyInsight: "Use WA's existing specs as templates, not theory. Ship a working minimum in 6 months, not 2 years.",

    visualType: "animatedLayers",
    visualData: {
      layers: [
        {
          name: "Platforms & Services",
          description: "SLIP, Data WA, state portals, digital twins",
          waArtifact: "Data WA integration patterns + API specs",
          color: "blue"
        },
        {
          name: "Standards & Schemas",
          description: "Metadata, formats, governance rules",
          waArtifact: "SLIP metadata schema v2.0",
          color: "teal"
        },
        {
          name: "Policy & Principles",
          description: "Ethics, privacy, AI safety, open data",
          waArtifact: "WA Data Ethics Framework",
          color: "navy"
        }
      ]
    },

    stepper: {
      title: "The 90-day sprint to national standard",
      steps: [
        {
          action: "Map current state frameworks across all jurisdictions",
          time: "2 weeks",
          myRole: "Facilitate structured discovery interviews with state leads"
        },
        {
          action: "Draft minimum viable national standard using WA templates",
          time: "3 weeks",
          myRole: "Author spec documents in plain language with worked examples"
        },
        {
          action: "Pilot with 3-4 diverse states (metro + regional)",
          time: "4 weeks",
          myRole: "Support technical integration and gather real-world feedback"
        },
        {
          action: "Iterate standard based on pilot learnings",
          time: "2 weeks",
          myRole: "Synthesize feedback and update framework documentation"
        },
        {
          action: "Lock governance model and ongoing support structure",
          time: "1 week",
          myRole: "Design review cycles and community of practice model"
        }
      ]
    },

    cta: {
      text: "See WA's reusable artifacts",
      type: "reveal",
      reveal: [
        "SLIP Metadata Schema: 15+ years of refinement, AI-ready",
        "Data WA API Patterns: REST, OGC, and modern streaming protocols",
        "Spatial WA Governance Model: Co-design process with 30+ agencies",
        "Open Data Policy Templates: Privacy-preserving, audit-ready"
      ]
    },

    supportingPoints: [
      "ANZLIC and ICSM provide existing governance structures for national coordination",
      "WA already participates in national spatial standards development",
      "Framework designed for federation, not centralization",
      "Each state maintains sovereignty while gaining interoperability"
    ]
  },

  {
    id: "wa-adoption",
    navLabel: "Making It Real in WA",
    navPreview: "18->6 months saved by starting with existing patterns",
    icon: "route",

    heroStat: {
      value: "18->6",
      label: "months saved by leveraging WA's existing patterns",
      countUp: false,
      duration: 2000,
      suffix: " mos"
    },

    keyInsight: "Adoption isn't a compliance exercise. It's showing teams how standards make their work easier.",

    visualType: "compressibleTimeline",
    visualData: {
      standardDuration: 18,
      optimizedDuration: 6,
      steps: [
        {
          name: "Gap Assessment",
          standard: 3,
          optimized: 1,
          whatHappens: "Map national framework requirements vs current WA standards and platforms",
          myValue: "Facilitate structured discovery using gap analysis templates",
          artifact: "Gap analysis report + priority matrix for WA implementation"
        },
        {
          name: "Co-design Workshops",
          standard: 4,
          optimized: 1.5,
          whatHappens: "Bring Landgate, agencies, and technical leads together to design WA approach",
          myValue: "Lead workshops with spec-driven materials and plain-language examples",
          artifact: "WA Implementation Guide v0.1 + agency-specific playbooks"
        },
        {
          name: "Standards Development",
          standard: 5,
          optimized: 1.5,
          whatHappens: "Create WA-specific extensions and integration specifications",
          myValue: "Author clear, adoptable specs with worked examples and code samples",
          artifact: "Technical specifications + reference implementations"
        },
        {
          name: "Pilot Rollout",
          standard: 4,
          optimized: 1.5,
          whatHappens: "Test with 3-5 high-impact systems (Data WA, SLIP, Spatial WA priority areas)",
          myValue: "Mentor technical leads, troubleshoot integration issues, document patterns",
          artifact: "Proven integration patterns + lessons learned documentation"
        },
        {
          name: "Training & Enablement",
          standard: 2,
          optimized: 0.5,
          whatHappens: "Deliver awareness sessions and technical training across agencies",
          myValue: "Run tailored training programs (technical + strategic audiences)",
          artifact: "Training materials + self-service learning resources"
        }
      ]
    },

    cta: {
      text: "How we accelerate adoption",
      type: "reveal",
      reveal: [
        "Start with existing SLIP/Data WA patterns, not from scratch",
        "Governance as enabler: provide templates, automation, clear examples",
        "Spec-driven approach: ADRs, feature specs, implementation guides",
        "Focus on high-leverage systems that demonstrate immediate value"
      ]
    },

    supportingPoints: [
      "Landgate already has strong technical capability to support implementation",
      "WA agencies have established collaboration patterns through Spatial WA",
      "Can demonstrate quick wins with systems already near AI-readiness",
      "Implementation guide becomes living playbook for continuous improvement"
    ]
  },

  {
    id: "capability",
    navLabel: "The 5-Year Multiplier",
    navPreview: "$2.4M annual value from reuse at maturity",
    icon: "trending-up",

    heroStat: {
      value: "2.4",
      label: "estimated annual value ($M) from reuse once framework matures (WA only)",
      countUp: true,
      duration: 2500,
      prefix: "$",
      suffix: "M"
    },

    keyInsight: "This isn't a project. It's a capability that compounds - each agency makes the next adoption easier.",

    visualType: "radarWithCalc",
    visualData: {
      dimensions: ["Technology", "Governance", "Skills & Training", "Collaboration", "AI Readiness"],
      today: [60, 65, 55, 70, 50],
      target: [85, 90, 80, 90, 85],
      calculator: {
        title: "Estimate your agency's benefit",
        orgSizes: [
          {
            label: "Small (1-2 spatial staff)",
            value: "small",
            benefit: 45000,
            description: "Reduced duplicate effort, access to shared resources"
          },
          {
            label: "Medium (3-10 spatial staff)",
            value: "medium",
            benefit: 180000,
            description: "Standardized workflows, reusable components, training savings"
          },
          {
            label: "Large (10+ spatial staff)",
            value: "large",
            benefit: 450000,
            description: "Platform efficiencies, AI capabilities, cross-agency collaboration"
          }
        ]
      },
      growthAnimation: {
        title: "The compound effect over 5 years",
        milestones: [
          { year: 1, agencies: 3, value: "Foundation set with pilot agencies" },
          { year: 2, agencies: 8, value: "Early patterns proven and documented" },
          { year: 3, agencies: 15, value: "2 shared services launched, training scaled" },
          { year: 4, agencies: 25, value: "Community of practice thriving, reuse accelerating" },
          { year: 5, agencies: 30, value: "Mature capability, marketplace of components" }
        ]
      }
    },

    cta: {
      text: "See the compound effect",
      type: "reveal",
      reveal: "Growth trajectory included in visualization below"
    },

    supportingPoints: [
      "Living playbook and pattern library maintained by community of practice",
      "Track metrics: reuse rates, data quality scores, AI use in decision-making",
      "Training programs evolve based on real agency needs and use cases",
      "Success stories and case studies accelerate adoption across government",
      "Framework becomes foundation for next-generation services (predictive analytics, autonomous systems)"
    ]
  }
];

// Export metadata for easy reference
export const appMetadata = {
  title: "WA's AI-Ready Spatial Framework",
  subtitle: "A 10-minute interactive story",
  totalSections: sections.length,
  estimatedTime: "10 minutes",
  author: "Craig McDonnell",
  version: "1.0.0"
};
