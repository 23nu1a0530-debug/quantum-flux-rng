import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Quantum background effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantum-glow/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-sm font-mono text-primary">Quantum-Grade Entropy</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-quantum bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
          Quantum Random
          <br />
          Number Generator
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Harness the power of quantum mechanics to generate truly unpredictable random numbers for cryptography, simulations, and research.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            onClick={scrollToGenerator}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-quantum group"
          >
            Generate Now
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
          >
            Learn More
          </Button>
        </div>

        {/* Quantum stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Entropy Quality</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-2xl font-bold text-quantum-glow mb-1">&lt;100ms</div>
            <div className="text-sm text-muted-foreground">Average Latency</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-2xl font-bold text-quantum-purple mb-1">∞</div>
            <div className="text-sm text-muted-foreground">Unique Values</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
