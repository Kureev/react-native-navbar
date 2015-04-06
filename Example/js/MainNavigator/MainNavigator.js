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

var Screen1 = require('./Screen1');
var Screen2 = require('./Screen2');
var Screen3 = require('./IosStyleNav1/Screen3');
var IosStyleNav1 = require('./IosStyleNav1/IosStyleNav1');
//var Screen3 = require('./Screen3');

//var NavIos = require('./NavIos');

//var NavigationBar = require('./NavigatonBar');

var MainNavigator = React.createClass({
  componentDidMount : function(){
    console.log("main navigator mounted");
  },
  /*
  renderScene: function(route, navigator) {
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
  },
  */

  renderScene: function(route, nav) {
    switch (route.id) {
      case 'iosstylenav1':
        return <IosStyleNav1
                  mainNavigator = {nav}
                />
      case 'empty':
        return <View />;
      case 'screen1':
        return <Screen1
                  navigator={nav}
                />
      case 'screen2':
        return <Screen2
                  navigator={nav}
                />
      case 'screen3':
        return <Screen3 />
      case 'start':
        return <FifthScreen
          onModalExit = {this.props.onModalExit}
        />;
      case 'breadcrumbs':
        return <BreadcrumbNavSample />;
      case 'jumping':
        return <JumpingNavSample />;
    }
  },
  render: function() {
    return (

        <Navigator
          debugOverlay={false}
          style={ styles.nav }

          initialRoute={{ id: 'screen1', }}

          /*
          initialRoute={{
            component: Screen1,
            navigationBar: < NavigationBar
            customPrev = { null }
            isInitial = { true }
            title="Screen 1"/>
          }}
          */
          renderScene={this.renderScene}
        />

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e71fba',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor : 'red',
  },
  nav : {
    alignSelf : 'stretch',
    overflow : 'hidden',
    flex : 1,
    backgroundColor : '#e7c41f',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = MainNavigator;
