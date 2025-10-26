import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Cpu, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Cryptographic Quality",
    description: "Generate random numbers suitable for cryptographic applications with verified entropy sources.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Sub-100ms latency with scalable architecture supporting millions of requests.",
    color: "text-quantum-glow"
  },
  {
    icon: Cpu,
    title: "Quantum Source",
    description: "Powered by quantum mechanics principles for true unpredictability and randomness.",
    color: "text-quantum-purple"
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "API key authentication, rate limiting, and signed responses for verified authenticity.",
    color: "text-primary"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Quantum RNG?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Traditional pseudo-random generators are predictable. Quantum randomness is truly random.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg bg-background/50 w-fit mb-2 ${feature.color}`}>
                  <feature.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
