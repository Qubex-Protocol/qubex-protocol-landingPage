import nodemailer from 'nodemailer';

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

    // config email
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Options email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
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

    // Mail send
    await transporter.sendMail(mailOptions);

    // Anwser
    res.status(200).json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email' 
    });
  }
}
