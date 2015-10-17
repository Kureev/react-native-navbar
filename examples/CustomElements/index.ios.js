import React from 'react-native';
const {
  AppRegistry,
  Component,
  Text,
  View
} = React;
import NavigationBar from 'react-native-navbar';
import Pickachu from './components/Pickachu';
import Charmander from './components/Charmander';
import Bulbazavr from './components/Bulbazavr';

class CustomElements extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900' }}>
        <NavigationBar
          title={<Pickachu/>}
          leftButton={
            <Charmander
              style={{ marginLeft: 8 }}
              onPress={() => alert('Charmandeeeer!')}/>}
          rightButton={
            <Bulbazavr
              style={{ marginRight: 8 }}
              onPress={() => alert('Bulbazaaaavr!')}/>} />
      </View>
    );
  }
}

AppRegistry.registerComponent('CustomElements', () => CustomElements);
