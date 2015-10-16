import React from 'react-native';
const {
  AppRegistry,
  Component,
  Text,
  View
} = React;
import NavigationBar from 'react-native-navbar';

class CustomElements extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={{ title: 'Title', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Forward', }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('CustomElements', () => CustomElements);
