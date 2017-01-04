const React = require('react-native');
const {View, Text, PropTypes, StyleSheet} = React;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 17,
    paddingHorizontal: 12,
    paddingTop: 10,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

function NavigationBarTitle({children, style}) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

NavigationBarTitle.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

module.exports = NavigationBarTitle;
