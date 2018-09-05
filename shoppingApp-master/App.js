import React , {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppWithNavigationState  from './src/containers/AppNavigator';
import rootReducer from "./src/reducers";
// import ProductList from './src/containers/Products';
import createSagaMiddleware from "redux-saga";
import { productWatchers } from "./src/sagas/product";


const sagaMiddleware = createSagaMiddleware();

let store = createStore(  //creating a store 
  rootReducer,
  {
    productState: {
      products: [],
      product: {},
      isLoading: false,
      isRefreshing: false,
      page: 1,
      limit: 8
    },
   
  },
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(productWatchers);

export default class Route extends Component {
  render() {  //is a method
    return (  //is a method

      //provider is combine the react and redux 
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}