import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-phone-input-2/lib/style.css'
import 'sweetalert2/src/sweetalert2.scss'
import SuspenseContainer from './containers/SuspenseContainer.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './services/store.ts'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<SuspenseContainer />}>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </Suspense>
        </BrowserRouter>
    </Provider>,
)
