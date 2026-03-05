import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammed Afsal Ch — Full Stack Developer & UI Architect",
  description: "Muhammed Afsal Ch is a premium Full-stack web developer from Mundakkal, Malappuram, Kerala. Specializing in Next.js, React, Node.js, and high-performance digital solutions for global clients.",
  keywords: ["Muhammed Afsal Ch", "Full Stack Developer", "Web Architect", "Next.js Expert", "React Developer", "UI/UX Designer", "MERN Stack", "Kerala Web Developer", "Malappuram Developer", "Mundakkal", "Freelance Developer India"],
  authors: [{ name: "Muhammed Afsal Ch" }],
  creator: "Muhammed Afsal Ch",
  publisher: "Muhammed Afsal Ch",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Muhammed Afsal Ch — Full Stack Developer & UI Architect',
    description: 'Engineering premium digital experiences with Next.js, React, and modern tech stacks. Discover the portfolio of Muhammed Afsal Ch.',
    url: 'https://afsu.dev',
    siteName: 'Muhammed Afsal Ch Portfolio',
    images: [
      {
        url: '/projects/afsal.png',
        width: 1200,
        height: 630,
        alt: 'Muhammed Afsal Ch - Full Stack Developer'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammed Afsal Ch — Full Stack Developer & UI Architect',
    description: 'Engineering premium digital experiences with Next.js, React, and modern tech stacks.',
    creator: '@afsu_dev',
    images: ['/projects/afsal.png'],
  },
  alternates: {
    canonical: 'https://afsu.dev'
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammed Afsal Ch",
            "url": "https://afsu.dev",
            "image": "https://afsu.dev/projects/afsal.png",
            "sameAs": [
              "https://github.com/muhammedafsalch",
              "https://www.linkedin.com/in/muhammedafsalch",
              "https://twitter.com/afsu_dev",
              "https://wa.me/919645917277"
            ],
            "jobTitle": "Full Stack Developer & UI Architect",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mundakkal",
              "addressRegion": "Malappuram",
              "addressCountry": "IN"
            },
            "description": "Premium Full-stack web developer specializing in Next.js, React, and Node.js."
          }`}
        </script>
      </body>
    </html>
  );
}
