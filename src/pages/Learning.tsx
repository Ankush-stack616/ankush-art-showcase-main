import { useState } from "react";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ArtworkModal } from "@/components/ArtworkModal";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import traditionalPattern from "@/assets/traditional-pattern.jpg";

import bird1 from "@/assets/bird_1.png";
import bird2 from "@/assets/bird_2.png";
import bird3 from "@/assets/bird_3.png";

import perfumeBottle1 from "@/assets/perfume_bottle_1.png";
import perfumeBottle2 from "@/assets/perfume_bottle_2.png";
import perfumeBottle3 from "@/assets/perfume_bottle_3.png";
import perfumeBottle4 from "@/assets/perfume_bottle_4.png";
import perfumeBottle5 from "@/assets/perfume_bottle_5.png";
import perfumeBottle6 from "@/assets/perfume_bottle_6.png";

import lowTree1 from "@/assets/low_tree1.png";
import lowTree2 from "@/assets/low_tree_2.png";
import treeAdv1 from "@/assets/tree_adv_1.png";
import treeAdv2 from "@/assets/tree_adv_2.png";

import barell1 from "@/assets/barell_1.png";
import barell2 from "@/assets/barell_2.png";

interface ProcessMedia {
  type: "image" | "video";
  url: string;
  caption?: string;
}

interface WorkflowStep {
  step: string;
  description: string;
  duration: string;
}

interface Artwork {
  id: number;
  image: string;
  title: string;
  description?: string;
  tools?: string[];
  duration?: string;
  processMedia?: ProcessMedia[];
  workflow?: WorkflowStep[];
}

// Adding workflow arrays to each learning artwork
const learningArtworks: Artwork[] = [
  {
    id: 1,
    image: bird1,
    title: "Stylized Bird Character",
    description: "A cute and colorful bird character study exploring character design principles and stylized modeling techniques. This project focuses on creating appealing forms with simple shapes.",
    tools: ["Blender", "Cycles"],
    duration: "4 hours",
    processMedia: [
      { type: "image", url: bird1, caption: "Final character design - Front view" },
      { type: "image", url: bird2, caption: "Side view profile and character details" },
      { type: "image", url: bird3, caption: "Color variations and mood studies" }
  ],
  workflow: [
      { step: "Concept & Sketching", description: "Thumbnails and silhouette exploration to find an appealing shape.", duration: "30m" },
      { step: "Blocking & Modeling", description: "Basic forms blocked in and proportions adjusted in Blender.", duration: "1.5h" },
      { step: "key Learnings", description: "first time learned how to use mirror modifier.", duration: "" },
      { step: "Lighting & Rendering", description: "Studio lighting and compositing for final presentation.", duration: "1h" }
    ]
  },
  {
    id: 2,
    image: perfumeBottle1,
    title: "Perfume Bottle Collection",
    description: "An exploration of glass materials and product visualization techniques. Each bottle design experiments with different shapes, reflections, and lighting scenarios to achieve realistic product renders.",
    tools: ["Blender", "EVEE","Shading"],
    duration: "8 hours",
    processMedia: [
      { type: "image", url: perfumeBottle1, caption: "Signature bottle design" },
      { type: "image", url: perfumeBottle2, caption: "Glass material study with caustics" },
      { type: "image", url: perfumeBottle3, caption: "Studio lighting variations" },
      { type: "image", url: perfumeBottle4, caption: "Closeup detail shots" },
      { type: "image", url: perfumeBottle5, caption: "Full collection display" },
      { type: "image", url: perfumeBottle6, caption: "Material and lighting breakdown" }
  ],
  workflow: [
      { step: "Concept & Shape Exploration", description: "Explored silhouette and profile shapes for unique bottles.", duration: "2h" },
      { step: "Material & Shader Setup", description: "Created glass shaders with realistic IOR and roughness settings.", duration: "2.5h" },
      { step: "Lighting & Studio Renders", description: "Set up multiple studio light rigs to test reflections and caustics.", duration: "2h" },
      { step: "Post-Processing", description: "Color correction and compositing for product presentation.", duration: "1.5h" }
    ]
  },
  {
    id: 3,
    image: lowTree1,
    title: "Tree Studies",
    description: "A comprehensive study of tree creation techniques, from low-poly stylized designs to more detailed realistic approaches. This project explores different methods of creating foliage and bark textures.",
    tools: ["Blender", "Cycles", "EVEE", "Shading"],
    duration: "6 hours",
    processMedia: [
      { type: "image", url: lowTree1, caption: "Low-poly stylized tree design" },
      { type: "image", url: lowTree2, caption: "Mid-poly stylized variation" },
      { type: "image", url: treeAdv1, caption: "Advanced foliage system" },
      { type: "image", url: treeAdv2, caption: "Detailed bark texture study" }
  ],
  workflow: [
      { step: "Low-poly Blocking", description: "Blocked main trunk and primary branches for silhouette readability.", duration: "1.5h" },
      { step: "Foliage & LOD", description: "Created leaf cards and LOD variations for performance.", duration: "2h" },
      { step: "Texturing & Variation", description: "coloured leaf and bark variations to add visual interest.", duration: "1.5h" }
      
    ]
  },
  {
    id: 4,
    image: barell1,
    title: "Barrel Asset",
    description: "A study in creating game-ready props with varying levels of wear and tear. This project focuses on efficient UV mapping and texture optimization while maintaining visual quality.",
    tools: ["Blender", "Substance Painter"],
    duration: "3 hours",
    processMedia: [
      { type: "image", url: barell1, caption: "New barrel - clean state render" },
      { type: "image", url: barell2, caption: "Aged barrel - weathered variation" }
  ],
  workflow: [
      { step: "Blocking & UVs", description: "Modeled base mesh and laid out efficient UVs.", duration: "1h" },
      { step: "Shading", description: "coloured wood and metal textures.", duration: "1.5h" },
      { step: "Variations & Export", description: "Created weathered variants and exported optimized assets.", duration: "30m" }
    ]
  }
];

const Learning = () => {
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
            Learning & Experiments
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-up [animation-delay:100ms]">
            Quick projects where I practiced and learned new techniques
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {learningArtworks.map((artwork, index) => (
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
          processMedia={selectedArtwork.processMedia}
          workflow={selectedArtwork.workflow}
          open={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
};

export default Learning;
