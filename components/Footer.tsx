import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>高效慢活學</h3>
                        <p className={styles.tagline}>
                            找到屬於你的職涯節奏，<br />
                            創造理想的工作與生活平衡
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h4 className={styles.heading}>快速連結</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://www.mankind01.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    電子報訂閱
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mankind01.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    部落格文章
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mankind01.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    聯絡我們
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.links}>
                        <h4 className={styles.heading}>服務項目</h4>
                        <ul>
                            <li>一對一職涯諮詢</li>
                            <li>履歷與面試指導</li>
                            <li>職涯轉換規劃</li>
                            <li>海外工作諮詢</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.contact}>
                        <h4 className={styles.heading}>聯絡資訊</h4>
                        <p>📍 現居盧森堡</p>
                        <p>🌐 服務全球華人</p>
                        <div className={styles.social}>
                            <a
                                href="https://www.mankind01.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="網站"
                            >
                                🌐
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} 高效慢活學. All rights reserved.</p>
                    <p>CNC 認證職涯諮詢服務</p>
                </div>
            </div>
        </footer>
    );
}
