export const metadata = {
    title: "Lexora Business Solutions — Enterprise Branding | Muhammed Afsal Ch",
    description: "Professional corporate portal for Lexora in Doha, Qatar. Offering end-to-end business solutions, PRO services, and legal consultancy with an authoritative Corporate Qatar aesthetic.",
    keywords: ["Business Solutions Qatar", "PRO Services Doha", "Company Formation Qatar", "Corporate Branding", "Enterprise UX", "Next.js"],
    openGraph: {
        title: "Lexora Business Solutions — Enterprise Branding",
        description: "Empowering Global Business in the Qatari Market. A minimal, authoritative corporate identity and lead-generation powerhouse.",
        url: "https://afsu.dev/projects/lexora",
        siteName: "Muhammed Afsal Ch Portfolio",
        images: [
            {
                url: "/projects/lexora/1.png",
                width: 1200,
                height: 630,
                alt: "Lexora Business Solutions Corporate Portal"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lexora Business Solutions — Enterprise Branding",
        description: "Authoritative corporate design for a premier consultancy in Doha, Qatar.",
        images: ["/projects/lexora/1.png"],
    },
};

export default function LexoraLayout({ children }) {
    return <>{children}</>;
}
