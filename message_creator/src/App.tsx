import './App.css'
import { MessageInput, MessageList } from './componets'
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>

        <div className='message_container'>
          <MessageList />
        </div>
        <hr />
        <div className='message_input_container'>
          <MessageInput />
        </div>
      </div>
    </Provider>
  )
}

export default App
