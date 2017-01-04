const React = require('react-native');
const {Text, PropTypes, StyleSheet, TouchableOpacity} = React;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 17,
    paddingHorizontal: 12,
    fontWeight: '300',
    top: 10,
    backgroundColor: 'transparent',
  },
});

function NavigationBarButton({children, color, style, onPress}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={[styles.buttonText, {color}]}>{children}</Text>
    </TouchableOpacity>
  );
}

NavigationBarButton.propTypes = {
  onPress: PropTypes.func,
};

NavigationBarButton.defaultProps = {
  color: '#007AFF',
  onPress: () => {},
};

module.exports = NavigationBarButton;
