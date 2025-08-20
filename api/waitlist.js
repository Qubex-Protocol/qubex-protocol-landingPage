import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // check is valid email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    // Vérification des variables d'environnement
    if (!process.env.SENDGRID_API_KEY || !process.env.TO_EMAIL || !process.env.FROM_EMAIL) {
      console.error('Variables d\'environnement manquantes:', {
        SENDGRID_API_KEY: !!process.env.SENDGRID_API_KEY,
        TO_EMAIL: !!process.env.TO_EMAIL,
        FROM_EMAIL: !!process.env.FROM_EMAIL
      });
      return res.status(500).json({ 
        error: 'Configuration SendGrid manquante' 
      });
    }

    // Configuration SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Options email
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: 'Nouvelle inscription Qubex Protocol',
      text: `Nouvelle inscription à la liste d'attente: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouvelle inscription Qubex Protocol</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
            <p><strong>IP:</strong> ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}</p>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Cette inscription a été effectuée via le formulaire de la liste d'attente.
          </p>
        </div>
      `,
    };

    // Envoi de l'email
    await sgMail.send(msg);

    // Réponse
    res.status(200).json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    // Log plus détaillé pour le debugging
    if (error.response) {
      console.error('Réponse d\'erreur SendGrid:', error.response.body);
    }
    
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
