'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var NavigatorNavigationBarStyles = require('NavigatorNavigationBarStyles');
var StaticContainer = require('StaticContainer.react');
var cssVar = require('cssVar');

var NavigationBar = React.createClass({
  getLeftButtonElement: function() {
    var {
      onPrev,
      prevTitle,
      navigator,
      buttonsColor
    } = this.props;

    return (
      <TouchableOpacity onPress={onPrev || navigator.pop}>
        <View style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, {color: buttonsColor}]}>
            {prevTitle || 'Back'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  getTitleElement: function() {
    var {
      title,
      titleColor
    } = this.props;

    if (!title.length) {
      return;
    }

    return (
      <Text style={[styles.navBarText, styles.navBarTitleText, {color: titleColor}]}>
        {title}
      </Text>
    );
  },

  getRightButtonElement: function(onNext, nextTitle, navigator) {
    var {
      onNext,
      nextTitle,
      navigator,
      buttonsColor,
      backgroundColor
    } = this.props;

    if (!onNext) {
      return <Text style={styles.navBarRightButton}></Text>;
    }
    return (
      <TouchableOpacity onPress={onNext}>
        <View style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, {color: buttonsColor}]}>
            {nextTitle || 'Next'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  render: function() {
    return (
      <StaticContainer shouldUpdate={false}>
        <View style={[styles.navBarContainer, {backgroundColor: this.props.backgroundColor}]}>
          {this.getLeftButtonElement()}
          {this.getTitleElement()}
          {this.getRightButtonElement()}
        </View>
      </StaticContainer>
    );
  },
});

var styles = StyleSheet.create({
  navBarContainer: {
    height: NavigatorNavigationBarStyles.General.TotalNavHeight,
    top: 0,
    left: 0,
    width: NavigatorNavigationBarStyles.General.ScreenWidth,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1 / PixelRatio.get(),
    justifyContent: 'space-between'
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    flex: 2,
    textAlign: 'center'
  },
  navBarTitleText: {
    color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    alignItems: 'flex-start',
    flex: 1
  },
  navBarRightButton: {
    paddingRight: 10,
    alignItems: 'flex-end',
    flex: 1
  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  }
});

module.exports = NavigationBar;