import { Link } from "react-router-dom";
import { ArrowLeft, Code, Palette, Lightbulb, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-glow-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse [animation-delay:2s]" />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:text-primary transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate 3D artist crafting immersive digital experiences through stylized environments and memorable characters
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <CardContent className="p-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-2xl opacity-50" />
                <div className="relative space-y-4 text-foreground/90 leading-relaxed">
                  <p className="text-lg">
                    Hi, I'm <span className="text-primary font-semibold">Ankush Shakya</span> — a 3D artist with a passion for bringing digital worlds to life. 
                    My journey in 3D art began with my love for games and their Environment and Characters, which has evolved into a deep love for creating 
                    stylized and low-poly environments and Characters that tell stories.
                  </p>
                  <p className="text-lg">
                    I am specializing in crafting visually compelling scenes that balance artistic style with technical precision. 
                    Whether it's designing whimsical characters or building atmospheric environments, I aim to create work that 
                    resonates emotionally while maintaining clean, efficient geometry.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Expertise */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Technical Skills</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Blender 3D modeling & sculpting</li>
                      <li>• Low-poly optimization (Retopology)</li>
                      <li>• UV mapping & unwrapping</li>
                      <li>• PBR material creation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Palette className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Artistic Focus</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Stylized character design</li>
                      <li>• Low-poly environment art</li>
                      <li>• Color theory & composition</li>
                      <li>• Atmospheric lighting</li>
                      <li>• Visual storytelling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">My Approach</h3>
              </div>
              <div className="space-y-4 text-foreground/90 leading-relaxed ml-16">
                <p>
                  I believe that great 3D art comes from the intersection of technical skill and creative vision. 
                  Every project I undertake is an opportunity to push my boundaries and explore new techniques, 
                  whether I'm experimenting with advanced sculpting workflows or discovering innovative texturing methods.
                </p>
                <p>
                  My workflow emphasizes iteration and refinement. I start with strong foundational concepts, then 
                  progressively add detail and polish. This approach ensures that each piece maintains visual clarity 
                  while achieving the depth and richness that makes 3D art truly captivating.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">What I'm Working Towards</h3>
              </div>
              <div className="space-y-4 text-foreground/90 leading-relaxed ml-16">
                <p>
                  Currently, I'm focusing on expanding my expertise in sculpting and texturing workflows. 
                  I'm particularly interested in developing more complex character designs and creating cohesive 
                  environment sets that can work together in larger projects.
                </p>
                <p>
                  My goal is to continue growing as an artist while building a portfolio that showcases not just 
                  technical proficiency, but also the ability to create memorable, emotionally resonant work. 
                  I'm always open to collaboration and excited about opportunities to contribute to innovative projects.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Shoutouts & Thanks */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-up [animation-delay:900ms] opacity-0 [animation-fill-mode:forwards]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Heart className="h-6 w-6 text-red-500 animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Special Thanks & Shoutouts</h3>
              </div>
              <div className="space-y-4 text-foreground/90 leading-relaxed ml-16">
                <p>
                  My journey in 3D art wouldn't have been possible without the incredible support and encouragement from my amazing peers and mentors.
                  I'd like to express my heartfelt gratitude to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">❤</span>
                    <strong className="text-primary">Grant Abbitt (Gabbitt)</strong> - For the incredible tutorials and inspiration that helped me to understand the basics of sculpting my 3D journey.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">❤</span>
                    <strong className="text-primary">Madhavika Sisodia</strong> - A close friend of mine  believing in my potential and pushing me to explore creative field. She cheered me from the very beginning of the 3-D Art. Whenever I make an art I always show it first to her.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">❤</span>
                    <strong className="text-primary">Nafay 3D</strong> - For being an mentor, through his playlist I Started learning Blender and 3D art. His explanations are so good and top-notch.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">❤</span>
                    And to all my friends and family who supported and encouraged my artistic journey.
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Your support, feedback, and encouragement have been invaluable in helping me grow as a 3D artist. Thank you for being part of my journey!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center py-12 animate-fade-up [animation-delay:1000ms] opacity-0 [animation-fill-mode:forwards]">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Create Something Together</h3>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or have a project in mind? I'd love to hear from you.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;