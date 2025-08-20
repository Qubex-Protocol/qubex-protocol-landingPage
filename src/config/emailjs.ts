// Configuration EmailJS
// ⚠️ WARNING: EmailJS works on the client side, so IDs remain visible in requests.
// For true security, use a backend solution (see VERCEL_DEPLOYMENT.md).

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL || "",
};

// Initialisation d'EmailJS
export const initEmailJS = () => {

};
