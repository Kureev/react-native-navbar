import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

class Basic extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900', }}>
        <NavigationBar
          title={{ title: 'Title', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Forward', }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Basic', () => Basic);
