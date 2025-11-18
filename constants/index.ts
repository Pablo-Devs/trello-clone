import {
  Inbox,
  NotepadText,
  TrendingUp,
  Plug,
  LayoutTemplate,
  Pentagon,
  Megaphone,
  Save,
  FileCode,
  Pencil,
  Calendar,
  Globe,
  Lightbulb,
  Star,
  Building2,
} from "lucide-react";

export const dropdownContent = {
  Features: [
    {
      title: "Inbox",
      description:
        "Capture every vital detail from email, Slack and more directly in your Trello Inbox.",
      icon: Inbox,
    },
    {
      title: "Planner",
      description:
        "Sync your calendar and allocate focused time slots to boost productivity.",
      icon: NotepadText,
    },
    {
      title: "Automation",
      description: "Automate task and workflows with Trello.",
      icon: TrendingUp,
    },
    {
      title: "Power-ups",
      description:
        "Power up your teams by linking their favorite tools with Trello plugins.",
      icon: Plug,
    },
    {
      title: "Templates",
      description:
        "Give your team a blueprint for success with easy-to-use templates from industry leaders and Trello community.",
      icon: LayoutTemplate,
    },
    {
      title: "Integrations",
      description:
        "Find the apps your team is already using or discover new ways to get work done in Trello.",
      icon: Pentagon,
    },
  ],
  Solutions: [
    {
      title: "Marketing Teams",
      description:
        "Whether launching a new product, campaign, or creating content, Trello helps marketing teams succeed.",
      icon: Megaphone,
    },
    {
      title: "Product Management",
      description:
        "Use Trello's management boards and roadmap features to simplify complex project and processes.",
      icon: Save,
    },
    {
      title: "Engineering Teams",
      description:
        "Ship more code, faster, and give your developers the freedom to be more agile with Trello.",
      icon: FileCode,
    },
    {
      title: "Design Teams",
      description:
        "Empower your design teams by using Trello to streamline creative request and promote more fluid cross-team collaboration.",
      icon: Pencil,
    },
    {
      title: "Startups",
      description:
        "From hitting revenue goals to managing workflows, small businesses thrive with Trello.",
      icon: Calendar,
    },
    {
      title: "Remote Teams",
      description:
        "Keep your remote team connected and motivated, no matter whwere they are located around the world.",
      icon: Globe,
    },
  ],
  Plans: [
    {
      title: "Standard",
      description:
        "For teams that need to manage more work and scale collaboration.",
      icon: Lightbulb,
    },
    {
      title: "Premium",
      description:
        "Best for teams up to 100 that needs to track multiple projects and visualize work in a variety of ways.",
      icon: Star,
    },
    {
      title: "Enterprise",
      description:
        "Everything your enterprise teams and admins need to manage projects.",
      icon: Building2,
    },
  ],
  Resources: [
    {
      title: "Trello Guide",
      description:
        "Our easy to follow guide will take you from project setup to Trello expert in no time.",
      icon: null,
    },
    {
      title: "Remote work guide",
      description:
        "The complete guide to setting up your team for remote success.",
      icon: null,
    },
    {
      title: "Webinars",
      description:
        "Enjoy our free Trello webinars and become a productivity professional.",
      icon: null,
    },
    {
      title: "Customer stories",
      description:
        "See how businesses have adopted Trello as a vital part of their workflow. ",
      icon: null,
    },
    {
      title: "Developers",
      description:
        "The sky's the limit in what you can deliver Trello users in your Power-Up!",
      icon: null,
    },
    {
      title: "Help resources",
      description: "Need help? Aticles and FAQs to get you unstuck.",
      icon: null,
    },
  ],
};

export const navOrder = [
  { type: "dropdown", key: "Features" },
  { type: "dropdown", key: "Solutions" },
  { type: "dropdown", key: "Plans" },
  { type: "link", key: "Pricing", href: "/pricing" },
  { type: "dropdown", key: "Resources" },
] as const;
