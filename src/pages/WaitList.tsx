import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { EMAILJS_CONFIG } from "@/config/emailjs";

// Schéma de validation pour l'email
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

const WaitList = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsLoading(true);
    
    try {
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        email: data.email,        
        reply_to: data.email,  
        message: `Nouvelle inscription à la liste d'attente: ${data.email}`,
        subject: "Nouvelle inscription Qubex Protocol",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      toast.success("Email sent successfully! You are now on the waiting list.");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-2 right-5 z-20">
        <ThemeToggle />
      </div>
      
      {/* Background Animation */}
      {/* <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/0149e876-1332-4071-9afe-95abc3b13ef5/jHuXHhF5ab.lottie"
          loop
          autoplay
          className="w-500 h-full"
          style={{ width: "100%", height: "100%" }}
        />
      </div> */}
      
      {/* Quantum Grid Overlay */}
      <div className="absolute inset-0 block dark:hidden bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 mb-4 max-w-4xl mx-auto leading-relaxed">
          Welcome to the waitlist, <span className="text-primary font-semibold">Qubex Protocol !</span> <br /><br /> If you would like to participate in the beta version from the start, you are welcome to do so. We will keep you informed of the project's progress until the launch of the beta version.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-8 mt-[7vh] px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 quantum-glow flex flex-col items-center gap-2">
            <input
              {...register("email")}
              type="email"
              placeholder="address@mail.com"
              className="bg-transparent outline-none text-primary placeholder:text-primary/60 w-56"
              disabled={isLoading}
            />
          </Badge>
          
          {/* Error message */}
          {errors.email && (
            <p className="text-red-500 text-sm -mt-4">{errors.email.message}</p>
          )}
          
          <Button 
            type="submit" 
            size="sm" 
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Send...
              </>
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent data-stream" />
    </section>
  );
};

export default WaitList;