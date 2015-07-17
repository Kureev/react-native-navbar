const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  example: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

const NavigationBar = require('react-native-navbar');

class Example extends React.Component {
  render() {
    return (
      <View style={styles.example}>
        <Text>Some content</Text>
      </View>
    );
  }
}

class Basic extends React.Component {
  renderScene(route, navigator) {
    const Component = route.component;
    let navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator, route,
      });
    }

    return (
      <View style={{ flex: 1, }}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{
          component: Example,
          navigationBar: (
            <NavigationBar
              title="Initial View"
              onNext={() => alert('Next button click handler')}
              style={styles.navigator}/>
          ),
        }}
      />
    );
  }
}

AppRegistry.registerComponent('Basic', () => Basic);
