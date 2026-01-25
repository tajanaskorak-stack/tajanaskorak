import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, surname, number, email, message } = req.body;

  // Validate required fields
  if (!name || !surname || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to your own email
    replyTo: email, // Allow replying directly to the sender
    subject: `Contact Form Inquiry from ${name} ${surname}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
          New Contact Form Inquiry
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name} ${surname}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${number || 'Not provided'}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">
            ${message}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>This email was sent from your landing page contact form.</p>
          <p>You can reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Inquiry

Name: ${name} ${surname}
Email: ${email}
Phone: ${number || 'Not provided'}

Message:
${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ 
      message: 'Email sent successfully!',
      success: true 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email. Please try again later.',
      success: false 
    });
  }
}
