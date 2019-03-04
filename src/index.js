import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import configureStore from "./store";
import Form from "./Form";
import ItemList from "./components/ItemList";
import { itemsFetchData } from './actions/items';

const store = configureStore();

class App extends Component{
	render () {
		if(this.props.items !== null){
			return (
			 	<Provider store={store}>
				    <div style={{ padding: 15 }}>
				      <h2>About You & Your Property </h2>
				      <Form onSubmit={itemsFetchData} />
				      <Values form="padall" />
				    </div>
		  		</Provider>);
		}else{
			return (
				<Provider store={store}>
					<ItemList />
				 </Provider>);
	    	
			}
		}
	}



ReactDOM.render( <App />, document.getElementById("root"));
