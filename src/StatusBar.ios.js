const React = require('react-native');
const {View, PropTypes, StyleSheet, TouchableWithoutFeedback} = React;

const styles = StyleSheet.create({
  main: {
    height: 20,
    backgroundColor: 'rgb(247, 247, 247)',
  },
});

function StatusBar({style, onPress}) {
  return <View style={[styles.main, style]}/>;
}

StatusBar.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

module.exports = StatusBar;
