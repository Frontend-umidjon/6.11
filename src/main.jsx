import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context'
import { initialState, reducer } from './context/reducer'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ContextProvider reducer={reducer}  initialState={initialState}>

        <App />
    </ContextProvider>
    </BrowserRouter>,
)
