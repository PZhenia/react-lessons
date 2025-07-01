import { Row, Col } from 'antd';
import ProjectCard from '../../components/UI/molecules/ProjectCard';

import cover1 from '../../assets/card-backgrounds/1.jpg';
import cover2 from '../../assets/card-backgrounds/2.jpg';
import cover3 from '../../assets/card-backgrounds/3.jpg';

import styles from './projects.module.css';

export default function Projects() {
    return (
        <div className={styles.projectsPage}>
            <h2 className={styles.pageTitle}>Мої Проєкти</h2>
            <div className={styles.rowWrapper}>
                <Row gutter={[40, 40]} className={styles.projectsRow}>
                    <Col xs={24} sm={12} lg={8}>
                        <ProjectCard
                            title='Greenshop'
                            description='Макет інтернет-магазину для продажу кімнатних рослин. Під час
                                розробки я відточувала навички верстки з використанням HTML та CSS, працювала
                                з адаптивним дизайном і побудовою компонувальної структури сторінки. У фокусі
                                були: семантична розмітка, позиціонування елементів, гнучкі сітки та побудова
                                UI за фіксованим макетом.'
                            cover={{
                                alt: 'frontend-background',
                                src: cover1,
                            }}
                            content='https://github.com/PZhenia/greenshop'
                        />
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <ProjectCard
                            title='Hlegal'
                            description='Сайт, створений як дипломна робота курсу Frontend Basic. Верстка
                                реалізована з використанням Bootstrap. Також я вперше інтегрувала інтерактивні
                                елементи за допомогою JavaScript — наприклад, слайдер-карусель. Проєкт навчив
                                мене поєднувати стилізацію, бібліотеки та базову логіку у фронтенді.'
                            cover={{
                                alt: 'frontend-background',
                                src: cover2,
                            }}
                            content='https://github.com/PZhenia/hlegal'
                        />
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <ProjectCard
                            title='Diploma'
                            description='Повноцінний SPA-сайт для бронювання готелів, який я створила в
                                межах курсу Frontend Pro. Проєкт охоплює як frontend, так і backend частину.
                                У фронтенді використовувала React, Vite, Redux Toolkit, React Router, Material UI.
                                Реалізовано авторизацію, фільтрацію, маршрутизацію та інтеграцію з бекендом.
                                Серверна частина побудована на Node.js з Express. Цей проєкт став підсумком моїх
                                знань і показав, як застосовувати сучасний стек технологій у реальному застосунку.'
                            cover={{
                                alt: 'frontend-background',
                                src: cover3,
                            }}
                            content='https://github.com/PZhenia/diploma'
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}