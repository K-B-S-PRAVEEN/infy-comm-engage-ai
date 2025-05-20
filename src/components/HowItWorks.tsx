
const steps = [
  {
    number: "01",
    title: "Integrate with your platforms",
    description:
      "Connect Infy Comm to your existing tools with our simple API or use our pre-built integrations for popular business platforms.",
  },
  {
    number: "02",
    title: "Train the AI assistant",
    description:
      "Customize your AI assistant with your brand voice, product information, and customer service guidelines through our no-code training interface.",
  },
  {
    number: "03",
    title: "Deploy across channels",
    description:
      "Launch your smart communication solution across web, mobile, social media, and messaging platforms with a single click.",
  },
  {
    number: "04",
    title: "Analyze and optimize",
    description:
      "Use our comprehensive analytics dashboard to monitor performance, identify trends, and continuously improve customer engagement.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">Infy Comm</span> Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get up and running with intelligent communication in just four simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-infy-600/40 via-infy-500/40 to-infy-700/40"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Circle on the timeline for desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-infy-600 border-4 border-background items-center justify-center z-10">
                    <span className="text-xs font-bold">{step.number}</span>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="glass-card rounded-xl p-8 h-full">
                      {/* Circle for mobile */}
                      <div className="md:hidden flex w-10 h-10 rounded-full bg-infy-600 items-center justify-center mb-4">
                        <span className="text-xs font-bold">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    {/* Empty div for spacing on the other side */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
