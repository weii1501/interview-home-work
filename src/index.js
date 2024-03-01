import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/custom.scss'
import reportWebVitals from './reportWebVitals'
import { IndexRouter } from './routers/IndexRouter'
import { Provider } from 'react-redux'
import '@babel/polyfill'
// const store = configureStore(initialState, history)

import { PersistGate } from 'redux-persist/integration/react'
// import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import { persistor } from './store/persistor'
import { QueryClient, QueryClientProvider } from 'react-query'

// const initialState = {}
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
// const MOUNT_NODE = document.getElementById('root')
root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <IndexRouter />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install() // eslint-disable-line global-require
// }
