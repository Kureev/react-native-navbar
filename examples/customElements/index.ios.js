/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require('react-native');
var NavigationBar = require('react-native-navbar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableOpacity,
} = React;

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
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

var prevImage = 'http://cdn.flaticon.com/png/256/34097.png';
var CustomPrev = React.createClass({
  render: function() {
    return (
      <TouchableOpacity onPress={function() { alert('prev'); }}>
        <Image
          source={{uri: prevImage}}
          style={{ width: 24, height: 24, left: 10, bottom: 5 }}
        />
      </TouchableOpacity>
    );
  }
});

var nextImage = 'http://cdn.flaticon.com/png/256/64410.png';
var CustomNext = React.createClass({
  render: function() {
    return (
      <TouchableOpacity onPress={function() { alert('next'); }}>
        <Image
          source={{uri: nextImage}}
          style={{ width: 24, height: 24, right: 10, bottom: 5 }}
        />
      </TouchableOpacity>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
});

var titleUri = 'https://pbs.twimg.com/profile_images/2643489197/2533a80926d7c8fc8c37eaa6becffe68_normal.png';
var CustomTitle = React.createClass({
  render: function() {
    return (
      <Image
        source={{uri: titleUri}}
        style={{ width: 32, height: 32, }}
      />
    );
  }
});

var customElements = React.createClass({
  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, { navigator, route });
    }

    return (
      <View style={styles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: Content,
          navigationBar: <NavigationBar
            customTitle={<CustomTitle/>}
            customPrev={<CustomPrev/>}
            customNext={<CustomNext/>}
          />
        }}
      />
    );
  }
});


AppRegistry.registerComponent('customElements', () => customElements);
