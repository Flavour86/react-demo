import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Root from '../root'
import home from 'modules/home'
import list from 'modules/list'
import detail from 'modules/detail'
//const asyncLoad = component => (location, cb) => {
//  require(`${component}`)(function (c) {
//    cb(null, c)
//  })
//}

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={home} />
    <Route path="list" component={list} />
    <Route path="detail" component={detail} />
  </Route>
)

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory} routes={routes} />
    )
  }
}
