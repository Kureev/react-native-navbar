'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var Screen2 = require('./Screen2');

var Screen1 = React.createClass({
  componentDidMount : function(){
    console.log("screen 1 mounted!");
  },
  goToScreen2 : function(){
    this.props.navigator.push({ id: 'screen2' });
    //this.props.navigator.push( Screen2 );
  },
  render: function() {
    return (
      <View style={styles.container}>
      <Text>
        Screen 1
      </Text>
      <TouchableHighlight onPress={this.goToScreen2}>
        <Text>
          Go to Screen 2
        </Text>
      </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = Screen1;
