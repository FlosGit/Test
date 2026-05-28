import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import posthog from 'posthog-js'
posthog.init('phc_qmLvjZawzLuEnR5ns5eFKXSFiSD5AX4y87LvELP9nqB5', { api_host: 'https://us.i.posthog.com' })
posthog.register({ $host: 'test-iota-drab-18.vercel.app' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
