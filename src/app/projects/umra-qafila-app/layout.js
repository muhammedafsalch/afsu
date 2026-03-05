export const metadata = {
    title: "Umra Qafila Mobile App — Spiritual Companion | Muhammed Afsal Ch",
    description: "The premier mobile spiritual companion for Umrah, offering Islamic prayers, Dikr, Dua, and popular Islamic mapped locations. Built with React Native and Expo.",
    keywords: ["Islamic Mobile App", "React Native", "Expo", "Google Maps API", "Umrah App", "Pilgrimage Guide", "Spirituality"],
    openGraph: {
        title: "Umra Qafila — Premier Spiritual Mobile App",
        description: "Experience the complete spiritual guide right in the palm of your hand. Highly rated and loved by pilgrims worldwide on both iOS and Android.",
        url: "https://afsu.dev/projects/umra-qafila-app",
        siteName: "Muhammed Afsal Ch Portfolio",
        images: [
            {
                url: "/projects/umra-qafila/app/1.jpeg",
                width: 1200,
                height: 630,
                alt: "Umra Qafila Mobile App Interface"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Umra Qafila — Premier Spiritual Mobile App",
        description: "Experience the complete spiritual guide right in the palm of your hand. iOS and Android solutions.",
        images: ["/projects/umra-qafila/app/1.jpeg"],
    },
};

export default function UmraQafilaAppLayout({ children }) {
    return <>{children}</>;
}
