import React, { FC, Suspense } from 'react'
import { Route } from 'react-router-dom'

import Spinner from './spinner'

const Login = React.lazy(() => import('./login'))
const MainWindow = React.lazy(() => import('./mainWindow'))

const Routes: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <MainWindow />
      </Route>
    </Suspense>
  )
}

export default Routes
