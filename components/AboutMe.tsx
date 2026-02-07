import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section id="about-me" className={`${styles.aboutMe} section section-alt`}>
            <div className="container">
                <h2 className={styles.title}>關於我</h2>

                <div className={styles.content}>
                    <div className={styles.profile}>
                        <div className={styles.avatar}>👋</div>
                        <h3 className={styles.name}>職涯諮詢師</h3>
                        <p className={styles.credential}>CNC 認證職涯諮詢師</p>
                        <p className={styles.location}>📍 現居盧森堡</p>
                    </div>

                    <div className={styles.bio}>
                        <p>
                            你好！我是一位擁有 <strong>CNC 認證</strong>的職涯諮詢師，
                            目前定居在充滿多元文化的盧森堡。
                        </p>

                        <p>
                            我的職涯經歷相當豐富多元，曾在<strong>非營利組織</strong>、
                            <strong>外商公司</strong>、<strong>幼教產業</strong>工作，
                            也擁有<strong>自由工作者</strong>的經驗。
                            這些不同領域的歷練，讓我深刻體會到每個人對職涯的追求都是獨特的。
                        </p>

                        <p>
                            我相信，<strong>高效</strong>不代表忙碌，而是找到最適合自己的節奏；
                            <strong>慢活</strong>不是消極，而是有意識地選擇生活方式。
                            透過職涯諮詢，我希望能陪伴你找到屬於自己的高效慢活之道。
                        </p>

                        <div className={styles.highlights}>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightIcon}>🎓</span>
                                <span>CNC 認證職涯諮詢師</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightIcon}>💼</span>
                                <span>多元產業背景</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightIcon}>🌏</span>
                                <span>國際工作經驗</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightIcon}>✨</span>
                                <span>高效慢活倡導者</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
