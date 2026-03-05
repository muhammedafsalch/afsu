export const metadata = {
    title: "Samastha Media Gallery — High-Scale Portal | Muhammed Afsal Ch",
    description: "Official media hub for the Samastha Centenary International Conference. Engineered for global HD media streaming, super-fast file hosting and real-time news coverage.",
    keywords: ["Media Portal", "Live Streaming", "PHP Backend", "HD Gallery", "High-Concurrency", "Next.js", "Server-Side Optimization"],
    openGraph: {
        title: "Samastha Media Gallery — High-Scale Portal",
        description: "Official Gallery & Live News for the International Conference. Near-zero latency streaming and HD media sharing globally.",
        url: "https://afsu.dev/projects/media_samastha",
        siteName: "Muhammed Afsal Ch Portfolio",
        images: [
            {
                url: "/projects/media_samastha/4.png",
                width: 1200,
                height: 630,
                alt: "Samastha Media Gallery Showcase"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Samastha Media Gallery — High-Scale Portal",
        description: "Global-scale media infrastructure for one of India's largest international conferences.",
        images: ["/projects/media_samastha/4.png"],
    },
};

export default function MediaSamasthaLayout({ children }) {
    return <>{children}</>;
}
