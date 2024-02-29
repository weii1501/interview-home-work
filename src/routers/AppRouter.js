import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { PATH } from '../constants/paths'
import Loading from '../components/Loading'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
export default function AppRouter () {
  return (
    <Routes>
      <Route
        exact
        path={PATH.HOME}
        element={
          <Suspense fallback={<Loading />}>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </Suspense>
        }
      />

      <Route
        exact
        path='/:id'
        element={
          <Suspense fallback={<Loading />}>
            <MainLayout>
              <PostPage />
            </MainLayout>
          </Suspense>
        }
      />
    </Routes>
  )
}
