import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Kurosaki Ichigo",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    quote:
      "I absolutely love MonetaMind It has completely changed the way I manage my finances. The expenditure tracker is super accurate, and I love how it automatically updates my balance and categorizes my spending. The monthly reports are easy to understand and really help me stay on budget.",
  },
  {
    name: "Kuchiki Rukia",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    quote:
      "This app is a lifesaver! I have always struggled with managing my expenses, but now I feel completely in control of my finances. The real-time balance updates are a game changer, and the monthly reports are super detailed yet easy to follow. I also love how it helps me visualize where my money is going.",
  },
  {
    name: "Ishida Uryu",
    role: "Boutique Owner",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    quote:
      "I’ve always been terrible with money, but this app has seriously turned things around for me. It’s so easy to track what I’m spending and plan ahead. I especially like how it breaks down my expenses into categories—it’s shocking but eye-opening! ",
  },
];
