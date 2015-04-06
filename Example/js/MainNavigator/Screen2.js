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


var Screen2 = React.createClass({
  componentDidMount : function(){
    console.log("screen 2 mounted!");
  },
  goToIosStyleNav : function(){
    this.props.navigator.push({ id: 'iosstylenav1' });
    //this.props.navigator.push({ id: 'navios' });
  },
  render: function() {
    return (
      <View style={styles.container}>
      <Text>
        Screen 2
      </Text>
      <TouchableHighlight onPress={this.goToIosStyleNav}>
        <Text>
          Go to Screen Ios Style Nav
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

module.exports = Screen2;
