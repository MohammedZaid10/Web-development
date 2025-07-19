import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from "./redux/store.js"
// added
import { Provider } from 'react-redux'
// added

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* added */}
      <App />
    </Provider> {/* added */}
    
  </StrictMode>,
)
