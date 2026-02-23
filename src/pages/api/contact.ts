import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message, honeypot, startTime } = req.body;

    // 1. Honeypot check: If the hidden field is filled, it's a bot
    if (honeypot) {
        console.log('Spam detected via honeypot');
        return res.status(200).json({ message: 'Message sent successfully' }); // Silently ignore but return 200 to trick the bot
    }

    // 2. Submission speed check: If submitted in less than 3 seconds, likely a bot
    const duration = Date.now() - startTime;
    if (duration < 3000) {
        console.log('Spam detected via submission speed:', duration, 'ms');
        return res.status(400).json({ message: 'Please wait a few seconds before submitting.' });
    }

    // 3. Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['grimr0833@gmail.com'],
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f4f4f4; border-left: 4px solid #333;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(400).json({ message: 'Failed to send email' });
        }

        return res.status(200).json({ message: 'Email sent successfully', id: data?.id });
    } catch (err) {
        console.error('Server Error:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
