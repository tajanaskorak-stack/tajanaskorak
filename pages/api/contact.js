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

  // Check if environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing Gmail credentials in environment variables');
    console.error('GMAIL_USER exists:', !!process.env.GMAIL_USER);
    console.error('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD);
    return res.status(500).json({ 
      message: 'Email service not configured. Please contact the administrator.',
      success: false 
    });
  }

  // Log configuration (without exposing password)
  console.log('Gmail configuration loaded for:', process.env.GMAIL_USER);

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER.trim(), // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD.trim(), // Gmail App Password (not regular password)
    },
    // Add connection timeout
    connectionTimeout: 10000,
    greetingTimeout: 10000,
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
    // Send email directly (verify can sometimes fail even when sending works)
    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully to:', process.env.GMAIL_USER);
    
    return res.status(200).json({ 
      message: 'Email sent successfully!',
      success: true 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });
    
    // Provide more detailed error information
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your Gmail App Password.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection error. Please check your internet connection.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Invalid Gmail App Password. Please generate a new one.';
    } else if (process.env.NODE_ENV === 'development') {
      errorMessage = `Failed to send email: ${error.message}`;
    }
    
    return res.status(500).json({ 
      message: errorMessage,
      success: false,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      errorCode: process.env.NODE_ENV === 'development' ? error.code : undefined
    });
  }
}
