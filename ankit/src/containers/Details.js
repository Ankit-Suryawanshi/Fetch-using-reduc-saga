import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

export default class Details extends Component {


  render() {
		const id = this.props.match.params.country;
		console.log(id)
		return (
			<div>
				<h1>Details Page</h1>
				<h1>Details Page</h1>
				<h1>Details Page</h1>
				<h1>Details Page</h1>
				<h1>Details Page</h1>
			</div>
		)
  }
}
