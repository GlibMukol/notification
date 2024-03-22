import styles from './styles.module.css'
import { Message } from '../message/index'
import { useAppSelector } from '../../hooks/redux'
import { TMessage } from '../../store/reducers/messages'


const MessageList = () => {
    const messages = useAppSelector((state) => state.messageReduser.messages);
    return (
        <div className={styles.container}>
            {messages.map((data: TMessage) => <Message data={data} />)}
        </div>
    )
}

export default MessageList