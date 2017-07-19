import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types'

import NavbarButton from './NavbarButton';
import styles from './styles';

const ButtonShape = {
  title: PropTypes.string.isRequired,
  style: View.propTypes.style,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
};

const TitleShape = {
  title: PropTypes.string.isRequired,
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default']),
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
  hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none']),
  showAnimation: PropTypes.oneOf(['fade', 'slide', 'none']),
};

function getButtonElement(data, style) {
  return (
    <View style={styles.navBarButtonContainer}>
      {(!data || data.props) ? data : (
        <NavbarButton
          title={data.title}
          style={[data.style, style]}
          tintColor={data.tintColor}
          handler={data.handler}
          accessible={data.accessible}
          accessibilityLabel={data.accessibilityLabel}
        />
      )}
    </View>
  );
}

function getTitleElement(data) {
  if (!data || data.props) {
    return <View style={styles.customTitle}>{data}</View>;
  }

  const colorStyle = data.tintColor ? { color: data.tintColor } : null;

  return (
    <View style={styles.navBarTitleContainer}>
      <Text style={[styles.navBarTitleText, data.style, colorStyle]}>
        {data.title}
      </Text>
    </View>
  );
}

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    tintColor: PropTypes.string,
    statusBar: PropTypes.shape(StatusBarShape),
    leftButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
      PropTypes.oneOf([null]),
    ]),
    rightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
      PropTypes.oneOf([null]),
    ]),
    title: PropTypes.oneOfType([
      PropTypes.shape(TitleShape),
      PropTypes.element,
      PropTypes.oneOf([null]),
    ]),
    containerStyle: View.propTypes.style,
  };

  static defaultProps = {
    style: {},
    tintColor: '',
    leftButton: null,
    rightButton: null,
    title: null,
    statusBar: {
      style: 'default',
      hidden: false,
      hideAnimation: 'slide',
      showAnimation: 'slide',
    },
    containerStyle: {},
  };

  componentDidMount() {
    this.customizeStatusBar();
  }

  componentWillReceiveProps() {
    this.customizeStatusBar();
  }

  customizeStatusBar() {
    const { statusBar } = this.props;
    if (Platform.OS === 'ios') {
      if (statusBar.style) {
        StatusBar.setBarStyle(statusBar.style);
      }

      const animation = statusBar.hidden ?
        statusBar.hideAnimation : statusBar.showAnimation;

      StatusBar.showHideTransition = animation;
      StatusBar.hidden = statusBar.hidden;
    }
  }

  render() {
    const {
      containerStyle,
      tintColor,
      title,
      leftButton,
      rightButton,
      style,
    } = this.props;
    const customTintColor = tintColor ? { backgroundColor: tintColor } : null;

    const customStatusBarTintColor = this.props.statusBar.tintColor ?
      { backgroundColor: this.props.statusBar.tintColor } : null;

    let statusBar = null;

    if (Platform.OS === 'ios') {
      statusBar = !this.props.statusBar.hidden ?
        <View style={[styles.statusBar, customStatusBarTintColor]} /> : null;
    }

    return (
      <View style={[styles.navBarContainer, containerStyle, customTintColor]}>
        {statusBar}
        <View style={[styles.navBar, style]}>
          {getTitleElement(title)}
          {getButtonElement(leftButton, { marginLeft: 8 })}
          {getButtonElement(rightButton, { marginRight: 8 })}
        </View>
      </View>
    );
  }
}
