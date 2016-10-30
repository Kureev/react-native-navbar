import {
  View
} from 'react-native';
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

export default class CustomScreen extends Component {
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };

    return (
      <View style={{ flex: 1, backgroundColor: '#9999CC', }}>
        <NavigationBar
          title={{ title: 'Custom screen', }}
          leftButton={leftButtonConfig} />
      </View>
    );
  }
}
