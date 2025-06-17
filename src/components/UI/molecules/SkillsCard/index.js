import { Col } from 'antd';

import styles from './SkillsCard.module.css';

export default function SkillsCard({ title = 'title', skills = [], span = 12, icon = '🛠️' }) {
    return (
        <Col span={span}>
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