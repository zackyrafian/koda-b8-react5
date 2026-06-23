import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import ResultSurvey from './pages/result-survey.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { store } from './redux/store.js'
const router = createBrowserRouter([ 
  {
    path: '/survey',
    element: <App/>
  },
  { 
    path: '/result-survery', 
    element: <ResultSurvey/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
