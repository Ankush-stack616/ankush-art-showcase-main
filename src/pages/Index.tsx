import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Briefcase, Lightbulb } from "lucide-react";

import traditionalPattern from "@/assets/traditional-pattern.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Traditional Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-[-50%] opacity-30 bg-center animate-[mandala-rotate_120s_linear_infinite]"
          style={{
            backgroundImage: `url(${traditionalPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformOrigin: 'center center',
            width: '200%',
            height: '200%',
            left: '-50%',
            top: '-50%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background/90" />
        
        {/* Decorative animated circles with glow */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-primary/30 animate-mandala-rotate shadow-[0_0_30px_rgba(255,138,0,0.3)]" />
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full border-2 border-secondary/30 animate-[mandala-rotate_45s_linear_reverse_infinite] shadow-[0_0_40px_rgba(255,82,0,0.3)]" />
        <div className="absolute top-1/2 right-10 w-24 h-24 rounded-full border-2 border-accent/30 animate-[mandala-rotate_30s_linear_infinite] shadow-[0_0_25px_rgba(0,128,128,0.3)]" />
        <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border-2 border-primary/20 animate-[mandala-rotate_40s_linear_infinite]" />
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full border-2 border-secondary/20 animate-[mandala-rotate_50s_linear_reverse_infinite]" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <Hero />
        
        <main className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-up">
              Explore My Work
            </h2>
            <p className="text-muted-foreground animate-fade-up [animation-delay:100ms] max-w-2xl mx-auto">
              Browse through my best projects and learning experiments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Professional Portfolio Card */}
            <Link to="/portfolio" className="group">
              <div className="relative overflow-hidden rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 p-8 hover:shadow-[0_0_30px_rgba(255,138,0,0.3)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Best Work
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    My most detailed projects where I invested significant time and effort
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    View Projects
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Learning Projects Card */}
            <Link to="/learning" className="group">
              <div className="relative overflow-hidden rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all duration-300 p-8 hover:shadow-[0_0_30px_rgba(0,128,128,0.3)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Learning & Experiments
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Quick projects where I practiced new styles and learned different techniques
                  </p>
                  <div className="flex items-center text-accent font-medium group-hover:gap-3 gap-2 transition-all">
                    View Projects
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </main>

        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
