export const metadata = {
    title: "Umra Qafila — Your Spiritual Journey Companion | Muhammed Afsal Ch",
    description: "Umra Qafila provides everything you need for your spiritual journey - from Quran recitation and duas to Madinah guide and dhikr reminders. Experience a seamless and blessed pilgrimage.",
    keywords: ["Umrah App", "Hajj Companion", "Islamic Roadmap", "Quran App", "Spiritual Guide", "Madinah Guide", "Dhikr Reminders"],
    openGraph: {
        title: "Umra Qafila — Your Spiritual Journey Companion",
        description: "Experience a seamless and blessed pilgrimage with our comprehensive spiritual guide. Quran, Duas, Madinah Guide and more.",
        url: "https://afsu.dev/projects/umra-qafila",
        siteName: "Muhammed Afsal Ch Portfolio",
        images: [
            {
                url: "/projects/umra-qafila/1.png",
                width: 1200,
                height: 630,
                alt: "Umra Qafila Landing Page"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Umra Qafila — Your Spiritual Journey Companion",
        description: "Official landing page for the ultimate spiritual companion app for Umrah and Hajj.",
        images: ["/projects/umra-qafila/1.png"],
    },
};

export default function UmraQafilaLayout({ children }) {
    return <>{children}</>;
}
