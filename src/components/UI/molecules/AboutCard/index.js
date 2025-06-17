import {Col} from 'antd';

import styles from './AboutCard.module.css';

export default function AboutCard( {title='title', description='description', span=4} ) {
    return (
        <Col span={span} className={styles.wrapper}>
            <h4>{title}</h4>
            <p>{description}</p>
        </Col>
    )
}