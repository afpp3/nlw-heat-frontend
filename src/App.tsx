import { useContext } from 'react'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { AuthContext } from './contexts/AuthContext'

import styles from './App.module.scss'
import { SendMessageForm } from './components/SendMessageForm'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ''
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}

export default App
