const React = require('react-native');

const styles = React.StyleSheet.create({
  main: {
    height: 20,
    backgroundColor: '#ffffff',
  },
});

module.exports = class StatusBar extends React.Component {
  customizeNativeStatusBar() {
    const { type, hidden, showAnimation, hideAnimation } = this.props;

    if (type) {
      React.StatusBarIOS.setStyle(type, true);
    }

    React.StatusBarIOS
      .setHidden(hidden, hidden ? hideAnimation : showAnimation);
  }

  render() {
    return (
      <React.View
        style={[styles.main, this.props.style]}
        onClick={this.props.onClick}>
      </React.View>
    );
  }

  static propTypes = {
    type: PropTypes.oneOf(['light-content', 'default']),
    hidden: PropTypes.bool,
    onClick: React.PropTypes.func,
    hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none']),
    showAnimation: PropTypes.oneOf(['fade', 'slide', 'none']),
  };

  static defaultProps = {
    onClick: () => {},
    type: 'default',
    hidden: false,
    hideAnimation: 'slide',
    showAnimation: 'slide',
  };
};
