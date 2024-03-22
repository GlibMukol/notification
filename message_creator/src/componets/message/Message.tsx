import { TMessage } from '../../store/reducers/messages';
import styles from './styles.module.css';



const Message = ({ data }: { data: TMessage }) => {
    const time = new Date(data.date)
    return (
        <div className={`${styles.container} ${styles[`${data.type}`]}`}>
            <div className={styles.body}>{data.value}</div>
            <div className={styles.date_stamp}>{time.toLocaleDateString()}</div>
            <div className={styles.time_stamp}> {time.getHours()}: {time.getMinutes()}</div >
        </div >
    )
}

export default Message