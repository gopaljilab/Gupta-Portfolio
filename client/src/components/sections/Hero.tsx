import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Download, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const { toast } = useToast();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out" },
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadCV = () => {
    window.open("/resume.pdf", "_blank");
    toast({
      title: "Opening Resume",
      description: "Gopal's resume is opening in a new tab.",
    });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-200/20 dark:bg-slate-800/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-5/12 flex justify-center md:justify-start order-1 md:order-2 md:translate-x-8"
          >
<div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl"></div>

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-slate-200 dark:border-slate-800 overflow-hidden relative z-10 bg-white dark:bg-slate-900 p-1.5 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGqYSKt481srA/profile-displayphoto-crop_800_800/B4DZwEFFHBIsAI-/0/1769594967419?e=1787184000&v=beta&t=yLwvbEGwH2cYo4vbQDn_k7UAjDTQrHJOZ-JFQuB465s"
                    alt="Gopal Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Status Badge — centered below image */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-2 px-4 rounded-full flex items-center gap-2 shadow-sm z-20 whitespace-nowrap">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 order-2 md:order-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="text-lg">👋</span>
              <span className="text-sm font-bold">Say Hello</span>
            </div>

{/* Name */}
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              Hi, I’m <span className="text-primary">Gopal Gupta</span>
            </h1>

            <h2 className="hero-title text-xl md:text-2xl font-display text-slate-700 dark:text-slate-300 mb-6 font-semibold">
              Java Full-Stack Developer | Open Source Contributor
            </h2>

            <p className="hero-sub text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I build scalable Java full-stack applications using Spring Boot, React, and SQL, with hands-on experience in open-source collaboration and real-world projects.
            </p>

            {/* Location + Social Links combined row */}
            <div className="hero-sub flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <span className="hidden sm:block text-slate-300 dark:text-slate-600">|</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/gopaljilab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/guptagopal001/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-primary text-white hover:bg-primary/90 w-full sm:w-auto font-bold shadow-sm transition-all"
              >
                <a href="/resume.pdf" download="Gopal_Gupta_Resume.pdf">
                  Download CV
                  <Download className="ml-2 w-4 h-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 w-full sm:w-auto font-bold transition-all"
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}