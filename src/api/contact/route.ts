import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json()

        // Create transporter using Zoho SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.ZOHO_EMAIL, // your Zoho email
                pass: process.env.ZOHO_APP_PASSWORD, // Zoho app-specific password
            },
        })

        // Email to you
        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,
            to: process.env.ZOHO_EMAIL, // or contact@idevtech.dev
            subject: `New Contact Form: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
            replyTo: email,
        })

        // Optional: Send confirmation email to user
        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,
            to: email,
            subject: 'Thanks for contacting idev',
            html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you within 24-48 hours.</p>
        <p>Best regards,<br>idev Team</p>
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