import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        找到屬於你的<br />
                        高效慢活之道
                    </h1>
                    <p className={styles.subtitle}>
                        專業職涯諮詢服務，陪伴你探索理想的工作與生活平衡。
                        <br />
                        由現居盧森堡的 CNC 認證職涯諮詢師為你提供個人化指引。
                    </p>
                    <div className={styles.cta}>
                        <a
                            href="https://www.mankind01.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            訂閱電子報
                        </a>
                        <a
                            href="https://www.mankind01.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            探索更多
                        </a>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.visualPlaceholder}>
                        <p>專業職涯諮詢</p>
                        <p>🌍</p>
                        <p>現居盧森堡</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
