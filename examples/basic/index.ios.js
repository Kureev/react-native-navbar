var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var styles = StyleSheet.create({
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
});

var NavigationBar = require('react-native-navbar');

class Example extends React.Component {
  render() {
    return (
      <View>
        <Text>Some content</Text>
      </View>
    );
  }
}

class Basic extends React.Component {
  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  }

  handleNext() {
    alert('Next button click handler');
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{
          component: Example,
          navigationBar: <NavigationBar
            title="Initial View"
            onNext={this.handleNext}
            style={styles.navigator}
          />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('Basic', () => Basic);
