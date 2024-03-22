import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './styles.module.css';
import { EMessageType } from '../../consts';
import { useAppDispatch } from '../../hooks/redux';
import { setMessage } from '../../store/reducers/messages';

const MessageInput = () => {

    const dispatch = useAppDispatch();
    const [messageText, setMessageText] = useState('')
    const [messageType, setMessageType] = useState(EMessageType.info);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!messageText) return;
        dispatch(setMessage({
            value: messageText,
            type: messageType,
            date: Date.now()
        }))
        setMessageText('');
    }

    const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setMessageText(e.target.value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.message}>
                    <div className={styles.input}>
                        <textarea onChange={handleChangeMessage} value={messageText}></textarea>
                    </div>
                    <div className={styles.button_container}>
                        <input type="radio" name="type" value="info" id="info" defaultChecked onClick={() => setMessageType(EMessageType.info)} />
                        <label className={styles.info} htmlFor="info"><span>Info</span></label>
                        <input type="radio" name="type" value="warning" id="warning" onClick={() => setMessageType(EMessageType.warning)} />
                        <label className={styles.warning} htmlFor="warning"><span>Warning</span></label>
                        <input type="radio" name="type" value="error" id="error" onClick={() => setMessageType(EMessageType.error)} />
                        <label className={styles.error} htmlFor="error"><span>Error</span></label>
                    </div>
                    <div className={styles.submit}>
                        <button type="submit">SEND</button>
                    </div>

                </div>

            </form>
        </div>

    )
}


export default MessageInput