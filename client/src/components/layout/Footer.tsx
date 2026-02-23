import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-xl tracking-tight mb-2">Gopal.</p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gopal Gupta. All rights reserved.
          </p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass-panel border-white/10 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
