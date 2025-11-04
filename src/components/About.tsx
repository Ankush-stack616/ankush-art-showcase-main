export const About = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6 animate-slide-left">About</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl opacity-30 animate-pulse" />
          <p className="relative text-muted-foreground text-lg leading-relaxed animate-slide-right backdrop-blur-sm">
            Hi, I'm Ankush Shakya — a 3D artist passionate about stylized and low-poly 
            environments. Currently exploring sculpting and texturing workflows in Blender 
            and Substance Painter. I love creating immersive worlds and memorable characters.
          </p>
        </div>
      </div>
    </section>
  );
};
