var NavigationBar = require('react-native-navbar');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  TouchableOpacity,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 1,
  },
  customButton: {
    width: 24,
    height: 24,
    left: 10,
    bottom: 5
  },
});

var prevImage = 'http://cdn.flaticon.com/png/256/34097.png';
var nextImage = 'http://cdn.flaticon.com/png/256/64410.png';
var titleUri = 'https://pbs.twimg.com/profile_images/2643489197/2533a80926d7c8fc8c37eaa6becffe68_normal.png';

/**
 * Custom `Prev` button component
 */
class CustomPrev extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('prev') }>
        <React.Image
          source={{uri: prevImage}}
          style={styles.customButton}
        />
      </TouchableOpacity>
    );
  }
}

/**
 * Custom `Next` button component
 */
class CustomNext extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('next') }>
        <React.Image
          source={{uri: nextImage}}
          style={{width: 24, height: 24, right: 10, bottom: 5}}
        />
      </TouchableOpacity>
    );
  }
}

/**
 * Content component
 * Would be shown under navbar
 */
class Content extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <React.Text style={styles.welcome}>
          {'Welcome to React Native!'}
        </React.Text>
      </View>
    );
  }
}

/**
 * Custom `Title` component
 */
class CustomTitle extends React.Component {
  render() {
    return (
      <React.Image
        source={{uri: titleUri}}
        style={{width: 32, height: 32}}
      />
    );
  }
}

/**
 * Main component
 */
class CustomElements extends React.Component {
  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, { navigator, route });
    }

    return (
      <View style={{ flex: 1 }}>
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
          component: Content,
          navigationBar: <NavigationBar
            customTitle={<CustomTitle/>}
            customPrev={<CustomPrev/>}
            customNext={<CustomNext/>}/>
        }}
      />
    );
  }
}

AppRegistry.registerComponent('customElements', () => CustomElements);
