import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import "./style.css";
//import rootReducer from './reducers';
import storeClass from './store/index';
import {PersistGate} from 'redux-persist/integration/react';

let stores = storeClass();
let store = stores.store;
let persistor = stores.persistor;

render(
	<Provider store = {store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>	
	</Provider>,
	document.getElementById('app')	
);

//ReactDOM.render(<App />, document.getElementById("app")); 