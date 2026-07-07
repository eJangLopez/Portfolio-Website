import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Basic in-memory rate limiting setup
  const ipSubmissionMap = new Map<string, { count: number; firstSubmitTime: number }>();
  const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window
  const MAX_SUBMISSIONS_PER_WINDOW = 5; // max 5 per hour

  // Cleanup rate limiting map every hour to prevent memory growth
  setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of ipSubmissionMap.entries()) {
      if (now - data.firstSubmitTime > RATE_LIMIT_WINDOW_MS) {
        ipSubmissionMap.delete(ip);
      }
    }
  }, RATE_LIMIT_WINDOW_MS);

  // API Contact Endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, message, website, turnstileToken } = req.body;

      // 1. Honeypot check (spam protection)
      if (website) {
        console.warn('Spam submission blocked by honeypot field.');
        return res.status(400).json({
          success: false,
          error: 'Spam detected. Transmission blocked.',
        });
      }

      // 2. Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields: Name, Email, and Message are required.',
        });
      }

      // 3. Simple Rate Limiting check
      const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
      const now = Date.now();
      const ipData = ipSubmissionMap.get(clientIp);

      if (ipData) {
        if (now - ipData.firstSubmitTime < RATE_LIMIT_WINDOW_MS) {
          if (ipData.count >= MAX_SUBMISSIONS_PER_WINDOW) {
            return res.status(429).json({
              success: false,
              error: 'Too many transmissions sent from this terminal. Please try again later.',
            });
          }
          ipData.count += 1;
        } else {
          ipSubmissionMap.set(clientIp, { count: 1, firstSubmitTime: now });
        }
      } else {
        ipSubmissionMap.set(clientIp, { count: 1, firstSubmitTime: now });
      }

      // 4. Cloudflare Turnstile token verification
      // If a Turnstile Secret Key is configured, verify it. Otherwise log/warn and allow.
      const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
      if (turnstileSecret && turnstileToken) {
        try {
          const fetchResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              secret: turnstileSecret,
              response: turnstileToken,
              remoteip: clientIp,
            }),
          });
          const verificationResult = await fetchResponse.json() as { success: boolean; 'error-codes'?: string[] };
          if (!verificationResult.success) {
            console.error('Cloudflare Turnstile token validation failed:', verificationResult['error-codes']);
            return res.status(400).json({
              success: false,
              error: 'Spam validation failed. Please solve the security widget and try again.',
            });
          }
        } catch (verifyError) {
          console.error('Error verifying Turnstile token:', verifyError);
          // Don't hard-fail if Turnstile service is down
        }
      }

      // 5. Send Email via Resend
      const resendKey = process.env.RESEND_API_KEY;
      const recipient = 'elijahdavid.lopez.090305@gmail.com';

      const emailSubject = `Portfolio Transmission: ${name} (${company || 'Individual'})`;
      const emailText = `Hello Elijah,

You received a new message from your portfolio's recruiter transmission portal:

Sender Name: ${name}
Sender Email: ${email}
Company / Organization: ${company || 'N/A'}

Message Payload:
${message}

---
Sent via Portfolio App`;

      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 4px; background-color: #ffffff;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-weight: bold; font-size: 20px; margin-top: 0;">
            Recruiter Transmission Portal
          </h2>
          <p style="font-size: 14px; color: #475569; margin: 15px 0;">
            You received a new corporate message from your portfolio website:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1e293b; width: 120px; border-bottom: 1px solid #f1f5f9;">Sender Name:</td>
              <td style="padding: 8px 0; color: #334155; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1e293b; border-bottom: 1px solid #f1f5f9;">Sender Email:</td>
              <td style="padding: 8px 0; color: #0284c7; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1e293b; border-bottom: 1px solid #f1f5f9;">Company:</td>
              <td style="padding: 8px 0; color: #334155; border-bottom: 1px solid #f1f5f9;">${company || 'N/A'}</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; border-left: 4px solid #c2410c; padding: 15px; margin: 20px 0; border-radius: 2px;">
            <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Message Payload:</h4>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 11px; color: #94a3b8; text-align: center; font-family: monospace;">
            Sent securely via UST ECE Recruiter Transmission Portal
          </div>
        </div>
      `;

      if (resendKey) {
        // Real Send integration using Resend
        const resendInstance = new Resend(resendKey);
        const sendResult = await resendInstance.emails.send({
          from: 'Portfolio Portal <onboarding@resend.dev>',
          to: recipient,
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        });

        if (sendResult.error) {
          console.error('Resend API Error details:', sendResult.error);
          return res.status(500).json({
            success: false,
            error: `Resend API Error: ${sendResult.error.message}`,
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Message buffered and transmitted successfully.',
          id: sendResult.data?.id,
        });
      } else {
        // Fallback simulated success when RESEND_API_KEY is not configured in AI Studio secrets
        console.info('\n--- [SIMULATED EMAIL TRANSMISSION] ---');
        console.info(`To: ${recipient}`);
        console.info(`Subject: ${emailSubject}`);
        console.info(`Content:\n${emailText}`);
        console.info('---------------------------------------\n');
        
        return res.status(200).json({
          success: true,
          simulated: true,
          message: 'Transmission simulated successfully. To enable actual delivery, configure RESEND_API_KEY in the Secrets panel.',
        });
      }
    } catch (err: any) {
      console.error('Internal contact system error:', err);
      return res.status(500).json({
        success: false,
        error: err?.message || 'An internal server error occurred during transmission.',
      });
    }
  });

  // Vite development middleware vs Static files production fallback
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
