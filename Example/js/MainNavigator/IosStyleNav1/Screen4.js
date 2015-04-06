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


var Screen4 = React.createClass({
  componentDidMount : function(){
    console.log("screen 4 mounted!");
  },
  openScreen5Modal : function(){
    this.props.navigator.push({ id: 'screen5' });
  },
  render: function() {
    return (
      <View style={styles.container}>
      <Text>
        Screen 4
      </Text>
      <TouchableHighlight onPress={this.openScreen5Modal}>
        <Text>
          Open Screen 5 Modal
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
    backgroundColor: 'green',
  },
});

module.exports = Screen4;
