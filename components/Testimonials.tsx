'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        name: '林小姐',
        role: '轉職成功者',
        content: '在與諮詢師深入對談後，我終於釐清了自己真正想要的職涯方向。從外商轉換到非營利組織，我找到了更有意義的工作。',
        image: '👩‍💼'
    },
    {
        id: 2,
        name: '陳先生',
        role: '自由工作者',
        content: '透過專業的職涯諮詢，我學會如何在自由工作與生活之間取得平衡。現在的我更加自信，也更清楚自己的價值。',
        image: '👨‍💻'
    },
    {
        id: 3,
        name: '王小姐',
        role: '海外工作者',
        content: '諮詢師的國際視野讓我受益良多。她分享的經驗和建議，幫助我順利適應歐洲的工作環境，實現了海外工作的夢想。',
        image: '🌏'
    },
    {
        id: 4,
        name: '張先生',
        role: '職涯重啟者',
        content: '在職涯低谷時遇見了高效慢活學。透過諮詢，我重新找回對工作的熱情，也學會如何規劃長期的職涯發展。',
        image: '🚀'
    },
    {
        id: 5,
        name: '李小姐',
        role: '創業家',
        content: '從企業轉向創業的過程充滿挑戰。諮詢師的專業建議和鼓勵，讓我更有信心面對未知，成功創立了自己的事業。',
        image: '💡'
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="testimonials" className={`${styles.testimonials} section section-alt`}>
            <div className="container">
                <h2 className={styles.title}>客戶見證</h2>
                <p className={styles.subtitle}>聽聽他們的職涯轉變故事</p>

                <div className={styles.sliderContainer}>
                    <button
                        className={`${styles.navBtn} ${styles.navBtnPrev}`}
                        onClick={goToPrevious}
                        aria-label="上一則"
                    >
                        ←
                    </button>

                    <div className={styles.slider}>
                        <div
                            className={styles.sliderTrack}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className={styles.testimonialCard}>
                                    <div className={styles.avatar}>{testimonial.image}</div>
                                    <p className={styles.content}>「{testimonial.content}」</p>
                                    <div className={styles.author}>
                                        <p className={styles.name}>{testimonial.name}</p>
                                        <p className={styles.role}>{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`${styles.navBtn} ${styles.navBtnNext}`}
                        onClick={goToNext}
                        aria-label="下一則"
                    >
                        →
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`前往第 ${index + 1} 則`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
