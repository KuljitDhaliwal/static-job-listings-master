import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JobFilterReducer from './context/JobFilterProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobFilterReducer>
      <App />
    </JobFilterReducer>
  </StrictMode>,
)
