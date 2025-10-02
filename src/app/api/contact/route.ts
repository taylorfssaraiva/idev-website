import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json()

        // Create transporter using Zoho SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtppro.zoho.eu',
            port: 465,
            secure: true,
            auth: {
                user: process.env.ZOHO_EMAIL,
                pass: process.env.ZOHO_APP_PASSWORD,
            },
        })

        // Email to you (inbox notification)
        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,
            to: process.env.ZOHO_EMAIL,
            subject: `📩 New Contact Form Submission: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
          <h2 style="color: #ef4444;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message.replace(/\n/g, '<br>')}</p>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">
            This message was sent via the contact form on <a href="https://www.idevtech.dev" style="color:#ef4444; text-decoration:none;">idev.company</a>
          </p>
        </div>
      `,
            replyTo: email,
        })

        // Confirmation email to user
        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,
            to: email,
            subject: '✅ We’ve received your message – idev',
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
            <h2 style="color: #ef4444;">Thank you for contacting IDev</h2>
            <p>Hi ${name},</p>
            <p>Thank you for reaching out! Your message has been received, and I’ll personally get back to you within <strong>24–48
                hours</strong>.</p>
            <p>If your request is urgent, feel free to reply directly to this email.</p>
        
            <br/>
            <p>Best regards,</p>
        
            <!-- Signature -->
            <table style="font-family: Arial, sans-serif; margin-top:16px;">
                <tr>
                    <td style="padding-right:12px;">
                        <div style="width:40px; height:40px; background:#ef4444; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold; font-size:14px;">
                            idev
                        </div>
                    </td>
                    <td style="font-size:14px; color:#333;">
                        <strong>Taylor Fonseca Saraiva</strong><br/>
                        idev<br/>
                        <a href="https://www.idevtech.dev"
                           style="color:#ef4444; text-decoration:none;">https://www.idevtech.dev</a>
                    </td>
                </tr>
            </table>
        </div>
      `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        )
    }
}