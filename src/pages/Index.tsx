import Hero from "@/components/Hero";
import Generator from "@/components/Generator";
import Visualizer from "@/components/Visualizer";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Generator />
      <Visualizer />
      <Features />
    </div>
  );
};

export default Index;
