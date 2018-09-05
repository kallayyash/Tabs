import { createBottomTabNavigator } from "react-navigation";
import { connect } from "react-redux";
import React  from "react";

import ProductList from "./Products";
import Searches from './Search';

var AppNavigator = createBottomTabNavigator({
  List: {
    screen: ProductList ,
    
            },
  Search: {  
          screen:Searches
         }
  },{
 
  tabBarPosition: 'bottom',
  swipeEnabled: true, 
  animationEnabled: true,
  tabBarOptions: {
  activeTintColor: 'white',
  activeBackgroundColor: "#006978",
  inactiveTintColor: 'black',
  inactiveBackgroundColor:'#56c8d8',
  elevation:6,
  labelStyle: {
  fontSize: 16,
  padding: 0
  }
  }
  });
  



class App extends React.Component {
  render() {
    return (
      <AppNavigator
       /*  navigation={{
          dispatch: this.props.dispatch,
          state: this.props.navState,
          addListener
        }} */
      />
    );
  }
}        



const mapStateToProps = state => ({
  navState: state.navState
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
