import styles from './styles.module.css';

const data = new Date();


const Message = () => {

    return (
        <div className={`${styles.container} ${styles.info}`}>
            <div className={styles.body}>Body</div>
            <div className={styles.date_stamp}>{data.toLocaleDateString()}</div>
            <div className={styles.time_stamp}> {data.getHours()}: {data.getMinutes()}</div >
        </div >
    )
}

export default Message