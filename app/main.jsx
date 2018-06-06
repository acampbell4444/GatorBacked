'use strict'

import 'babel-polyfill'
import React from 'react'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import NavBar from './containers/navContainer'
import Home from './containers/homeContainer'
import RainHarvest from './containers/rainHarvestContainer'

import Remodeling from './components/Remodeling'
import Landscaping from './components/Landscaping'
import Contact from './components/Contact'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import BoxOfRainModal from './components/BoxOfRainModal'

import { updateCurrentRoute } from './reducers/navBar'


const GatorBacked = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <NavBar user={ user }/>
      {children}
      <Footer/>
    </div>
)

const onHomeEnter = () => store.dispatch(updateCurrentRoute('home'))
const onRainHarvestEnter = () => store.dispatch(updateCurrentRoute('rainHarvest'))
const onRemodelingEnter = () => store.dispatch(updateCurrentRoute('remodeling'))
const onLandscapingEnter = () => store.dispatch(updateCurrentRoute('landscaping'))
const onContactEnter = () => store.dispatch(updateCurrentRoute('contact'))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={GatorBacked}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} onEnter={onHomeEnter}/>
        <Route path="/rainHarvest" component={RainHarvest} onEnter={onRainHarvestEnter}/>
        <Route path="/remodeling" component={Remodeling} onEnter={onRemodelingEnter}/>
        <Route path="/landscaping" component={Landscaping} onEnter={onLandscapingEnter}/>
        <Route path="/contact" component={Contact} onEnter={onContactEnter}/>
        <Route path="/boxOfRain" component={BoxOfRainModal} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
