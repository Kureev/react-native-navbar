import React from 'react-native';
const {
  Component,
  View
} = React;
import NavigationBar from 'react-native-navbar';
import CustomScreen from './CustomScreen';

export default class InitialScreen extends Component {
  render() {
    const rightButtonConfig = {
      title: 'Forward',
      handler: () => this.props.navigator.push({
        component: CustomScreen,
      }),
    };

    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900', }}>
        <NavigationBar
          title={{ title: 'Title', }}
          rightButton={rightButtonConfig} />
      </View>
    );
  }
}
