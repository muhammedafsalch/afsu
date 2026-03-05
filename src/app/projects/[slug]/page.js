import ProjectContent from './ProjectContent';

const projectData = {
    aicamal: {
        title: 'AIC Amal - Philanthropy Ecosystem',
        category: 'FinTech / Social Impact',
        description: 'A sophisticated digital infrastructure revolutionizing charitable giving through real-time transparency and a seamless multi-platform experience.',
        image: '/projects/aicamal/web.png',
        liveLink: 'https://aicamal.app/',
        webScreenshots: [
            '/projects/aicamal/web.png',
            '/projects/aicamal/web2.png',
            '/projects/aicamal/web3.png'
        ],
        appScreenshots: [
            '/projects/aicamal/app/1.jpeg',
            '/projects/aicamal/app/2.jpeg',
            '/projects/aicamal/app/3.jpeg',
            '/projects/aicamal/app/4.jpeg',
            '/projects/aicamal/app/5.jpeg',
            '/projects/aicamal/app/6.jpeg',
            '/projects/aicamal/app/7.jpeg',
            '/projects/aicamal/app/8.jpeg',
            '/projects/aicamal/app/9.jpeg',
            '/projects/aicamal/app/10.jpeg',
            '/projects/aicamal/app/11.jpeg',
            '/projects/aicamal/app/12.jpeg',
            '/projects/aicamal/app/13.jpeg',
            '/projects/aicamal/app/14.jpeg'
        ],
        technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'Expo', 'Supabase', 'AWS'],
        mobileApp: {
            playStore: 'https://play.google.com/store/apps/details?id=com.aicamal.app',
            downloads: '15,000+',
            rating: '4.8★'
        },
        features: [
            'Smart Philanthropy Engine for Zakat & Sadaqah',
            'Dynamic Campaign-Linked Photo Frame Generator',
            'Subscription-Based Micro-Donation Channels',
            'Integrated High-Volume Collection Portal',
            'Administrative Oversight & Volunteer Hub',
            'Native iOS & Android Mobile Ecosystem'
        ],
        challenges: 'Architecting a secure, high-concurrency payment gateway capable of handling exponential spikes during peak donation seasons while maintaining absolute data integrity.',
        outcome: 'Deployed a resilient, globally accessible platform that has digitalized the trust-building process between donors and the organization.',
        client: 'Akode Islamic Centre',
        duration: '4 Months',
        longDescription: 'AIC Amal represents a paradigm shift in how local communities engage with philanthropy. As the lead architect, I engineered a specialized stack using React Native and Next.js to bridge the gap between traditional giving and modern digital convenience. The system doesn\'t just process payments; it manages a complex web of recurring sponsorships, time-sensitive campaigns, and administrative workflows that keep the organization running efficiently at scale.',
        challengesList: [
            'Developing a low-latency gateway for multi-tier donation logic',
            'Synchronizing state across web, iOS, and Android platforms',
            'Implementing cryptographic-level security for financial data',
            'Optimizing real-time tracking for complex fundraising goals'
        ],
        solutionsList: [
            'Custom-built Razorpay middleware for granular transaction control',
            'Cross-platform React Native architecture with shared business logic',
            'Multi-layer encryption and secure webhook validation',
            'Server-side rendering with Next.js for instant dashboard updates'
        ],
        results: [
            { label: 'Growth', value: '315%' },
            { label: 'Funding', value: '₹75L+' },
            { label: 'Process Speed', value: '85%' },
            { label: 'Community', value: '15,000+' }
        ]
    },
    samastha: {
        title: 'Samastha Centenary',
        category: 'App & Web Platform',
        description: 'The official app and web platform for the Samastha Centenary — celebrating 100 years of the International Conference by Samastha Kerala Jamiyyathul Ulama (1926–2026). Serving 50,000+ users worldwide.',
        image: '/projects/samastha/1.png',
        liveLink: 'https://centenary.samastha.info/',
        client: 'Samastha Kerala Jamiyyathul Ulama',
        duration: '6 Months',
        webScreenshots: [
            '/projects/samastha/1.png',
            '/projects/samastha/2.png',
            '/projects/samastha/3.png',
            '/projects/samastha/4.png',
            '/projects/samastha/5.png',
            '/projects/samastha/6.png',
            '/projects/samastha/7.png',
            '/projects/samastha/8.png',
            '/projects/samastha/9.png'
        ],
        appScreenshots: [
            '/projects/samastha/app/0.png',
            '/projects/samastha/app/1.jpeg',
            '/projects/samastha/app/2.jpeg',
            '/projects/samastha/app/3.jpeg',
            '/projects/samastha/app/4.jpeg',
            '/projects/samastha/app/5.jpeg',
            '/projects/samastha/app/6.jpeg',
            '/projects/samastha/app/7.jpeg',
            '/projects/samastha/app/8.jpeg',
            '/projects/samastha/app/9.jpeg',
            '/projects/samastha/app/10.jpeg',
            '/projects/samastha/app/11.jpeg',
            '/projects/samastha/app/12.png',
            '/projects/samastha/app/13.jpeg'
        ],
        mobileApp: {
            playStore: 'https://play.google.com/store/apps/details?id=com.samastha.centenary',
            appStore: 'https://apps.apple.com/us/app/samastha-centenary/id6743690865',
            rating: '4.9★',
            downloads: '50K+',
            reviews: '350+'
        },
        technologies: ['React Native', 'Next.js', 'Express.js', 'Firebase', 'Expo', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        features: [
            'Firebase Push Notifications for real-time event updates',
            'User-uploaded photos, updates & community sharing',
            'Live Anniversary Event updates with live locations',
            'Souvenir Booking & digital ticketing system',
            'Daily Quiz with automated winner selection',
            'Live Quiz with real-time winner marking & question management',
            'Digital Library with downloadable files & shared resources',
            'Podcast streaming with background audio playback',
            '33,333 Camp Member Registration & login system',
            'Camp Member dashboard with event schedules',
            'World Record Samastha Centenary Camp Registration',
            'Expo Ticket Registration for all events',
            'Kuniyil Grand Event (Feb 4–8, 2026) full coverage',
            'Real-time News, Gallery & announcements',
            'Location-based event discovery near you'
        ],
        longDescription: 'The Samastha Centenary platform is the official digital ecosystem built to commemorate 100 years of Samastha Kerala Jamiyyathul Ulama (1926–2026). As the lead developer, I architected both the Next.js web platform and React Native mobile app (Android & iOS) to serve as the central hub for this historic milestone. The platform handles everything — from the massive 33,333-member camp registration system and Expo ticket booking at Kuniyil (Feb 4–8, 2026), to live quiz automation with real-time winner selection, souvenir booking, podcast streaming, and a community-driven photo sharing ecosystem. With Firebase Cloud Messaging powering instant push notifications and Express.js APIs handling high-concurrency requests from 50,000+ users, this platform became the digital heartbeat of one of India\'s largest Islamic gatherings.',
        challengesList: [
            'Handling 50,000+ concurrent users during peak live events',
            'Building a real-time quiz engine with instant winner selection',
            'Managing 33,333 camp member registrations with login authentication',
            'Delivering push notifications reliably to massive user base',
            'Streaming podcasts and media to global audience with low latency',
            'Coordinating live event updates across web and mobile platforms'
        ],
        solutionsList: [
            'Scalable Express.js API with Vercel edge deployment and caching',
            'WebSocket-powered live quiz system with automated fairness algorithms',
            'Firebase Auth integration with custom camp member verification flow',
            'Firebase Cloud Messaging with topic-based segmentation for targeted notifications',
            'CDN-optimized media pipeline with lazy loading and background playback',
            'Real-time sync architecture ensuring instant updates across all platforms'
        ],
        results: [
            { label: 'App Downloads', value: '50K+' },
            { label: 'App Rating', value: '4.9★' },
            { label: 'Camp Members', value: '33,333' },
            { label: 'Daily Users', value: '25K+' }
        ]
    },
    alnasr: {
        title: 'Al Nasr - Al Ansar Donation App',
        category: 'App & Web Platform',
        description: 'Official digital platform for Al-Ansar Muslim Welfare Board, supporting 250+ students free of cost through secure education and orphan care donations.',
        image: '/projects/alnasr/2.png',
        liveLink: 'https://alnasr.info/',
        client: 'Al-Ansar Muslim Welfare Board',
        duration: '3 Months',
        webScreenshots: [
            '/projects/alnasr/1.png',
            '/projects/alnasr/2.png',
            '/projects/alnasr/3.png',
            '/projects/alnasr/4.png',
            '/projects/alnasr/5.png',
            '/projects/alnasr/6.png',
            '/projects/alnasr/7.png'
        ],
        appScreenshots: [
            '/projects/alnasr/app/1.jpeg',
            '/projects/alnasr/app/2.jpeg',
            '/projects/alnasr/app/3.jpeg',
            '/projects/alnasr/app/4.jpeg',
            '/projects/alnasr/app/5.jpeg',
            '/projects/alnasr/app/6.jpeg',
            '/projects/alnasr/app/7.jpeg',
            '/projects/alnasr/app/8.jpeg'
        ],
        mobileApp: {
            playStore: 'https://play.google.com/store/apps/details?id=com.alnasr.app',
            downloads: '100+',
            rating: '4.9★'
        },
        technologies: ['React Native', 'Next.js', 'Firebase', 'Razorpay', 'Expo', 'Node.js', 'Tailwind CSS'],
        features: [
            'Secure voluntary contributions for education & orphan care',
            'Easy & Secure Payments: UPI, Credit/Debit Cards, Net Banking',
            'Instant Digital Receipts: immediate download & transaction references',
            'Donation History: full transparency of past contributions',
            'Automated 80G Tax Exemption receipt generation',
            'Zero Distractions: ad-free, secure-first social impact platform',
            'Real-time student sponsorship status tracking',
            'Native iOS & Android experience via Expo/React Native'
        ],
        longDescription: 'Al Nasr is a critical digital infrastructure for the Al-Ansar Muslim Welfare Board ( Mundamparamba), an organization serving society since 1984. Currently supporting over 250 residential students with free education, food, and healthcare, the organization needed a modern, transparent way to bridge the gap with its global supporters. I architected a unified system comprising a React Native mobile app and a Next.js web portal. The platform ensures direct fund transfers, absolute financial transparency, and a friction-less experience for donors contributing to social welfare and education.',
        challengesList: [
            'Building a highly secure transaction flow for voluntary donations',
            'Implementing real-time PDF receipt generation for 80G compliance',
            'Managing residential student data for specific sponsorship programs',
            'Ensuring zero-latency payment verification across UPI providers'
        ],
        solutionsList: [
            'Integrated Razorpay multi-order flow with secure webhook validation',
            'Cloud-based PDF generation engine for instant downloadable receipts',
            'Firebase Firestore for real-time document sync and historical data',
            'React Native optimized payment bridge for seamless mobile checkout'
        ],
        results: [
            { label: 'Active Donors', value: '1,000+' },
            { label: 'Student Impact', value: '250+' },
            { label: 'Platform Trust', value: '100%' },
            { label: 'Transaction Speed', value: 'Instant' }
        ]
    }
};

export async function generateMetadata({ params }) {
    const slug = (await params).slug;
    const project = projectData[slug];

    if (!project) {
        return {
            title: "Project Not Found | Muhammed Afsal Ch",
        };
    }

    return {
        title: `${project.title} | Case Study — Muhammed Afsal Ch`,
        description: project.description,
        keywords: project.technologies.join(', '),
        openGraph: {
            title: `${project.title} | Case Study — Muhammed Afsal Ch`,
            description: project.description,
            url: `https://afsu.dev/projects/${slug}`,
            images: [
                {
                    url: project.image,
                    alt: project.title,
                }
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: [project.image],
        }
    };
}

export default async function Page({ params }) {
    const slug = (await params).slug;
    const data = projectData[slug];

    if (!data) return <div>Project not found</div>;

    return <ProjectContent data={data} slug={slug} />;
}
