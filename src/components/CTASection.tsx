
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Background decorations */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-infy-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-infy-700/20 rounded-full filter blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="text-gradient">Business Communication</span>?
              </h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of successful businesses that have elevated their customer engagement with Infy Comm's AI-powered platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-infy-500/20 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-infy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Free 14-day trial, no credit card required</p>
                </div>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-infy-500/20 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-infy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Dedicated onboarding and support</p>
                </div>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-infy-500/20 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-infy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Cancel anytime, hassle-free</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Send size={18} />
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-infy-900 to-infy-800 rounded-xl p-6 border border-infy-700/50">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Growth Plan</h3>
                  <div className="bg-infy-500/20 rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-infy-300">Most Popular</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$89</span>
                  <span className="text-gray-400 ml-2">/month</span>
                  <p className="text-sm text-gray-400 mt-1">Billed annually</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-infy-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">5,000 AI-powered conversations/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-infy-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Omnichannel support (Web, Email, SMS)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-infy-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Advanced Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-infy-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">3 Team Members</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-infy-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Priority Support</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg" className="w-full">
                  Choose Growth Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
