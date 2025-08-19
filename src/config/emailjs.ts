// Configuration EmailJS
// Remplacez ces valeurs par vos propres clés EmailJS

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_fufn49h", // Remplacez par votre nouveau Service ID Outlook
  TEMPLATE_ID: "template_ihwrqtq", // Votre Template ID
  PUBLIC_KEY: "R2o6TQ5u0tB6gK7BB", // Votre Public Key
  TO_EMAIL: "qubexprotocol@gmail.com", // L'email où vous voulez recevoir les inscriptions
};

// Initialisation d'EmailJS
export const initEmailJS = () => {
  // EmailJS sera initialisé automatiquement avec la clé publique
  // Vous pouvez aussi utiliser emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY) si nécessaire
};
