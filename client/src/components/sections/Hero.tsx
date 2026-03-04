import { motion } from "framer-motion";
import { MapPin, Download, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { toast } = useToast();

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
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-200/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

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

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-slate-200 overflow-hidden relative z-10 bg-white p-1.5 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGqYSKt481srA/profile-displayphoto-crop_800_800/B4DZwEFFHBIsAI-/0/1769594967419?e=1773273600&v=beta&t=Od4tAEoeGmCF9pAvi3NMaRcskKcxazt9ijnQkhgKH1A"
                    alt="Gopal Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-white border border-slate-200 py-2 px-4 rounded-full flex items-center gap-2 shadow-sm z-20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold text-slate-700">Available for work</span>
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-slate-900">
              Hi, I’m <span className="text-primary">Gopal Gupta</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-display text-slate-700 mb-6 font-semibold">
              Java Full-Stack Developer | Open Source Contributor
            </h2>

            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I build scalable Java full-stack applications using Spring Boot, React, and SQL, with hands-on experience in open-source collaboration and real-world projects.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mb-10 font-medium">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Bengaluru, Karnataka, India</span>
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
                className="rounded-full px-8 border-slate-200 hover:bg-slate-50 text-slate-700 w-full sm:w-auto font-bold transition-all"
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
              <a 
                href="https://github.com/gopaljilab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/guptagopal001/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}