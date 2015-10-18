import React from 'react-native';
const {
  AppRegistry,
  Component,
  Text,
  Navigator,
  View
} = React;
import NavigationBar from 'react-native-navbar';
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
