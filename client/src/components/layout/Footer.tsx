import { ArrowUp, Github, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-white/5 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-2xl tracking-tight mb-2 text-white">Gopal Gupta</p>
          <p className="text-muted-foreground/80 text-sm font-medium">
            © {new Date().getFullYear()} Gopal Gupta. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/gopaljilab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-panel border-white/10 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/guptagopal001/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-panel border-white/10 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-panel border-white/10 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
