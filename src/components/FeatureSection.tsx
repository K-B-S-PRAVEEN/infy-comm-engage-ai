
import { MessageCircle, Users, Send, User } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-6 w-6 text-infy-400" />,
    title: "AI-Powered Conversations",
    description:
      "Smart chatbots that understand customer intent and deliver meaningful, contextual responses across all communication channels.",
  },
  {
    icon: <Users className="h-6 w-6 text-infy-400" />,
    title: "Customer Engagement Analytics",
    description:
      "Deep insights into customer interactions with advanced metrics and actionable intelligence to optimize engagement strategies.",
  },
  {
    icon: <Send className="h-6 w-6 text-infy-400" />,
    title: "Omnichannel Messaging",
    description:
      "Seamlessly connect with customers across email, chat, social media, and messaging apps through one unified platform.",
  },
  {
    icon: <User className="h-6 w-6 text-infy-400" />,
    title: "Personalized Customer Journeys",
    description:
      "Create tailored communication flows based on customer behavior, preferences, and interaction history.",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Key Features</span> of Our Platform
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Infy Comm combines cutting-edge AI technology with powerful communication tools to help your business engage more effectively with customers.
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
            <h3 className="text-2xl font-bold mb-4">The Power of AI in Every Conversation</h3>
            <p className="text-gray-300 mb-6">
              Our AI engine analyzes conversation patterns, customer sentiment, and business needs to continuously improve and deliver more value over time.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold text-infy-400">78%</p>
                <p className="text-sm text-gray-400">Faster Response Time</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-infy-400">3.5x</p>
                <p className="text-sm text-gray-400">Customer Engagement</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-infy-400">45%</p>
                <p className="text-sm text-gray-400">Cost Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
