import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Clock, Layers, Palette, PlayCircle, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

interface ArtworkModalProps {
  image: string;
  title: string;
  description?: string;
  tools?: string[];
  duration?: string;
  workflow?: WorkflowStep[];
  processMedia?: ProcessMedia[];
  open: boolean;
  onClose: () => void;
}

export const ArtworkModal = ({ 
  image, 
  title, 
  description, 
  tools = [],
  duration,
  workflow = [],
  processMedia = [],
  open, 
  onClose 
}: ArtworkModalProps) => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleZoomReset = () => setZoom(1);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 bg-card border-border animate-scale-up">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background hover:rotate-90 transition-all duration-300"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative bg-background p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-glow-pulse" />
            
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-10 flex gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-border">
              <Button
                size="icon"
                variant="ghost"
                onClick={handleZoomIn}
                className="h-8 w-8 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleZoomOut}
                className="h-8 w-8 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleZoomReset}
                className="h-8 w-8 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Reset zoom"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {selectedMedia && selectedMedia.endsWith('.mp4') ? (
              <video
                src={selectedMedia}
                controls
                className="relative w-full h-auto rounded-lg animate-fade-in shadow-2xl shadow-primary/20"
              />
            ) : (
              <img
                src={selectedMedia || image}
                alt={title}
                className="relative w-full h-auto rounded-lg animate-fade-in shadow-2xl shadow-primary/20 transition-transform duration-300 cursor-zoom-in"
                style={{ transform: `scale(${zoom})` }}
              />
            )}
          </div>

          {/* Details Section */}
          <div className="p-8 flex flex-col">
            <div className="mb-6 animate-slide-left">
              <h2 className="text-3xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {title}
              </h2>
              {description && (
                <p className="text-muted-foreground leading-relaxed animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                  {description}
                </p>
              )}
            </div>

            {/* Tools Used */}
            {tools.length > 0 && (
              <div className="mb-6 animate-slide-right [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-4 w-4 text-primary animate-bounce-slow" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Tools Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs hover:scale-110 transition-transform duration-300 animate-fade-in border border-primary/20"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Duration */}
            {duration && (
              <div className="mb-6 animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Duration:</span> {duration}
                  </span>
                </div>
              </div>
            )}

            {/* Process Gallery */}
            {processMedia.length > 0 && (
              <div className="mb-6 animate-fade-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
                <div className="flex items-center gap-2 mb-3">
                  <PlayCircle className="h-4 w-4 text-primary animate-bounce-slow" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Making Of</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {processMedia.map((media, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 border-border hover:border-primary transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-primary/30 animate-scale-up"
                      onClick={() => setSelectedMedia(media.url)}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      {media.type === "video" ? (
                        <video
                          src={media.url}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <img
                          src={media.url}
                          alt={media.caption || `Process ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      {media.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/30 group-hover:bg-background/20 transition-colors">
                          <PlayCircle className="h-8 w-8 text-foreground/80 group-hover:scale-125 transition-transform" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow Timeline */}
            {workflow.length > 0 && (
              <div className="mt-4 animate-fade-up [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards]">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="h-4 w-4 text-primary animate-bounce-slow" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Workflow Timeline</h3>
                </div>
                <div className="space-y-4">
                  {workflow.map((step, index) => (
                    <div 
                      key={index} 
                      className="relative pl-6 pb-4 border-l-2 border-border last:border-l-0 last:pb-0 animate-slide-left"
                      style={{ animationDelay: `${800 + index * 150}ms` }}
                    >
                      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-2 border-background animate-pulse" style={{ animationDelay: `${800 + index * 150}ms` }}></div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-foreground hover:text-primary transition-colors">{step.step}</h4>
                          <span className="text-xs text-muted-foreground">{step.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
