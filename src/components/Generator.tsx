import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Copy, Check } from "lucide-react";
import { toast } from "sonner";

type Format = "hex" | "binary" | "decimal";

const Generator = () => {
  const [format, setFormat] = useState<Format>("hex");
  const [bits, setBits] = useState("128");
  const [count, setCount] = useState("1");
  const [values, setValues] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateRandom = async () => {
    setIsGenerating(true);
    
    // Simulate quantum generation with a slight delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const numBits = parseInt(bits);
    const numCount = parseInt(count);
    const generated: string[] = [];

    for (let i = 0; i < numCount; i++) {
      let value = "";
      
      if (format === "hex") {
        const hexChars = Math.ceil(numBits / 4);
        for (let j = 0; j < hexChars; j++) {
          value += Math.floor(Math.random() * 16).toString(16);
        }
      } else if (format === "binary") {
        for (let j = 0; j < numBits; j++) {
          value += Math.random() > 0.5 ? "1" : "0";
        }
      } else {
        // decimal - generate a random number based on bit length
        const max = Math.pow(2, numBits);
        value = Math.floor(Math.random() * max).toString();
      }
      
      generated.push(value);
    }

    setValues(generated);
    setIsGenerating(false);
    toast.success(`Generated ${numCount} quantum random ${numCount === 1 ? 'value' : 'values'}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(values.join("\n"));
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="generator" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-card border-border shadow-glow">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary animate-quantum-pulse" />
              Quantum Generator
            </CardTitle>
            <CardDescription className="text-base">
              Configure your quantum random number generation parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="format">Output Format</Label>
                <Select value={format} onValueChange={(value) => setFormat(value as Format)}>
                  <SelectTrigger id="format">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hex">Hexadecimal</SelectItem>
                    <SelectItem value="binary">Binary</SelectItem>
                    <SelectItem value="decimal">Decimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bits">Bit Length</Label>
                <Select value={bits} onValueChange={setBits}>
                  <SelectTrigger id="bits">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="64">64 bits</SelectItem>
                    <SelectItem value="128">128 bits</SelectItem>
                    <SelectItem value="256">256 bits</SelectItem>
                    <SelectItem value="512">512 bits</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="count">Count</Label>
                <Input
                  id="count"
                  type="number"
                  min="1"
                  max="10"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </div>
            </div>

            <Button 
              onClick={generateRandom} 
              className="w-full bg-primary hover:bg-primary/90 shadow-quantum"
              size="lg"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Quantum Random
                </>
              )}
            </Button>

            {values.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Generated Values</Label>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={copyToClipboard}
                    className="text-primary hover:text-primary/80"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="p-4 bg-background rounded-lg border border-primary/20 max-h-64 overflow-y-auto">
                  <code className="font-mono text-sm text-foreground break-all">
                    {values.map((value, idx) => (
                      <div key={idx} className="py-1 hover:bg-primary/5 px-2 rounded">
                        {value}
                      </div>
                    ))}
                  </code>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Generator;
