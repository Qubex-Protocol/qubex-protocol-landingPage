import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/10 to-cyan-400/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.3)_0%,_rgba(14,165,233,0.2)_30%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.2)_0%,_transparent_50%)]" />

      {/* Back Arrow */}
      <div className="absolute top-12 left-12 z-20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="h-10 w-10 p-0 hover:bg-primary/20 text-white/80 hover:text-white transition-colors border border-white/20 hover:border-white/40 backdrop-blur-sm"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Enhanced Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:25px_25px] animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {!showProfileForm ? (
          <>
            <p className="text-xl md:text-2xl text-cyan-100/90 font-subtitle max-w-4xl mx-auto mb-16 leading-relaxed drop-shadow-lg">
              Welcome to the waitlist, <span className="text-cyan-300 font-bold drop-shadow-md">Qubex Protocol !</span> <br /><br /> If you would like to participate in the beta version from the start, you are welcome to do so. We will keep you informed of the project's progress until the launch of the beta version.
            </p>
            <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="flex flex-col items-center gap-6">
              {/* Enhanced Email Input */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                <div className="relative flex items-center border-2 border-cyan-400/50 rounded-full px-6 py-3 text-base font-body hover:border-cyan-300 transition-all duration-300 bg-gradient-to-r from-blue-950/80 to-indigo-900/80 backdrop-blur-lg shadow-xl">
                  <input
                    {...emailForm.register("email")}
                    type="email"
                    placeholder="address@mail.com"
                    className="bg-transparent outline-none text-white placeholder:text-cyan-200/70 w-64 text-center font-medium"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Error message */}
              {emailForm.formState.errors.email && (
                <p className="text-red-400 text-sm font-medium drop-shadow-lg">{emailForm.formState.errors.email.message}</p>
              )}

              <Button
                type="submit"
                size="sm"
                disabled={isLoading}
                className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-8 py-3 text-base font-semibold group mt-4 border-2 border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 backdrop-blur-sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <span className="relative">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </span>
              </Button>
            </form>
          </>
        ) : (
          <>
            <p className="text-xl md:text-2xl text-cyan-100/90 font-subtitle max-w-4xl mx-auto mb-16 leading-relaxed drop-shadow-lg">
              Great! <span className="text-cyan-300 font-bold drop-shadow-md">Complete your profile</span>. This section is optimal. If you do not wish to use it, you can close the tab or return to the Home page.
            </p>
            <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="flex flex-col items-center gap-6">
              {/* Enhanced X Pseudo Input */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                <div className="relative flex items-center border-2 border-cyan-400/50 rounded-full px-6 py-3 text-base font-body hover:border-cyan-300 transition-all duration-300 bg-gradient-to-r from-blue-950/80 to-indigo-900/80 backdrop-blur-lg shadow-xl">
                  <input
                    {...profileForm.register("pseudoX")}
                    type="text"
                    placeholder="Your X pseudo (@username)"
                    className="bg-transparent outline-none text-white placeholder:text-cyan-200/70 w-64 text-center font-medium"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Error message for pseudo */}
              {profileForm.formState.errors.pseudoX && (
                <p className="text-red-400 text-sm font-medium drop-shadow-lg -mt-4">{profileForm.formState.errors.pseudoX.message}</p>
              )}

              {/* Enhanced Status Selection */}
              <div className="flex flex-col gap-4 mb-4">
                <label className="text-cyan-100 text-lg font-semibold drop-shadow-lg">Your status:</label>
                <div className="flex gap-3 flex-wrap justify-center">
                  <label className="relative group cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative flex items-center space-x-2 border-2 border-cyan-400/50 rounded-full px-4 py-2 text-sm font-medium hover:border-cyan-300 transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-950/80 to-indigo-900/80 backdrop-blur-lg shadow-lg">
                      <input
                        {...profileForm.register("status")}
                        type="radio"
                        value="developer"
                        className="text-cyan-400 focus:ring-cyan-400 focus:ring-1"
                        disabled={isLoading}
                        onChange={() => setShowCompanyField(true)}
                      />
                      <span className="text-white">Developer</span>
                    </div>
                  </label>
                  <label className="relative group cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative flex items-center space-x-2 border-2 border-cyan-400/50 rounded-full px-4 py-2 text-sm font-medium hover:border-cyan-300 transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-950/80 to-indigo-900/80 backdrop-blur-lg shadow-lg">
                      <input
                        {...profileForm.register("status")}
                        type="radio"
                        value="investor"
                        className="text-cyan-400 focus:ring-cyan-400 focus:ring-1"
                        disabled={isLoading}
                        onChange={() => setShowCompanyField(true)}
                      />
                      <span className="text-white">Investor</span>
                    </div>
                  </label>
                  <label className="relative group cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative flex items-center space-x-2 border-2 border-cyan-400/50 rounded-full px-4 py-2 text-sm font-medium hover:border-cyan-300 transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-950/80 to-indigo-900/80 backdrop-blur-lg shadow-lg">
                      <input
                        {...profileForm.register("status")}
                        type="radio"
                        value="web3"
                        className="text-cyan-400 focus:ring-cyan-400 focus:ring-1"
                        disabled={isLoading}
                        onChange={() => setShowCompanyField(true)}
                      />
                      <span className="text-white">Work in Web3</span>
                    </div>
                  </label>
                  <label className="relative group cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative flex items-center space-x-2 border-2 border-cyan-400/50 rounded-full px-4 py-2 text-sm font-medium hover:border-cyan-300 transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-950/80 to-indigo-900/80 backdrop-blur-lg shadow-lg">
                      <input
                        {...profileForm.register("status")}
                        type="radio"
                        value="curious"
                        className="text-cyan-400 focus:ring-cyan-400 focus:ring-1"
                        disabled={isLoading}
                        onChange={() => setShowCompanyField(false)}
                      />
                      <span className="text-white">Curious</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Error message for status */}
              {profileForm.formState.errors.status && (
                <p className="text-red-400 text-sm font-medium drop-shadow-lg">{profileForm.formState.errors.status.message}</p>
              )}

              {/* Enhanced Company Input */}
              {showCompanyField && (
                <>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
                    <div className="relative flex items-center border-2 border-cyan-400/50 rounded-full px-6 py-3 text-base font-body hover:border-cyan-300 transition-all duration-300 bg-gradient-to-r from-blue-950/80 to-indigo-900/80 backdrop-blur-lg shadow-xl">
                      <input
                        {...profileForm.register("company")}
                        type="text"
                        placeholder="Your company (optional)"
                        className="bg-transparent outline-none text-white placeholder:text-cyan-200/70 w-64 text-center font-medium"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Error message for company */}
                  {profileForm.formState.errors.company && (
                    <p className="text-red-400 text-sm font-medium drop-shadow-lg -mt-2">{profileForm.formState.errors.company.message}</p>
                  )}
                </>
              )}

              <Button
                type="submit"
                size="sm"
                disabled={isLoading}
                className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-8 py-3 text-base font-semibold group mt-4 border-2 border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 backdrop-blur-sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <span className="relative">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Completing...
                    </>
                  ) : (
                    "Complete Profile"
                  )}
                </span>
              </Button>
            </form>
          </>
        )}
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-cyan-400/40 rounded-full animate-pulse shadow-lg shadow-cyan-400/20" />
      <div className="absolute top-40 right-10 w-20 h-20 border-2 border-blue-500/40 rounded-full animate-pulse shadow-lg shadow-blue-500/20" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-purple-400/40 rounded-full animate-pulse shadow-lg shadow-purple-400/20" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 left-1/4 w-12 h-12 border border-cyan-300/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-40 right-1/4 w-14 h-14 border border-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />


      {/* Particle Effects */}
      <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '3s' }} />
      <div className="absolute top-3/4 right-10 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default WaitList;