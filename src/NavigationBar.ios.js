const React = require('react-native');
const {View, PropTypes, StyleSheet} = React;

const styles = StyleSheet.create({
  main: {
    height: 44,
    backgroundColor: 'rgb(247, 247, 247)',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

function NavigationBar({style, children}) {
  return <View style={[styles.main, style]}>{children}</View>;
}

NavigationBar.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

module.exports = NavigationBar;
