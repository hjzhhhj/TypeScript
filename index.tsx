import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Hello from './components/Hello'
import KeyButton from './components/KeyButton'
import Sum from './components/Sum'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<div>
  <App />
  <Hello a = "Hello" b = "world" c = {100} d = {() => {}}/>
  <Sum c = {3} d = {4} />
  </div>)
