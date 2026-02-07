import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`${styles.about} section`}>
            <div className="container">
                <h2 className={styles.title}>為什麼選擇高效慢活學？</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>🎯 量身打造</h3>
                        <p>
                            每個人的職涯旅程都是獨一無二的。我們提供個人化的諮詢服務，
                            深入了解你的背景、目標與價值觀，為你量身打造最適合的發展方向。
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>🌏 國際視野</h3>
                        <p>
                            擁有非營利、外商、幼教與自由工作等多元背景，
                            結合現居盧森堡的國際經驗，為你帶來更寬廣的職涯視角。
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>💡 專業認證</h3>
                        <p>
                            持有 CNC 認證，運用專業的職涯諮詢方法與工具，
                            協助你釐清方向、突破瓶頸，找到屬於你的高效慢活之道。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
