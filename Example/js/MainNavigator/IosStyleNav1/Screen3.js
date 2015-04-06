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

var Screen3 = React.createClass({
  componentDidMount : function(){
    console.log("screen 3 mounted!");
  },
  goToScreen4 : function(){
    this.props.navigator.push({ id: 'screen4' });
    //this.props.navigator.replace({ id: 'screen4' });
    //this.props.navigator.jumpTo({ id: 'screen4' });
  },
  render: function() {
    return (
      <View style={styles.container}>
      <Text>
        Screen 3
      </Text>
      <TouchableHighlight onPress={this.goToScreen4}>
        <Text>
          Go to Screen 4
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
    backgroundColor: 'red',
  },
});

module.exports = Screen3;
