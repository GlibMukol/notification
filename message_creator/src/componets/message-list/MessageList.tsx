import styles from './styles.module.css'
import { Message } from '../message/index'

const mockMessages = [
    {
        message: 'lorem',
        data: 'datsa',
        variant: 'variants'
    },
    {
        message: 'lorem',
        data: 'datsa',
        variant: 'variants'
    },
    {
        message: 'lorem',
        data: 'datsa',
        variant: 'variants'
    },
    {
        message: 'lorem',
        data: 'datsa',
        variant: 'variants'
    },
]
const MessageList = () => {
    return (
        <div className={styles.container}>
            {mockMessages.map(() => <Message />)}
        </div>
    )
}

export default MessageList