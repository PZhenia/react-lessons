import { Col, Row, Divider } from 'antd';
import AboutCard from '../../components/UI/molecules/AboutCard';

import photo from '../../assets/photo.png';

import styles from './about.module.css';

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundShape}></div>
                <Row align={'middle'} className={styles.introRow}>
                    <Col span={24} className={styles.greetingContainer}>
                        <div className={styles.greeting}>
                            <div className={styles.photoContainer}>
                                <div className={styles.photoBgShape}></div>
                                <div className={styles.photoDecor1}></div>
                                <div className={styles.photoDecor2}></div>
                                <img src={photo} className={styles.photo} alt='portrait' />
                            </div>
                            <div className={styles.greetingText}>
                                👋 Привіт!<br/><br/>
                                Мене звати Євгенія — я захоплююсь фронтенд-розробкою. Мені цікаво поєднувати логіку з дизайном,
                                розв'язувати задачі і постійно вчитись чомусь новому. На цьому сайті я розповідаю трохи
                                більше про себе, свій досвід та захоплення!
                            </div>
                        </div>
                    </Col>
                </Row>

                <Divider className={styles.divider} />

                <Row justify='space-around'>
                    <AboutCard
                        title='🎓 Освіта'
                        description="Я навчаюся на спеціальності «Комп'ютерні науки» в КПІ, на кафедрі системного
                                проєктування. Зараз завершую другий курс. Паралельно проходила курс
                                Frontend Basic у школі Hillel, де ознайомилася з базовими принципами веб-розробки, а
                                нині навчаюсь на курсі Frontend Pro, який орієнтований на роботу з реальними проєктами
                                та сучасними фреймворками."
                        span={5}
                    />
                    <AboutCard
                        title='💼 Досвід'
                        description="Хоча я ще не маю комерційного досвіду роботи, мені вдалося взяти участь у кількох
                                навчальних проєктах. Один із найцікавіших — командна курсова робота з ООП, під час якої
                                ми створювали повноцінний сайт для тестування знань. Я відповідала за фронтенд-частину
                                проєкту, використовуючи React, та працювала з бекендом на Express. Цей досвід навчив
                                мене співпрацювати в команді, планувати структуру застосунку, працювати з API та
                                вирішувати нетривіальні задачі у реальному коді."
                        span={5}
                    />
                    <AboutCard
                        title='✨ Про мене'
                        description='Я відповідальна, допитлива та відкрита до нового. Легко знаходжу спільну мову з людьми
                                й люблю працювати в команді, де можна обмінюватися ідеями та знаннями. У своїй роботі
                                намагаюся бути уважною до деталей і водночас не забувати про загальну картину. Мені
                                цікаво поєднувати технічну складову з креативністю, саме тому мене так захоплює
                                фронтенд — це простір, де логіка зустрічається з дизайном.'
                        span={5}
                    />
                    <AboutCard
                        title='🎈 Хобі'
                        description='У вільний час я люблю займатися волейболом, подорожувати, кататися на велосипеді або
                                просто активно проводити час із друзями. Також мені подобається малювати, грати в
                                настільні ігри, шахи, читати книжки та відкривати для себе щось нове. Хобі допомагають
                                мені підтримувати баланс між навчанням, роботою над собою та відпочинком.'
                        span={5}
                    />
                </Row>
            </div>
        </>
    )
}