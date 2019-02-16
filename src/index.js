import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route , Redirect} from "react-router-dom";
import './index.css';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import axios from 'axios';

import Signin from './pages/Signin/signin.jsx';
import Login from './pages/Login/Login.jsx';
import Terran from './pages/Terran/Terran.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Fund from './pages/Fund/Fund.jsx';
import Details from './pages/Details/Details.jsx';
import Xshenfen from './components/Xshenfen/Xshenfen.jsx';
import Record from './pages/Record/Record.jsx';

import * as serviceWorker from './serviceWorker';
React.axios = axios;
//创建仓库
const store = createStore(function(state={
    name:"qq",
    skill:"ps",
    isShowActionSheet:false
}, action){
    const count = state.count
    switch (action.type) {
      case 'increase':
        return {
          ...state,
          count: count + 2
        }
      case 'multi':
        return Object.assign({}, state, {name: action.name});
      case 'editText':
        return {
            ...state,
            text:action.text
        }
      default:
        return state
    }
});


ReactDOM.render(
	<Provider store={store}>
	<Router>
		<div >
			<Route path="/" exact component={Terran} />
			<Route path="/signin" component={Signin} />
			<Route path="/login" component={Login} />
			<Route path="/terran/" component={Terran} />
			<Route path="/profile" component={Profile} />
			<Route path="/fund" component={Fund} />
			<Route path="/Xshenfen" component={Xshenfen} />
			<Route path="/record/" component={Record} />
			<Route path="/details/" component={Details} />

		</div>
	</Router>
	</Provider>
	,
	document.getElementById('root'));


serviceWorker.unregister();