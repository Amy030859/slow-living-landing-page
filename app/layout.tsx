import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: '高效慢活學 | 職涯諮詢 | 現居盧森堡的 CNC 認證諮詢師',
    description: '專業職涯諮詢服務，由現居盧森堡的 CNC 認證職涯諮詢師提供。擁有非營利、外商、幼教與自由工作背景，協助您找到理想的職涯方向。',
    keywords: ['職涯諮詢', 'CNC 認證', '盧森堡', '高效慢活學', '職業生涯規劃', '職涯發展'],
    authors: [{ name: '高效慢活學' }],
    openGraph: {
        title: '高效慢活學 | 職涯諮詢',
        description: '專業職涯諮詢服務，由現居盧森堡的 CNC 認證職涯諮詢師提供',
        url: 'https://www.mankind01.com',
        siteName: '高效慢活學',
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '高效慢活學 | 職涯諮詢',
        description: '專業職涯諮詢服務，由現居盧森堡的 CNC 認證職涯諮詢師提供',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-TW">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ProfessionalService',
                            name: '高效慢活學',
                            description: '專業職涯諮詢服務，由現居盧森堡的 CNC 認證職涯諮詢師提供',
                            url: 'https://www.mankind01.com',
                            telephone: '',
                            address: {
                                '@type': 'PostalAddress',
                                addressCountry: 'LU',
                                addressLocality: '盧森堡',
                            },
                            priceRange: '$$',
                            areaServed: ['TW', 'LU', 'Global'],
                            serviceType: ['職涯諮詢', '職業生涯規劃', '職涯發展'],
                            provider: {
                                '@type': 'Person',
                                name: '高效慢活學',
                                jobTitle: 'CNC 認證職涯諮詢師',
                                description: '擁有非營利、外商、幼教與自由工作背景的職涯諮詢師，現居盧森堡',
                            },
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
