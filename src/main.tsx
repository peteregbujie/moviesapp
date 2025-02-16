
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NuqsAdapter } from 'nuqs/adapters/react'

createRoot(document.getElementById('root')!).render(
  <NuqsAdapter>
    <App />
  </NuqsAdapter>
)