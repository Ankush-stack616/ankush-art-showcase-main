import { Mail, Linkedin, Instagram, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-xl font-semibold text-foreground animate-fade-up">Get In Touch</h3>
          <div className="flex gap-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("ankushshakya1221@gmail.com");
                    }}
                    className="relative flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 px-4 py-2 rounded-lg group"
                    aria-label="Email"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse" />
                    <div className="absolute inset-0 border-2 border-primary/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,138,0,0.8)]" />
                    <Mail className="h-5 w-5 relative z-10 drop-shadow-[0_0_8px_rgba(255,138,0,0.9)]" />
                    <span className="text-sm relative z-10 drop-shadow-[0_0_8px_rgba(255,138,0,0.9)]">Email</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/20">
                  <span>ankushshakya1221@gmail.com</span>
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">(Click to copy)</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <a
              href="https://www.linkedin.com/in/ankush-shakya-29b935285"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 text-foreground hover:text-secondary transition-all duration-300 hover:scale-110 px-4 py-2 rounded-lg group"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse" />
              <div className="absolute inset-0 border-2 border-secondary/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,82,0,0.8)]" />
              <Linkedin className="h-5 w-5 relative z-10 drop-shadow-[0_0_8px_rgba(255,82,0,0.9)]" />
              <span className="text-sm relative z-10 drop-shadow-[0_0_8px_rgba(255,82,0,0.9)]">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/ankushshakya5555"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 text-foreground hover:text-accent transition-all duration-300 hover:scale-110 px-4 py-2 rounded-lg group"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse" />
              <div className="absolute inset-0 border-2 border-accent/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,128,128,0.8)]" />
              <Instagram className="h-5 w-5 relative z-10 drop-shadow-[0_0_8px_rgba(0,128,128,0.9)]" />
              <span className="text-sm relative z-10 drop-shadow-[0_0_8px_rgba(0,128,128,0.9)]">Instagram</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground animate-fade-in">
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <span>•</span>
            <span>© {new Date().getFullYear()} Ankush Shakya. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
