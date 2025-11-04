import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className="py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
        Ankush Shakya
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
        3D Artist specializing in stylized environments and character design
      </p>
      <div className="mt-8 flex justify-center gap-4 animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-md animate-glow-pulse" />
          <div className="h-1 w-16 bg-primary rounded-full animate-pulse relative z-10 shadow-[0_0_15px_rgba(255,138,0,0.8)]" />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-secondary/30 rounded-full blur-md animate-glow-pulse [animation-delay:300ms]" />
          <div className="h-1 w-16 bg-secondary rounded-full animate-pulse [animation-delay:300ms] relative z-10 shadow-[0_0_15px_rgba(255,82,0,0.8)]" />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-accent/30 rounded-full blur-md animate-glow-pulse [animation-delay:600ms]" />
          <div className="h-1 w-16 bg-accent rounded-full animate-pulse [animation-delay:600ms] relative z-10 shadow-[0_0_15px_rgba(0,128,128,0.8)]" />
        </div>
      </div>
      <div className="mt-8 animate-fade-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
        <Link to="/about" className="inline-block">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse" />
            <div className="absolute inset-0 border-2 border-primary/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,138,0,0.8)]" />
            <Button 
              variant="outline" 
              size="lg"
              className="relative z-10 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Learn More About Me
            </Button>
          </div>
        </Link>
      </div>
    </header>
  );
};
