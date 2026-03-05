export const metadata = {
    title: "Al Ansar Islamic Complex — Digital Transformation | Muhammed Afsal Ch",
    description: "A Digital Gateway to 40 Years of Educational Excellence. Consolidating 10+ diverse institutions into a single, high-performance digital ecosystem reflecting traditional values and modern standards.",
    keywords: ["Educational Platform", "Next.js", "Institutional Design", "Al Ansar", "Islamic Education", "Web Architecture", "UI Architect"],
    openGraph: {
        title: "Al Ansar Islamic Complex — Digital Transformation",
        description: "Nurturing Faith, Inspiring Minds, Building Futures. Discover how we unified 10+ institutions under one high-performance digital umbrella.",
        url: "https://afsu.dev/projects/alansar",
        siteName: "Muhammed Afsal Ch Portfolio",
        images: [
            {
                url: "/projects/alansar/2.png",
                width: 1200,
                height: 630,
                alt: "Al Ansar Institutional Platform"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Al Ansar Islamic Complex — Digital Transformation",
        description: "Modernizing a 40-year legacy with a modular, high-performance digital ecosystem.",
        images: ["/projects/alansar/2.png"],
    },
};

export default function AlAnsarLayout({ children }) {
    return <>{children}</>;
}
