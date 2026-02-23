import { motion } from "framer-motion";
import { MapPin, Download, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    toast({
      title: "Downloading CV",
      description: "Gopal's resume is being downloaded...",
    });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-5/12 flex justify-center md:justify-start order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-full blur-2xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 overflow-hidden relative z-10 bg-card p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  {/* using a high quality professional placeholder */}
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                    alt="Gopal Gupta" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-md border border-white/10 py-2 px-4 rounded-full flex items-center gap-2 shadow-xl z-20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 order-2 md:order-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="text-lg">👋</span>
              <span className="text-sm font-medium">Say Hello</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-white">Gopal Gupta</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-display text-primary mb-6 text-glow">
              Java Full-Stack Developer | Open Source Contributor
            </h2>
            
            <p className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto md:mx-0">
              I build clean, user-friendly digital experiences. Passionate about turning complex problems into elegant, intuitive interfaces and robust backend systems.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-8">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                onClick={handleDownloadCV}
                size="lg" 
                className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto group box-glow"
              >
                Download CV
                <Download className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-white/20 hover:bg-white/5 w-full sm:w-auto group"
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
