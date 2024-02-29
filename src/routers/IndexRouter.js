import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import history from '../utils/history'

export const IndexRouter = () => {
  return (
    <BrowserRouter history={history}>
      <AppRouter />
    </BrowserRouter>
  )
}
