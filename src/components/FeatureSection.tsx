
import { MessageCircle, Database, Search, Globe } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-6 w-6 text-infy-400" />,
    title: "AI-Powered E-Commerce",
    description:
      "Headless commerce architecture with multi-channel selling capabilities across web, mobile, Amazon, Flipkart, eBay, and social media.",
  },
  {
    icon: <Database className="h-6 w-6 text-infy-400" />,
    title: "Smart Order Management",
    description:
      "Centralized order processing with AI-based routing to optimize warehouse and store fulfillment across all your sales channels.",
  },
  {
    icon: <Search className="h-6 w-6 text-infy-400" />,
    title: "AI-Powered Search & Personalization",
    description:
      "Real-time predictive search with NLP, contextual filtering, and personalized AI-based recommendations.",
  },
  {
    icon: <Globe className="h-6 w-6 text-infy-400" />,
    title: "Seamless Multi-Channel Integration",
    description:
      "Plug-and-play integrations with marketplaces, POS, and ERPs like Amazon, Shopify, SAP, and Oracle NetSuite.",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Core Solutions</span> for Your Business
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Infy Comm integrates headless commerce, AI-powered search, and an advanced order management system to optimize operations and enhance customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-infy-500/30"
            >
              <div className="h-12 w-12 rounded-lg bg-infy-500/10 border border-infy-500/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-infy-800/50 via-infy-700/50 to-infy-800/50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Choose Infy Comm?</h3>
            <p className="text-gray-300 mb-6">
              Our AI-driven platform delivers real-time inventory synchronization, personalized insights, and automated workflows to reduce manual processing and errors.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold text-infy-400">42%</p>
                <p className="text-sm text-gray-400">Sales Increase</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-infy-400">98%</p>
                <p className="text-sm text-gray-400">Order Accuracy</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-infy-400">65%</p>
                <p className="text-sm text-gray-400">Time Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
