// Configuration EmailJS
// Utilisation des variables d'environnement pour la sécurité

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL || "",
};

// Initialisation d'EmailJS
export const initEmailJS = () => {
  // EmailJS sera initialisé automatiquement avec la clé publique
  // Vous pouvez aussi utiliser emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY) si nécessaire
};
