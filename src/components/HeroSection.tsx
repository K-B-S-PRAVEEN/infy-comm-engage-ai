
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-infy-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-infy-700/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-4 px-3 py-1 bg-infy-500/10 border border-infy-500/20 rounded-full">
              <span className="text-sm text-infy-300">AI-Powered E-Commerce Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Future of <span className="text-gradient">Smart E-Commerce</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              An API-driven e-commerce platform designed to help businesses sell, manage, and scale across multiple channels with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                <MessageCircle size={18} />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Send size={18} />
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-background bg-gray-800 flex items-center justify-center overflow-hidden"
                  >
                    <Users size={14} className="text-gray-400" />
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-400">
                <span className="font-semibold text-white">500+</span> businesses using Infy Comm
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Mock e-commerce dashboard interface */}
              <div className="glass-card rounded-xl p-2 max-w-lg mx-auto mb-6 animate-float">
                <div className="bg-background/80 rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-infy-500/20 flex items-center justify-center">
                      <MessageCircle size={16} className="text-infy-400" />
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium">AI Sales Assistant</p>
                      <p className="text-xs text-gray-400">Analyzing data</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-2.5 max-w-[80%] text-sm">
                      Your sales across Amazon and Shopify have increased by 27% this month.
                    </div>
                    <div className="bg-infy-500/20 rounded-lg p-2.5 max-w-[80%] ml-auto text-sm">
                      What inventory should I restock?
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2.5 max-w-[80%] text-sm">
                      Based on current trends, I recommend restocking Product X and Y. Would you like me to prepare a purchase order?
                    </div>
                  </div>
                  <div className="mt-3 relative">
                    <input 
                      type="text" 
                      placeholder="Ask your AI assistant..."
                      className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-infy-500"
                    />
                    <Button size="sm" className="absolute right-1 top-1 p-1 h-7 w-7 rounded-full">
                      <Send size={14} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div className="glass-card rounded-xl p-4 absolute -bottom-8 -right-10 w-48 animate-float" style={{animationDelay: "1s"}}>
                <p className="text-xs text-gray-400 mb-1">Order Fulfillment</p>
                <p className="text-2xl font-bold">98.5%</p>
                <div className="w-full h-1.5 bg-gray-700 rounded-full mt-2">
                  <div className="h-full bg-gradient-to-r from-infy-400 to-infy-600 rounded-full" style={{width: "98.5%"}}></div>
                </div>
              </div>

              {/* Analytics card */}
              <div className="glass-card rounded-xl p-4 absolute -left-8 top-10 w-40 animate-float" style={{animationDelay: "0.5s"}}>
                <p className="text-xs text-gray-400 mb-1">Sales Growth</p>
                <p className="text-lg font-bold text-infy-400">+42%</p>
                <div className="flex items-end h-12 gap-1 mt-2">
                  {[20, 35, 25, 45, 30, 55, 65].map((h, i) => (
                    <div key={i} className="flex-1 bg-infy-500/40 rounded-sm" style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
