import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {Router} from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {browserHistory} from "./history";

const store = createStore(reducers,
    compose(applyMiddleware(reduxThunk))
);


ReactDOM.render(
   <Provider store={store}>
    <Router history={browserHistory}>
      {AppRoutes}
    </Router>
    </Provider>
 ,
  document.getElementById("root")
);


