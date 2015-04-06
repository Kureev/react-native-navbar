'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  ListView,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var Screen3 = require('./Screen3');
var Screen4 = require('./Screen4');
var Screen5 = require('./Screen5');

var NavigationBar = require('react-native-navbar');

var MainNavigator = React.createClass({
  componentDidMount : function(){
    console.log("ios style navigator mounted");
  },
  configureScene : function(route){
    console.log("configure scene called!");
    console.log("configure route id :",route.id);

    switch (route.id) {
      case 'empty':
        // this is the default transition
        return Navigator.SceneConfigs.FloatFromRight;
      case 'screen3':
        return Navigator.SceneConfigs.FloatFromBottom;
      case 'screen4':
        return Navigator.SceneConfigs.FloatFromBottom;
      case 'screen5':
          return Navigator.SceneConfigs.FloatFromBottom;
      }
  },
  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    console.log("route.id : ", route.id);

    switch (route.id) {
      case 'empty':
        //Com <View />;
      case 'screen3':
        Component = Screen3;
        navBar = <NavigationBar
            customPrev = { <View style={styles.navBarLeftButton}></View> }
            title="Screen 3"/>;
        break;
      case 'screen4':
        Component = Screen4;
        navBar = < NavigationBar
            customPrev = { null }
            title="Screen 4"/>;
        break;
      // screen 5 is a full screen modal
      // so it has no
      case 'screen5':
        Component = Screen5;
        navBar = null;
        break;

      }

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }
    return (
      <View style={ styles.screenContainer }>
        {navBar}
        <Component
          navigator={navigator}
          route={route} />
      </View>
    );
  },
  render: function() {
    return (
      <Navigator
        debugOverlay={false}
        style={ styles.nav }
        initialRoute={{ id : 'screen3' }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
});

var styles = StyleSheet.create({
  screenContainer : {
    flex:1,
  },
});

module.exports = MainNavigator;
