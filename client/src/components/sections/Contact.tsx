import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Send, Loader2, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@/hooks/use-contact";
import { api, type ContactSubmitInput } from "@shared/routes";

export function Contact() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactSubmitInput>({
    resolver: zodResolver(api.contact.submit.input),
  });

  const onSubmit = (data: ContactSubmitInput) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      }
    });
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact Me">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-5/12"
        >
          <h3 className="text-3xl font-display font-bold mb-2 text-white drop-shadow-sm">Let's build something awesome together.</h3>
          <p className="text-primary font-bold mb-6 brightness-125">Open to internships, entry-level roles, and open-source opportunities.</p>
          <p className="text-white/90 mb-10 text-lg leading-relaxed font-medium">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative juice, hit me up!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                <Mail className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-sm text-primary font-bold mb-1 uppercase tracking-wider brightness-110">Email</p>
                <a href="mailto:gopaljilab@gmail.com" className="text-lg font-bold text-white hover:text-primary transition-colors decoration-primary underline-offset-4 hover:underline">
                  gopaljilab@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                <MapPin className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-sm text-primary font-bold mb-1 uppercase tracking-wider brightness-110">Location</p>
                <p className="text-lg font-bold text-white">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
          
          {/* Added Social Links to Contact Section */}
          <div className="flex items-center gap-4 mt-12">
            <a 
              href="https://github.com/gopaljilab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all text-muted-foreground"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/guptagopal001/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all text-muted-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-7/12"
        >
          <div className="glass-panel p-8 md:p-10 rounded-3xl relative">
            {/* Glow effect behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[80px] -z-10"></div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 pl-1">Your Name</label>
                  <Input 
                    {...register("name")} 
                    placeholder="John Doe"
                    className="bg-black/70 border-white/20 focus-visible:ring-primary focus-visible:border-primary h-12 rounded-xl placeholder:text-white/50 text-white font-medium shadow-inner"
                  />
                  {errors.name && <p className="text-red-400 text-sm pl-1 font-bold">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 pl-1">Your Email</label>
                  <Input 
                    {...register("email")} 
                    type="email"
                    placeholder="john@example.com"
                    className="bg-black/70 border-white/20 focus-visible:ring-primary focus-visible:border-primary h-12 rounded-xl placeholder:text-white/50 text-white font-medium shadow-inner"
                  />
                  {errors.email && <p className="text-red-400 text-sm pl-1 font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 pl-1">Phone Number (Optional)</label>
                <Input 
                  {...register("phone")} 
                  placeholder="+91 98765 43210"
                  className="bg-black/70 border-white/20 focus-visible:ring-primary focus-visible:border-primary h-12 rounded-xl placeholder:text-white/50 text-white font-medium shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 pl-1">Message</label>
                <Textarea 
                  {...register("message")} 
                  placeholder="Tell me about your project..."
                  className="bg-black/70 border-white/20 focus-visible:ring-primary focus-visible:border-primary min-h-[150px] rounded-xl resize-none placeholder:text-white/50 text-white font-medium shadow-inner"
                />
                {errors.message && <p className="text-red-400 text-sm pl-1 font-bold">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting || submitMutation.isPending}
                className="w-full h-14 rounded-xl bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 box-glow mt-4 group"
              >
                {isSubmitting || submitMutation.isPending ? (
                  <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
