import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "sonner";
import { Loader2, ArrowLeft } from "lucide-react";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import { useNavigate } from "react-router-dom";

// Schéma de validation pour l'email
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Schema for profile completion
const profileSchema = z.object({
  pseudoX: z.string().min(1, "Please enter your X pseudo"),
  status: z.enum(["developer", "investor", "curious", "web3"], {
    errorMap: () => ({ message: "Please select your status" }),
  }),
  company: z.string().optional(),
});

type EmailFormData = z.infer<typeof emailSchema>;
type ProfileFormData = z.infer<typeof profileSchema>;

const WaitList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showCompanyField, setShowCompanyField] = useState(false);
  const navigate = useNavigate();
  
  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const onEmailSubmit = async (data: EmailFormData) => {
    setIsLoading(true);
    
    try {
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        email: data.email,        
        reply_to: data.email,  
        message: `New registration on the waiting list: ${data.email}`,
        subject: "New registration Qubex Protocol",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setUserEmail(data.email);
      setShowProfileForm(true);
      toast.success("Email sent successfully! Please complete your profile.");
      emailForm.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onProfileSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    
    try {
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        email: userEmail,
        reply_to: userEmail,
        message: `Profile completed for ${userEmail}: X Pseudo: ${data.pseudoX}, Status: ${data.status}${data.company ? `, Company: ${data.company}` : ''}`,
        subject: "Profile Completed - Qubex Protocol",
        pseudo_x: data.pseudoX,
        status: data.status,
        company: data.company || '',
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      toast.success("Profile completed successfully! Welcome to Qubex Protocol.");
      profileForm.reset();
      // Optionally redirect or show a success message
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error sending profile:", error);
      toast.error("Error completing profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Back Arrow */}
      <div className="absolute top-12 left-12 z-20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="h-10 w-10 p-0 hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Theme Toggle */}
      <div className="absolute top-2 right-5 z-20">
        <ThemeToggle />
      </div>
            
      {/* Quantum Grid Overlay */}
      <div className="absolute inset-0 block dark:hidden bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {!showProfileForm ? (
          <>
            <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 mb-4 max-w-4xl mx-auto leading-relaxed">
              Welcome to the waitlist, <span className="text-primary font-semibold">Qubex Protocol !</span> <br /><br /> If you would like to participate in the beta version from the start, you are welcome to do so. We will keep you informed of the project's progress until the launch of the beta version.
            </p>
            <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="flex flex-col items-center gap-4">
              {/* Email Badge */}
              <Badge variant="outline" className="mb-8 mt-[7vh] px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 quantum-glow flex flex-col items-center gap-2">
                <input
                  {...emailForm.register("email")}
                  type="email"
                  placeholder="address@mail.com"
                  className="bg-transparent outline-none text-primary placeholder:text-primary/60 w-56"
                  disabled={isLoading}
                />
              </Badge>
              
              {/* Error message */}
              {emailForm.formState.errors.email && (
                <p className="text-red-500 text-sm -mt-4">{emailForm.formState.errors.email.message}</p>
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
          </>
        ) : (
          <>
            <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 mb-4 max-w-4xl mx-auto leading-relaxed">
              Great! <span className="text-primary font-semibold">Complete your profile</span>. This section is optimal. If you do not wish to use it, you can close the tab or return to the Home page.
            </p>
            <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="flex flex-col items-center gap-6">
              {/* X Pseudo Input */}
              <Badge variant="outline" className="mb-4 mt-[7vh] px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 quantum-glow flex flex-col items-center gap-2">
                <input
                  {...profileForm.register("pseudoX")}
                  type="text"
                  placeholder="Your X pseudo (@username)"
                  className="bg-transparent outline-none text-primary placeholder:text-primary/60 w-56"
                  disabled={isLoading}
                />
              </Badge>
              
              {/* Error message for pseudo */}
              {profileForm.formState.errors.pseudoX && (
                <p className="text-red-500 text-sm -mt-4">{profileForm.formState.errors.pseudoX.message}</p>
              )}
              
              {/* Status Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-foreground/80 text-sm font-medium">Your status:</label>
                <div className="flex gap-4 flex-wrap justify-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      {...profileForm.register("status")}
                      type="radio"
                      value="developer"
                      className="text-primary focus:ring-primary"
                      disabled={isLoading}
                      onChange={() => setShowCompanyField(true)}
                    />
                    <span className="text-foreground/80">Developer</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      {...profileForm.register("status")}
                      type="radio"
                      value="investor"
                      className="text-primary focus:ring-primary"
                      disabled={isLoading}
                      onChange={() => setShowCompanyField(true)}
                    />
                    <span className="text-foreground/80">Investor</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      {...profileForm.register("status")}
                      type="radio"
                      value="web3"
                      className="text-primary focus:ring-primary"
                      disabled={isLoading}
                      onChange={() => setShowCompanyField(true)}
                    />
                    <span className="text-foreground/80">Work in Web3</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      {...profileForm.register("status")}
                      type="radio"
                      value="curious"
                      className="text-primary focus:ring-primary"
                      disabled={isLoading}
                      onChange={() => setShowCompanyField(false)}
                    />
                    <span className="text-foreground/80">Curious</span>
                  </label>
                </div>
              </div>
              
              {/* Error message for status */}
              {profileForm.formState.errors.status && (
                <p className="text-red-500 text-sm">{profileForm.formState.errors.status.message}</p>
              )}
              
              {/* Company Input */}
              {showCompanyField && (
                <>
                  <Badge variant="outline" className="mb-4 px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 quantum-glow flex flex-col items-center gap-2">
                    <input
                      {...profileForm.register("company")}
                      type="text"
                      placeholder="Your company (optional)"
                      className="bg-transparent outline-none text-primary placeholder:text-primary/60 w-56"
                      disabled={isLoading}
                    />
                  </Badge>
                  
                  {/* Error message for company */}
                  {profileForm.formState.errors.company && (
                    <p className="text-red-500 text-sm -mt-4">{profileForm.formState.errors.company.message}</p>
                  )}
                </>
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
                    Completing...
                  </>
                ) : (
                  "Complete Profile"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent data-stream" />
    </section>
  );
};

export default WaitList;