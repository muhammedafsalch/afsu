import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammed Afsal Ch — Web Developer",
  description: "Muhammed Afsal Ch — Full-stack web developer from Mundakkal, Malappuram, Kerala. Specializes in web development, e-commerce, SEO, and digital marketing.",
  openGraph: {
    title: 'Muhammed Afsal Ch — Web Developer',
    description: 'Full-stack web developer from Mundakkal, Malappuram, Kerala. Web development, e-commerce, SEO, and digital marketing.',
    url: 'https://your-domain.com',
    siteName: 'Afsal.dev',
    images: [
      {
        url: 'https://your-domain.com/afsu.png',
        width: 1200,
        height: 630,
        alt: 'Muhammed Afsal Ch'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammed Afsal Ch — Web Developer',
    description: 'Full-stack web developer from Mundakkal, Malappuram, Kerala.'
  },
  alternates: {
    canonical: 'https://your-domain.com'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen premium-dark`}
      >
        <main className="flex-grow">{children}</main>
        <Footer />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammed Afsal Ch",
            "url": "https://your-domain.com",
            "sameAs": [
              "https://github.com/yourprofile",
              "https://www.linkedin.com/in/yourprofile"
            ],
            "jobTitle": "Full-stack Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Afsal.dev"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mundakkal",
              "addressRegion": "Malappuram",
              "addressCountry": "IN"
            }
          }`}
        </script>
      </body>
    </html>
  );
}
