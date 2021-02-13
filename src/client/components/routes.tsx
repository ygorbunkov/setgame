import React, { FC } from 'react'
import { Route } from 'react-router-dom'

import Login from './login'
import MainWindow from './mainWindow'

const Routes: FC = () => {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <MainWindow />
      </Route>
    </>
  )
}

export default Routes
