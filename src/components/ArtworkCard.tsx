import { Card } from "@/components/ui/card";

interface ArtworkCardProps {
  image: string;
  title: string;
  onClick: () => void;
}

export const ArtworkCard = ({ image, title, onClick }: ArtworkCardProps) => {
  return (
    <Card
      className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,138,0,0.3)] hover:-translate-y-2 animate-scale-up"
      onClick={onClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
      </div>
      <div className="p-4 relative">
        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />
      </div>
    </Card>
  );
};
