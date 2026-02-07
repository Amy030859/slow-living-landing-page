'use client';

import { useState } from 'react';
import styles from './Services.module.css';

const services = [
    {
        id: 1,
        title: '一對一職涯諮詢',
        icon: '🎯',
        summary: '深度對談，探索你的職涯可能性',
        details: '透過專業的職涯諮詢工具與方法，深入了解你的價值觀、興趣與能力。我們會一起探索不同的職涯選項，找出最適合你的發展方向，並制定具體的行動計畫。'
    },
    {
        id: 2,
        title: '履歷與面試指導',
        icon: '📝',
        summary: '打造專屬於你的個人品牌',
        details: '協助你打造能夠脫穎而出的履歷與自我介紹。透過模擬面試與回饋，提升你的表達能力與自信心，讓你在求職過程中展現最好的自己。'
    },
    {
        id: 3,
        title: '職涯轉換規劃',
        icon: '🔄',
        summary: '順利轉換跑道，開啟新篇章',
        details: '無論是產業轉換、角色轉型，或是追求工作與生活的平衡，我們都能陪伴你度過轉換期的挑戰。從評估風險到制定策略，提供全方位的支持。'
    },
    {
        id: 4,
        title: '海外工作諮詢',
        icon: '🌍',
        summary: '實現海外工作的夢想',
        details: '結合現居盧森堡的第一手經驗，提供海外求職、文化適應、工作簽證等實用建議。協助你做好充分準備，順利展開國際職涯。'
    }
];

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
        setExpandedId(null);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
        setExpandedId(null);
    };

    const toggleDetails = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="services" className={`${styles.services} section`}>
            <div className="container">
                <h2 className={styles.title}>核心服務</h2>
                <p className={styles.subtitle}>量身打造的職涯諮詢方案</p>

                <div className={styles.sliderContainer}>
                    <button
                        className={`${styles.navBtn} ${styles.navBtnPrev}`}
                        onClick={goToPrevious}
                        aria-label="上一個"
                    >
                        ←
                    </button>

                    <div className={styles.slider}>
                        <div
                            className={styles.sliderTrack}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {services.map((service) => (
                                <div key={service.id} className={styles.serviceCard}>
                                    <div className={styles.icon}>{service.icon}</div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.summary}>{service.summary}</p>

                                    <button
                                        className={styles.detailsBtn}
                                        onClick={() => toggleDetails(service.id)}
                                    >
                                        {expandedId === service.id ? '收起' : '了解更多'}
                                    </button>

                                    {expandedId === service.id && (
                                        <div className={styles.details}>
                                            <p>{service.details}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`${styles.navBtn} ${styles.navBtnNext}`}
                        onClick={goToNext}
                        aria-label="下一個"
                    >
                        →
                    </button>
                </div>

                <div className={styles.dots}>
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                setExpandedId(null);
                            }}
                            aria-label={`前往第 ${index + 1} 個服務`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
