
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const useCases = [
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Increase conversions and reduce cart abandonment",
    content: {
      challenge: "E-commerce businesses struggle with high cart abandonment rates and providing timely customer support across multiple channels.",
      solution: "Infy Comm's AI chatbots provide instant product recommendations, answer customer questions in real-time, and send personalized follow-ups for abandoned carts.",
      results: ["32% reduction in cart abandonment", "47% increase in cross-selling success", "24/7 customer support without increasing staff"]
    }
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Streamline onboarding and customer retention",
    content: {
      challenge: "SaaS companies need to efficiently onboard users, provide technical support, and identify at-risk accounts before they churn.",
      solution: "Our platform offers guided product tours, contextual help, and proactive engagement based on usage patterns to improve customer satisfaction and retention.",
      results: ["56% faster user onboarding", "42% reduction in support tickets", "28% improvement in customer retention"]
    }
  },
  {
    id: "finance",
    title: "Financial Services",
    description: "Secure and compliant customer communication",
    content: {
      challenge: "Financial institutions need to maintain secure, compliant communication while providing personalized service to customers.",
      solution: "Infy Comm provides encryption, compliance monitoring, and audit trails while delivering personalized financial guidance and support.",
      results: ["100% compliance with financial regulations", "63% increase in customer satisfaction", "41% reduction in query resolution time"]
    }
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Patient engagement and care coordination",
    content: {
      challenge: "Healthcare providers struggle with patient communication, appointment management, and follow-up care coordination.",
      solution: "Our HIPAA-compliant platform streamlines appointment scheduling, medication reminders, and post-visit follow-ups while maintaining patient privacy.",
      results: ["72% decrease in missed appointments", "58% improvement in medication adherence", "34% reduction in administrative workload"]
    }
  }
];

const UseCaseSection = () => {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Use Cases</span> & Success Stories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how businesses across industries are transforming their customer communication with Infy Comm
          </p>
        </div>

        <Tabs defaultValue="ecommerce" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id}>
                {useCase.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-infy-400 mb-2">The Challenge</h4>
                      <p className="text-gray-300">{useCase.content.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-infy-400 mb-2">Our Solution</h4>
                      <p className="text-gray-300">{useCase.content.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-infy-400 mb-2">Results</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {useCase.content.results.map((result, index) => (
                          <li key={index} className="text-gray-300">{result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-infy-400">
                          {useCase.id.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium">
                            "Infy Comm transformed our customer communication strategy completely."
                          </p>
                          <p className="text-xs text-gray-400">
                            — Director of Customer Experience, Leading {useCase.title} Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCaseSection;
