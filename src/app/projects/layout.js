export const metadata = {
    title: "Projects & Case Studies | Muhammed Afsal Ch — Full Stack Architect",
    description: "Explore a curated gallery of high-performance digital solutions across Fintech, E-commerce, and Enterprise sectors. Engineered with Next.js, React Native, and modern tech stacks.",
    keywords: ["Case Studies", "Digital Portfolio", "Web Development Projects", "Mobile App Development", "Muhammed Afsal Ch", "UI Architecture"],
    openGraph: {
        title: "Selected Works — Muhammed Afsal Ch Portfolio",
        description: "Transforming complex challenges into elegant digital experiences. Discover my latest projects.",
        url: "https://afsu.dev/projects",
        siteName: "Muhammed Afsal Ch Portfolio",
        images: [
            {
                url: "/projects/afsal.png",
                width: 1200,
                height: 630,
                alt: "Muhammed Afsal Ch Selected Works"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Selected Works — Muhammed Afsal Ch Portfolio",
        description: "Explore the technical expertise and creative solutions in my project gallery.",
        images: ["/projects/afsal.png"],
    },
};

export default function ProjectsLayout({ children }) {
    return <>{children}</>;
}
