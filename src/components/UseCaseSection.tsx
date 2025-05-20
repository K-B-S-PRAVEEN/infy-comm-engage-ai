
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const useCases = [
  {
    id: "ecommerce",
    title: "E-Commerce & Marketplaces",
    description: "Optimize search and order processing",
    content: {
      challenge: "E-commerce businesses struggle with managing inventory across multiple sales channels and providing personalized shopping experiences.",
      solution: "Infy Comm provides AI-powered search, automated order processing, and inventory optimization to ensure seamless operations across all platforms.",
      results: ["37% increase in cross-platform sales", "42% reduction in overselling incidents", "67% improvement in search result relevance"]
    }
  },
  {
    id: "retail",
    title: "Retail & Omni-Channel",
    description: "Unify online and in-store operations",
    content: {
      challenge: "Retailers face difficulties synchronizing inventory between online and physical stores, leading to poor customer experiences and lost sales.",
      solution: "Our platform offers real-time inventory synchronization, ship-from-store capabilities, and BOPIS (Buy Online, Pick up In Store) support.",
      results: ["28% reduction in store-level stockouts", "46% increase in omnichannel conversion", "52% of online orders fulfilled from stores"]
    }
  },
  {
    id: "healthcare",
    title: "Healthcare & Pharma",
    description: "Secure and compliant commerce",
    content: {
      challenge: "Healthcare providers need to maintain regulatory compliance while efficiently managing complex product catalogs and supply chains.",
      solution: "Infy Comm delivers compliance automation, batch tracking, and AI-driven inventory management specifically designed for healthcare requirements.",
      results: ["100% compliance with industry regulations", "73% reduction in expired inventory", "39% improvement in reorder efficiency"]
    }
  },
  {
    id: "automotive",
    title: "Automotive & Parts",
    description: "Complex inventory and order management",
    content: {
      challenge: "Automotive businesses struggle with complex parts catalogs, fitment data, and cross-channel inventory management.",
      solution: "Our platform provides VIN-based product lookup, inventory tracking across warehouses and stores, and order fulfillment optimization.",
      results: ["82% decrease in wrong part shipments", "41% reduction in return processing time", "58% improvement in customer satisfaction"]
    }
  }
];

const UseCaseSection = () => {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Industry Use Cases</span> & Success Stories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how businesses across industries are transforming their e-commerce operations with Infy Comm
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
                            "Infy Comm transformed our entire e-commerce strategy and execution."
                          </p>
                          <p className="text-xs text-gray-400">
                            — Director of Digital Commerce, Leading {useCase.title} Company
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
