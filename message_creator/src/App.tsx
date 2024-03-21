import './App.css'
import { MessageInput, MessageList } from './componets'

function App() {
  return (
    <div className='container'>
      <div className='message_container'>
        <MessageList />
      </div>
      <hr />
      <div className='message_input_container'>
        <MessageInput />
      </div>
    </div>
  )
}

export default App
