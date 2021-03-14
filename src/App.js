import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import menu from './data.js'

import Navbar from './components/Navbar'
import Error from './components/Error'
import Menu from './components/Menu'
import About from './components/About'
import MenuItem from './components/MenuItem'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route exact path='/'>
              <Menu menu={menu} />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/:itemID'>
              <MenuItem menu={menu} />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default App
