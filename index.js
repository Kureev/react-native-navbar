'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

var NavigatorNavigationBarStyles = require('NavigatorNavigationBarStyles');
var StaticContainer = require('StaticContainer.react');
var cssVar = require('cssVar');

var styles = StyleSheet.create({
  navBarContainer: {
    height: NavigatorNavigationBarStyles.General.TotalNavHeight,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1 / PixelRatio.get(),
    justifyContent: 'space-between',
  },
  navBarContainerWithStatusBar: {
    paddingTop: NavigatorNavigationBarStyles.General.StatusBarHeight,
  },
  customTitle: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 5,
    left: 0,
    right: 0,
  },
  navBarText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  navBarTitleText: {
    color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  }
});

var NavigationBar = React.createClass({

  propTypes: {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  },
  /*
   * If there are no routes in the stack, `hidePrev` isn't provided or false,
   * and we haven't received `onPrev` click handler, return true
   */
  prevButtonShouldBeHidden: function() {
    var {
      onPrev,
      hidePrev,
      navigator
    } = this.props;

    var getCurrentRoutes = navigator.getCurrentRoutes;

    return (
      hidePrev ||
      (getCurrentRoutes && getCurrentRoutes().length <= 1 && !onPrev)
    );
  },

  /**
   * Describes how we get a left button in the navbar
   */
  getLeftButtonElement: function() {
    var {
      onPrev,
      prevTitle,
      navigator,
      route,
      buttonsStyle,
      customPrev,
      statusBar,
    } = this.props;

    /*
     * Check if we need to hide `prev` button
     */
    if (this.prevButtonShouldBeHidden()) {
      return <View style={styles.navBarLeftButton}></View>;
    }

    /*
     * If we have a `customPrev` component, then return
     * it's clone with additional attributes
     */
    if (customPrev) {
      return React.addons.cloneWithProps(customPrev, { navigator, route });
    }

    return (
      <TouchableOpacity onPress={onPrev || navigator.pop}>
        <View style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, buttonsStyle]}>
            {prevTitle || 'Back'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  /*
   * Describe how we get a title for the navbar
   */
  getTitleElement: function() {
    var {
      title,
      titleStyle,
      customTitle,
      navigator,
      route,
    } = this.props;

    /*
     * Return `customTitle` component if we have it
     */
    if (customTitle) {
      return (
        <View style={styles.customTitle}>
          {React.addons.cloneWithProps(customTitle, { navigator, route })}
        </View>
      );
    }

    if (title && !title.length) {
      return true;
    }

    var titleStyle = [
      styles.navBarText,
      styles.navBarTitleText,
      titleStyle
    ];

    return (
      <Text style={titleStyle}>
        {title}
      </Text>
    );
  },

  getRightButtonElement: function() {
    var {
      onNext,
      nextTitle,
      navigator,
      route,
      buttonsStyle,
      customNext
    } = this.props;

    /*
     * If we have a `customNext` component, then return
     * it's clone with additional attributes
     */
    if (customNext) {
      return React.addons.cloneWithProps(customNext, { navigator, route });
    }

    /*
     * If we haven't received `onNext` handler, then just return
     * a placeholder for button to keep markup consistant and
     * title aligned to the center
     */
    if (!onNext) {
      return <Text style={styles.navBarRightButton}></Text>;
    }

    return (
      <TouchableOpacity onPress={onNext}>
        <View style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, buttonsStyle]}>
            {nextTitle || 'Next'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  render: function() {

    if (this.props.statusBar === 'lightContent') {
      StatusBarIOS.setStyle(StatusBarIOS.Style['lightContent']);
      StatusBarIOS.setHidden(false);
    } else if (this.props.statusBar === 'default') {
      StatusBarIOS.setStyle(StatusBarIOS.Style['default']);
      StatusBarIOS.setHidden(false);
    } else if (this.props.statusBar === 'hidden') {
      StatusBarIOS.setHidden(true);
    }

    var stylePad = this.props.statusBar !== 'hidden' ? styles.navBarContainerWithStatusBar : null;

    return (
      <StaticContainer shouldUpdate={false}>
        <View style={[styles.navBarContainer, this.props.style, stylePad ]}>
          {this.getLeftButtonElement()}
          {this.getTitleElement()}
          {this.getRightButtonElement()}
        </View>
      </StaticContainer>
    );
  },
});

module.exports = NavigationBar;
