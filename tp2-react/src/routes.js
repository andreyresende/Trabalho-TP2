import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './pages/Main'
import Kwic from './pages/Kwic'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main}/>
      <Route path='/kwic' component={Kwic}/>
    </BrowserRouter>
  )
}