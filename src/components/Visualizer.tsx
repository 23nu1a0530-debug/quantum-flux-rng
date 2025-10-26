import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const Visualizer = () => {
  const [distribution, setDistribution] = useState<number[]>(Array(16).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live quantum randomness distribution
      const newDist = Array(16).fill(0).map(() => Math.random() * 100);
      setDistribution(newDist);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const maxValue = Math.max(...distribution);

  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-card border-border shadow-glow">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-quantum-glow" />
              Live Distribution
            </CardTitle>
            <CardDescription className="text-base">
              Real-time visualization of quantum randomness distribution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-1">
              {distribution.map((value, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-primary via-quantum-purple to-quantum-glow rounded-t-sm transition-all duration-500 hover:opacity-80 relative group"
                  style={{ height: `${(value / maxValue) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 px-2 py-1 rounded text-xs font-mono whitespace-nowrap">
                    {value.toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-xs text-muted-foreground font-mono">
              <span>0x0</span>
              <span>0x4</span>
              <span>0x8</span>
              <span>0xC</span>
              <span>0xF</span>
            </div>
            <p className="mt-4 text-sm text-center text-muted-foreground">
              Hexadecimal value distribution • Updates every 2 seconds
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Visualizer;
