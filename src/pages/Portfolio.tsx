import { useState } from "react";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ArtworkModal } from "@/components/ArtworkModal";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import traditionalPattern from "@/assets/traditional-pattern.jpg";
import lowPolyHouseMain from "@/assets/low_poly_house_main.png";
import lowPolyHouseVideo from "@/assets/low_ploy_house_video.mp4";
import lowPolyHouse1 from "@/assets/low_poly_house1.jpg";
import lowPolyHouse2 from "@/assets/low_poly_house2.jpg";
import lowPolyHouse3 from "@/assets/low_poly_house3.png";

import goblin1 from "@/assets/goblin_1.png";
import goblin2 from "@/assets/goblin_2.png";
import goblin3 from "@/assets/goblin_3.png";
import goblin4 from "@/assets/goblin_4.png";
import goblin5 from "@/assets/goblin_5.png";
import goblin6 from "@/assets/goblin_6.png";
import goblinVideo1 from "@/assets/goblin_video_1.mp4";
import goblinVideo2 from "@/assets/goblin_video_2.mp4";

import windmill1 from "@/assets/windMill_1.png";
import windmill2 from "@/assets/windmill_2.jpg";
import windmill3 from "@/assets/windmill_3.jpg";
import windmill4 from "@/assets/windmill_4.png";
import windmill5 from "@/assets/windmill_5.png";
import windmillVideo1 from "@/assets/windmill_video_1.mp4";

import process11 from "@/assets/process-1-1.jpg";
import process12 from "@/assets/process-1-2.jpg";
import process13 from "@/assets/process-1-3.jpg";
import process21 from "@/assets/process-2-1.jpg";
import process22 from "@/assets/process-2-2.jpg";
import process23 from "@/assets/process-2-3.jpg";

interface WorkflowStep {
  step: string;
  description: string;
  duration: string;
}

interface ProcessMedia {
  type: "image" | "video";
  url: string;
  caption?: string;
}

interface Artwork {
  id: number;
  image: string;
  title: string;
  description?: string;
  tools?: string[];
  duration?: string;
  workflow?: WorkflowStep[];
  processMedia?: ProcessMedia[];
}

const professionalArtworks: Artwork[] = [
  {
    id: 1,
    image: lowPolyHouseMain,
    title: "Low Poly Cottage",
    description: "A cozy stylized cottage. This piece focuses on night color palette and moon lighting to create an inviting atmosphere. (This piece is my first big project).",
    tools: ["Blender", "EVEE", "Cycles Renderer"],
    duration: "12+ hours",
    processMedia: [
      { type: "image", url: lowPolyHouseMain, caption: "Final rendered view" },
      { type: "video", url: lowPolyHouseVideo, caption: "360° view showcase" },
      { type: "image", url: lowPolyHouse1, caption: "Side view details" },
      { type: "image", url: lowPolyHouse2, caption: "Back view perspective" },
      { type: "image", url: lowPolyHouse3, caption: "Environmental lighting setup" }
    ],
    workflow: [
      {
        step: "Blocking & Modeling",
        description: "Created basic shapes for the house structure, and environment props using low-poly modeling techniques.",
        duration: "8-10 hours"
      },
      {
        step: "Shading",
        description: "Used simple shading for the house and coloured all the details.",
        duration: "1 hour"
      },
      {
        step: "Lighting & Rendering",
        description: "Set up 3-point lighting with additional fill lights. Rendered in EVEE.",
        duration: "1.5 hours"
      },
      {
        step: "Reference",
        description: "I made this full project from the reference video of Grant Abbitt (Gabbitt). A Big Thanks to him.",
        duration: "N/A"
      }
    ]
  },
  {
    id: 2,
    image: goblin1,
    title: "Goblin Character",
    description: "A detailed character model of a mischievous goblin with expressive features. Created with a focus on character personality and storytelling through design.",
    tools: ["Blender", "Sculpting", "Cycles Renderer","EVEE"],
    duration: "15+ hours",
    processMedia: [
      { type: "image", url: goblin1, caption: "Final character render" },
      { type: "video", url: goblinVideo1, caption: "Character turntable" },
      { type: "video", url: goblinVideo2, caption: "Animation showcase" },
      { type: "image", url: goblin2, caption: "Facial expressions" },
      { type: "image", url: goblin3, caption: "Detail shots" },
      { type: "image", url: goblin4, caption: "Wireframe view" },
      { type: "image", url: goblin5, caption: "Texture maps" },
      { type: "image", url: goblin6, caption: "Lighting studies" }
    ],
    workflow: [
      {
        step: "Character Design",
        description: "Developed the character concept focusing on a balance between scary and appealing features.",
        duration: "3 hours"
      },
      {
        step: "Modeling & Sculpting",
        description: "Created the base mesh and sculpted detailed features like wrinkles and facial expressions.",
        duration: "2+ hours"
      },
      {
        step: "Retopology",
        description: "Retopologized the whole burst manually first time to learn the pipline on how to retopologize a character.",
        duration: "6 hours"
      },
      {
        step: "UV Unwrapping",
        description: "UV unwrapped the whole character to bake all the details.",
        duration: "2 hours"
      }
    ]
  },
  {
    id: 3,
    image: windmill1,
    title: "Fantasy Windmill",
    description: "A magical windmill scene combining traditional architecture with fantasy elements. Features dynamic lighting and atmospheric effects to create a enchanting mood.",
    tools: ["Blender", "Cycles Renderer","EVEE", "shading"],
    duration: "10+ hours",
    processMedia: [
      { type: "image", url: windmill1, caption: "Main showcase render" },
      { type: "video", url: windmillVideo1, caption: "Environment flythrough" },
      { type: "image", url: windmill2, caption: "Night lighting setup" },
      { type: "image", url: windmill3, caption: "Detail closeups" },
      { type: "image", url: windmill4, caption: "Structure breakdown" },
      { type: "image", url: windmill5, caption: "Material studies" }
    ],
    workflow: [
      {
        step: "Concept & Modeling",
        description: "Designed and modeled from scratch from only a reference photo from the internet",
        duration: "5 hours"
      },
      {
        step: "Environment Creation",
        description: "Built the surrounding landscape and added atmospheric elements for mood.",
        duration: "1 hours"
      },
      {
        step: "Lighting Setup",
        description: "Created day and night lighting scenarios with magical accents.",
        duration: "1 hours"
      },
      {
        step: "Shading",
        description: "Shaded the windmill with the appealing colors and fitting the environment.",
        duration: "3 hours"
      }
    ]
  }
];

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

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
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up">
            Best Work
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-up [animation-delay:100ms]">
            Projects where I spent more time and focused on details
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {professionalArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
              className="opacity-0 animate-scale-up"
            >
              <ArtworkCard
                image={artwork.image}
                title={artwork.title}
                onClick={() => setSelectedArtwork(artwork)}
              />
            </div>
          ))}
        </div>

        <Footer />
      </div>

      {selectedArtwork && (
        <ArtworkModal
          image={selectedArtwork.image}
          title={selectedArtwork.title}
          description={selectedArtwork.description}
          tools={selectedArtwork.tools}
          duration={selectedArtwork.duration}
          workflow={selectedArtwork.workflow}
          processMedia={selectedArtwork.processMedia}
          open={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
