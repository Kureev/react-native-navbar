import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';
import React, { Component } from 'react';
import InitialScreen from './components/InitialScreen';

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class Routing extends Component {
  render() {
    const initialRoute = {
      component: InitialScreen
    };

    return (
      <View style={{ flex: 1, }}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Routing', () => Routing);
