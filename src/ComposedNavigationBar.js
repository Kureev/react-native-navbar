const React = require('react-native');
const {View, PropTypes, StyleSheet} = React;

const NavigationBar = require('./NavigationBar');
const StatusBar = require('./StatusBar');
const NavigationBarButton = require('./NavigationBarButton');
const NavigationBarTitle = require('./NavigationBarTitle');

const styles = StyleSheet.create({
  prev: {
    position: 'absolute',
    left: 0,
  },
  next: {
    position: 'absolute',
    right: 0,
  },
});

function ComposedNavigationBar(props) {
  const {statusBar, title, leftButton, rightButton} = props;

  return (
    <View>
      <StatusBar {...statusBar}/>
      <NavigationBar>
        <NavigationBarTitle style={title.style}>
          {title.text}
        </NavigationBarTitle>

        <NavigationBarButton
          {...leftButton}
          style={[styles.prev, leftButton.style]}>
          {leftButton.text}
        </NavigationBarButton>

        <NavigationBarButton
          {...rightButton}
          style={[styles.next, rightButton.style]}>
          {rightButton.text}
        </NavigationBarButton>
      </NavigationBar>
    </View>
  );
}

module.exports = ComposedNavigationBar;
