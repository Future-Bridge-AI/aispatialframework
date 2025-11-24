export const sections = [
  {
    id: "problem",
    navLabel: "The Innovation Gap",
    navPreview: "Why WA's spatial ecosystem is stuck in maintenance mode",
    icon: "alert-circle",

    heroStat: {
      value: "12%",
      label: "of spatial budgets typically allocated to innovation vs 88% on maintenance",
      countUp: true,
      duration: 2000
    },

    keyInsight: "The biggest capability gap isn't technology or data - it's the space to innovate. Teams are so busy maintaining legacy systems they can't experiment with what's next.",

    visualType: "splitComparison",
    visualData: {
      before: {
        label: "Current Reality",
        description: "Maintenance mode dominates",
        icon: "scattered",
        details: [
          "Teams stretched thin on BAU operations",
          "No safe space to experiment with AI/ML",
          "Innovation happens in silos (if at all)",
          "Risk-averse culture blocks new approaches"
        ]
      },
      after: {
        label: "Innovation-First",
        description: "Structured space for experimentation",
        icon: "connected",
        details: [
          "Dedicated innovation capacity protected",
          "Sandbox environments for rapid prototyping",
          "Cross-agency innovation sprints",
          "Fail-fast culture with shared learnings"
        ]
      }
    },

    cta: {
      text: "What innovation could unlock",
      type: "reveal",
      reveal: "AI-powered land valuation, predictive bushfire modeling, real-time infrastructure monitoring - all waiting for capacity to prototype"
    },

    supportingPoints: [
      "Most agencies have ideas but no runway to test them",
      "Technical debt consumes innovation bandwidth",
      "Success is measured by uptime, not breakthroughs",
      "The best spatial talent wants to innovate - retention suffers without it"
    ]
  },

  {
    id: "advantage",
    navLabel: "WA's Innovation Assets",
    navPreview: "The foundation is ready - we just need to build on it",
    icon: "zap",

    heroStat: {
      value: "30+",
      label: "agencies with untapped innovation potential on shared platforms",
      countUp: true,
      duration: 2000,
      suffix: ""
    },

    keyInsight: "WA has spent 15 years building world-class spatial infrastructure. The innovation gap isn't about starting over - it's about unlocking what's already there.",

    visualType: "toggleComparison",
    visualData: {
      metrics: ["Platform Maturity", "Innovation Readiness", "AI Experimentation"],
      waValues: [85, 45, 30],
      nationalValues: [60, 40, 25],
      toggleStates: [
        { id: "wa", label: "WA Today" },
        { id: "national", label: "National Baseline" }
      ]
    },

    cta: {
      text: "Hidden innovation potential",
      type: "reveal",
      reveal: [
        "SLIP/Data WA = production-ready platform waiting for innovative use cases",
        "AI-ready formats (STAC, GeoParquet, COG) already in place",
        "30+ agencies = massive potential for collaborative innovation",
        "Digital twin infrastructure ready for AI experimentation"
      ]
    },

    supportingPoints: [
      "SLIP has been operational for 15+ years - stable foundation for innovation",
      "Data WA provides unified access - reduces innovation friction",
      "Spatial WA digital twin is an innovation accelerator waiting to be activated",
      "Cross-agency relationships exist - need innovation-focused activation"
    ]
  },

  {
    id: "innovation-framework",
    navLabel: "Innovation Architecture",
    navPreview: "A structured approach to breakthrough, not just maintenance",
    icon: "network",

    heroStat: {
      value: "3",
      label: "innovation horizons to balance quick wins with transformational bets",
      countUp: true,
      duration: 1500,
      suffix: ""
    },

    keyInsight: "Innovation isn't chaos - it's structured experimentation. The framework creates protected space for breakthroughs while maintaining operational excellence.",

    visualType: "animatedLayers",
    visualData: {
      layers: [
        {
          name: "Horizon 1: Optimize",
          description: "AI-enhance existing workflows (quick wins)",
          waArtifact: "Automated QA, intelligent search, smart metadata",
          color: "blue"
        },
        {
          name: "Horizon 2: Extend",
          description: "New capabilities on existing platforms",
          waArtifact: "Predictive analytics, cross-agency data fusion, ML pipelines",
          color: "teal"
        },
        {
          name: "Horizon 3: Transform",
          description: "Experimental bets on emerging tech",
          waArtifact: "Foundation models for spatial, autonomous systems, real-time digital twins",
          color: "navy"
        }
      ]
    },

    stepper: {
      title: "90-day innovation sprint framework",
      steps: [
        {
          action: "Innovation audit: map ideas, blockers, and capacity across teams",
          time: "2 weeks",
          myRole: "Facilitate discovery sessions to surface dormant innovation potential"
        },
        {
          action: "Establish innovation sandbox with safe-to-fail boundaries",
          time: "2 weeks",
          myRole: "Design governance that enables experimentation without risk to production"
        },
        {
          action: "Launch 3 cross-agency innovation sprints (one per horizon)",
          time: "4 weeks",
          myRole: "Lead rapid prototyping using AI-native development approaches"
        },
        {
          action: "Demo day: showcase outcomes to leadership and stakeholders",
          time: "1 week",
          myRole: "Translate technical experiments into business value narratives"
        },
        {
          action: "Scale winners, document learnings, seed next wave",
          time: "3 weeks",
          myRole: "Build patterns library and innovation playbook for sustained momentum"
        }
      ]
    },

    cta: {
      text: "See innovation governance model",
      type: "reveal",
      reveal: [
        "Protected innovation budget: minimum 20% of team capacity",
        "Quarterly innovation sprints with cross-agency participation",
        "Failure celebrated when learnings are captured and shared",
        "Innovation metrics alongside operational KPIs"
      ]
    },

    supportingPoints: [
      "Balance innovation with operational stability through clear boundaries",
      "Cross-agency collaboration multiplies innovation capacity",
      "AI-native tools compress prototyping from months to days",
      "Community of practice shares innovation patterns across government"
    ]
  },

  {
    id: "rapid-prototyping",
    navLabel: "AI-Native Innovation",
    navPreview: "From idea to working prototype in days, not months",
    icon: "route",

    heroStat: {
      value: "10x",
      label: "faster prototyping with AI-native development approaches",
      countUp: false,
      duration: 2000,
      suffix: ""
    },

    keyInsight: "This app itself is proof of concept. Built in hours using AI-assisted development to demonstrate how rapidly we can translate ideas into interactive solutions.",

    visualType: "compressibleTimeline",
    visualData: {
      standardDuration: 12,
      optimizedDuration: 1,
      steps: [
        {
          name: "Idea Capture",
          standard: 2,
          optimized: 0.1,
          whatHappens: "Translate stakeholder input into structured requirements",
          myValue: "AI-assisted synthesis turns conversations into specs in real-time",
          artifact: "Living requirements doc that evolves with each conversation"
        },
        {
          name: "Rapid Prototype",
          standard: 4,
          optimized: 0.3,
          whatHappens: "Build working proof-of-concept to test assumptions",
          myValue: "AI-native development: describe → generate → iterate",
          artifact: "Interactive prototype ready for stakeholder feedback"
        },
        {
          name: "Feedback Loop",
          standard: 3,
          optimized: 0.2,
          whatHappens: "Gather input, identify gaps, refine approach",
          myValue: "Instant iteration - changes deployed in minutes",
          artifact: "Validated design with stakeholder buy-in"
        },
        {
          name: "Production Path",
          standard: 3,
          optimized: 0.4,
          whatHappens: "Harden prototype for production deployment",
          myValue: "Clear path from experiment to scalable solution",
          artifact: "Production-ready implementation with governance approval"
        }
      ]
    },

    cta: {
      text: "This app demonstrates the approach",
      type: "reveal",
      reveal: [
        "Built in a single session using AI-assisted development",
        "Responsive, interactive, production-quality",
        "Easily customized based on stakeholder feedback",
        "Pattern can be applied to any spatial innovation challenge"
      ]
    },

    supportingPoints: [
      "AI-native development is a force multiplier for innovation capacity",
      "Rapid prototyping de-risks innovation investments",
      "Working software beats slide decks for stakeholder engagement",
      "Skills transfer: teams learn by building alongside AI tools"
    ]
  },

  {
    id: "capability",
    navLabel: "Innovation Multiplier",
    navPreview: "Building a culture where innovation compounds",
    icon: "trending-up",

    heroStat: {
      value: "5",
      label: "innovation breakthroughs per year target (vs ~1 currently)",
      countUp: true,
      duration: 2500,
      prefix: "",
      suffix: "x"
    },

    keyInsight: "Innovation isn't a one-time project. It's a capability that compounds - each breakthrough creates patterns that make the next one easier.",

    visualType: "radarWithCalc",
    visualData: {
      dimensions: ["Innovation Culture", "Experimentation Capacity", "AI Readiness", "Cross-Agency Collab", "Speed to Prototype"],
      today: [35, 30, 45, 60, 25],
      target: [80, 75, 85, 90, 85],
      calculator: {
        title: "Innovation capacity by team size",
        orgSizes: [
          {
            label: "Small team (1-3 people)",
            value: "small",
            benefit: 2,
            description: "2 innovation sprints/year with AI-native tools"
          },
          {
            label: "Medium team (4-10 people)",
            value: "medium",
            benefit: 6,
            description: "6 innovation sprints/year with dedicated capacity"
          },
          {
            label: "Large team (10+ people)",
            value: "large",
            benefit: 12,
            description: "12 innovation sprints/year with full innovation track"
          }
        ]
      },
      growthAnimation: {
        title: "Innovation capability growth trajectory",
        milestones: [
          { year: 1, agencies: 3, value: "Innovation sandbox established, first cross-agency sprint" },
          { year: 2, agencies: 8, value: "5 agencies running regular innovation sprints" },
          { year: 3, agencies: 15, value: "Innovation patterns library, AI tools widely adopted" },
          { year: 4, agencies: 25, value: "WA recognized as national leader in spatial innovation" },
          { year: 5, agencies: 30, value: "Self-sustaining innovation culture, exporting patterns nationally" }
        ]
      }
    },

    cta: {
      text: "The compound effect of innovation",
      type: "reveal",
      reveal: "Each successful innovation creates reusable patterns, builds confidence, attracts talent, and unlocks budget for the next breakthrough"
    },

    supportingPoints: [
      "Innovation success stories attract and retain top spatial talent",
      "Shared patterns reduce the cost of each subsequent innovation",
      "Cross-agency collaboration multiplies the impact of every breakthrough",
      "WA becomes the exemplar other jurisdictions learn from",
      "Innovation culture becomes self-reinforcing competitive advantage"
    ]
  }
];

// Export metadata for easy reference
export const appMetadata = {
  title: "Unlocking Spatial Innovation in WA",
  subtitle: "A vision for breakthrough, not just maintenance",
  totalSections: sections.length,
  estimatedTime: "8 minutes",
  author: "Craig McDonnell",
  version: "2.0.0"
};
