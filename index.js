'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

var NavigatorNavigationBarStyles = require('NavigatorNavigationBarStyles');
var StaticContainer = require('StaticContainer.react');
var cssVar = require('cssVar');

var NavigationBar = React.createClass({

  /**
   * Describes how we get a left button in the navbar
   */
  getLeftButtonElement: function() {
    var {
      onPrev,
      prevTitle,
      navigator,
      buttonsColor,
      customPrev,
      backgroundColor,
      isInitial
    } = this.props;

    var getCurrentRoutes = navigator.getCurrentRoutes;

    /*
     * İs it a initial View
     * if it's an initial view don't draw anything to left
     */
    if( isInitial ){
      return ( null );
    }


    /*
     * If we have a `customPrev` component, then return
     * it's clone with additional attributes
     */
    if (customPrev) {
      return React.addons.cloneWithProps(customPrev, { navigator });
    }

    /*
     * If there are no routes in the stack and we haven't received
     * `onPrev` click handler, we return just a placeholder for button
     * to keep markup consistant and title aligned to center
     */
    if (getCurrentRoutes && getCurrentRoutes().length <= 1 && !onPrev) {
      return <View style={styles.navBarLeftButton}></View>;
    }

    /*
     * Apply custom background styles to button
     */
    var customStyle = backgroundColor ? { color: buttonsColor } : {};

    return (
      <TouchableOpacity onPress={onPrev || navigator.pop}>
        <View style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, customStyle]}>
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
      titleColor,
      customTitle
    } = this.props;

    /*
     * Return `customTitle` component if we have it
     */
    if (customTitle) {
      return customTitle;
    }

    if (title && !title.length) {
      return;
    }

    return (
      <Text style={[styles.navBarText, styles.navBarTitleText, {color: titleColor}]}>
        {title}
      </Text>
    );
  },

  getRightButtonElement: function() {
    var {
      onNext,
      nextTitle,
      navigator,
      buttonsColor,
      backgroundColor,
      customNext
    } = this.props;

    /*
     * If we have a `customNext` component, then return
     * it's clone with additional attributes
     */
    if (customNext) {
      return React.addons.cloneWithProps(customNext, { navigator });
    }

    /*
     * If we haven't received `onNext` handler, then just return
     * a placeholder for button to keep markup consistant and
     * title aligned to the center
     */
    if (!onNext) {
      return <Text style={styles.navBarRightButton}></Text>;
    }

    /*
     * Apply custom background styles to button
     */
    var customStyle = backgroundColor ? { color: buttonsColor } : {};

    return (
      <TouchableOpacity onPress={onNext}>
        <View style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText, customStyle]}>
            {nextTitle || 'Next'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  render: function() {
    var customStyle = this.props.backgroundColor ?
      { backgroundColor: this.props.backgroundColor } : {};

    return (
      <StaticContainer shouldUpdate={false}>
        <View style={[styles.navBarContainer, customStyle]}>
          <View style={styles.left1}>
            {this.getLeftButtonElement()}
          </View>
          <View style={styles.center2}>
            {this.getTitleElement()}
          </View>
          <View style={styles.right3}>
            {this.getRightButtonElement()}
          </View>
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
    backgroundColor : 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1 / PixelRatio.get(),
    justifyContent: 'space-between',
  },
  barCenter: {
    backgroundColor : 'green',
    //flexGrow : 2,
  },
  left1 : {
    flex : 1
  },
  center2 : {
    flex : 2
  },
  right3 : {
    flex : 1
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    flex: 2,
    textAlign: 'center',
  },
  navBarTitleText: {
    color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 9,
    //backgroundColor : 'red',
  },
  navBarLeftButton: {
    paddingLeft: 10,
    alignItems: 'flex-start',
    flex: 1,
  },
  navBarRightButton: {
    paddingRight: 10,
    alignItems: 'flex-end',
    flex: 1,
  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  }
});

module.exports = NavigationBar;
