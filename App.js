import React, { Component } from 'react';

//import ScreenTest from './src/screens/LoadingScreen'
import RootNavigator from './src/navigator/RootNavigator';


//const AppNav = createReduxContainer(RootNavigator, 'root');

//const AppWithNavigationState = connect(mapStateToProps)(AppNav);


export default class App extends Component {
  render() {
    return (
        <RootNavigator />
    )
  }
}
