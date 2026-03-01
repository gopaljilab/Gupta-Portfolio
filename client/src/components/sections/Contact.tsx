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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSubmitInput>({
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
      },
    });
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact Me">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:w-5/12 z-10"
        >
          <h3 className="text-3xl font-bold mb-3 text-foreground">
            Let’s build something awesome together.
          </h3>

          <p className="text-primary font-semibold mb-6">
            Open to internships, entry-level roles, and open-source opportunities.
          </p>

          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            I'm currently available for freelance work and full-time opportunities.
            If you have a project that needs some creative juice, hit me up!
          </p>

          <div className="space-y-6">
            {/* EMAIL */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:gopaljilab@gmail.com"
                  className="text-lg font-semibold text-foreground hover:text-primary transition"
                >
                  gopaljilab@gmail.com
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                  Location
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-12">
            <a
              href="https://github.com/gopaljilab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/guptagopal001/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:w-7/12 z-10"
        >
          <div className="bg-card p-8 md:p-10 rounded-3xl border relative">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NAME */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">
                    Your Name
                  </label>
                  <Input {...register("name")} placeholder="John Doe" />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">
                    Your Email
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">
                  Phone Number (Optional)
                </label>
                <Input
                  {...register("phone")}
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">
                  Message
                </label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* SUBMIT */}
              <Button
                type="submit"
                disabled={isSubmitting || submitMutation.isPending}
                className="w-full h-14 font-semibold rounded-xl"
              >
                {isSubmitting || submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}