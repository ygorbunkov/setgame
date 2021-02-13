import React, { FC } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Routes from './routes'

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  )
}

export default App
