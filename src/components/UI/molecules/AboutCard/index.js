import {Col} from 'antd';

import styles from './AboutCard.module.css';

export default function AboutCard( {title='title', description='description'} ) {
    return (
        <Col sm={24} md={11} lg={5} className={styles.wrapper}>
            <h4>{title}</h4>
            <p>{description}</p>
        </Col>
    )
}