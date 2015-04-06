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

var Screen5 = React.createClass({
  componentDidMount : function(){
    console.log("screen 5 mounted!");
  },
  closeScreen5Modal : function(){
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.container}>
      <Text>
        Screen 5 -- This is a modal
      </Text>
      <TouchableHighlight onPress={this.closeScreen5Modal}>
        <Text>
          Close Screen 5 Modal
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
    backgroundColor: 'yellow',
  },
});

module.exports = Screen5;
