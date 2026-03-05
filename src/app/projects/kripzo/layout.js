export const metadata = {
    title: "Kripzo Snacks — global Brand Identity | Muhammed Afsal Ch",
    description: "Authentic Kerala banana chips made with 100% pure coconut oil. A vibrant Brand Platform and FMCG showcase exported globally from God's Own Country.",
    keywords: ["Brand Design", "FMCG Marketing", "Kerala Snacks", "Banana Chips", "International Brand", "Next.js Showcase", "Vibrant UI"],
    openGraph: {
        title: "Kripzo Snacks — global Brand Identity",
        description: "The Golden Crunch from God’s Own Country. Bringing tradition, taste, and trust together from Kerala to the World.",
        url: "https://afsu.dev/projects/kripzo",
        siteName: "Muhammed Afsal Ch Portfolio",
        images: [
            {
                url: "/projects/kripzo/1.png",
                width: 1200,
                height: 630,
                alt: "Kripzo Snacks Brand Platform"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kripzo Snacks — global Brand Identity",
        description: "Vibrant global branding for authentic Kerala traditional snacks.",
        images: ["/projects/kripzo/1.png"],
    },
};

export default function KripzoLayout({ children }) {
    return <>{children}</>;
}
