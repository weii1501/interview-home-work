import store from './index'
import { persistStore } from 'redux-persist'

export const persistor = persistStore(store)
