import { Card } from "antd";
import styles from "./ProjectCard.module.css";

const { Meta } = Card;

export default function ProjectCard({ title='title', description='description', cover, content }) {
    return (
        <Card
            hoverable
            className={styles.projectCard}
            cover={
                cover ? (
                    <div className={styles.coverContainer}>
                        <img
                            alt={cover.alt}
                            src={cover.src}
                            className={styles.coverImg}
                        />
                        <div className={styles.overlay}>
                            <a
                                href={content}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Перейти до коду
                            </a>
                        </div>
                    </div>
                ) : (
                    <div>No Image</div>
                )
            }
        >
            <Meta
                title={<h3 className={styles.cardTitle}>{title}</h3>}
                description={<p className={styles.cardDescription}>{description}</p>}
            />
        </Card>
    );
}