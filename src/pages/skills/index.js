import { Row } from 'antd';
import SkillsCard from '../../components/UI/molecules/SkillsCard';

import styles from './skills.module.css';

export default function Skills() {
    return (
        <div className={styles.skillsPage}>
            <h2 className={styles.pageTitle}>Мої Навички</h2>
            <div className={styles.rowWrapper}>
                <Row gutter={[40, 40]} className={styles.skillsRow}>
                    <SkillsCard
                        title='Hard Skills'
                        skills={[
                            'JavaScript (ES6+)',
                            'React',
                            'HTML5',
                            'CSS3 / SCSS',
                            'REST API',
                            'Git / GitHub',
                            'React Router',
                            'Express.js (базово)',
                            'Webpack / Vite',
                            'Responsive / Adaptive Design'
                        ]}
                        icon='💻'
                    />
                    <SkillsCard
                        title='Soft Skills'
                        skills={[
                            'Командна робота',
                            'Критичне мислення',
                            'Самоорганізація',
                            'Уважність до деталей',
                            'Готовність вчитися',
                            'Тайм-менеджмент',
                            'Комунікабельність',
                            'Вирішення проблем',
                            'Адаптивність',
                            'Відкритість до фідбеку'
                        ]}
                        icon='🧠'
                    />
                </Row>
            </div>
        </div>
    )
}
