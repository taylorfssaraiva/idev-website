import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/next';
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'idev',
    description: 'Transform your business with high-performance applications built using cutting-edge technologies and industry best practices.',
    keywords: [
        'software engineer',
        'full-stack development',
        'database optimization',
        'cloud solutions',
        'Taylor Fonseca Saraiva',
        'idev',
        'web development',
        'consulting'
    ],
    authors: [{name: 'Taylor Fonseca Saraiva'}],
    creator: 'Taylor Fonseca Saraiva',
    publisher: 'idev',
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.idevtech.dev',
        title: 'idev',
        description: 'Transform your business with high-performance applications built using cutting-edge technologies and industry best practices.',
        siteName: 'idev',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'idev',
        description: 'Transform your business with high-performance applications built using cutting-edge technologies and industry best practices.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-verification-code',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}