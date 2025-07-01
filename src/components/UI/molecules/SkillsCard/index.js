import { Col } from 'antd';

import styles from './SkillsCard.module.css';

export default function SkillsCard({ title = 'title', skills = [], icon = '🛠️' }) {
    return (
        <Col xs={24} lg={12}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <span className={styles.icon}>{icon}</span>
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <ul className={styles.skillsList}>
                    {skills.map((skill, index) => (
                        <li key={index} className={styles.skillItem}>
                            <span className={styles.skillDot}>•</span>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </Col>
    );
}