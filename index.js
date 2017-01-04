import React, { Component, PropTypes, } from 'react';
import {
  PixelRatio,
  StatusBar,
  Text,
  View,
  Platform,
} from 'react-native';

import NavbarButton from './NavbarButton';
import styles from './styles';

const ButtonShape = {
  title: PropTypes.string.isRequired,
  style: PropTypes.any,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
};

const TitleShape = {
  title: PropTypes.string.isRequired,
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default', ]),
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
  hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
  showAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
};

function customizeStatusBar(data) {
  if (Platform.OS === 'ios') {
    if (data.style) {
      StatusBar.setBarStyle(data.style);
    }
    const animation = data.hidden ?
    (data.hideAnimation || NavigationBar.defaultProps.statusBar.hideAnimation) :
    (data.showAnimation || NavigationBar.defaultProps.statusBar.showAnimation);

    StatusBar.showHideTransition = animation;
    StatusBar.hidden = data.hidden;
  }
}

class NavigationBar extends Component {
  componentDidMount() {
    customizeStatusBar(this.props.statusBar);
  }

  componentWillReceiveProps(props) {
    customizeStatusBar(props.statusBar);
  }

  getButtonElement(data = {}, style) {
    return (
      <View style={styles.navBarButtonContainer}>
        {(!!data.props) ? data : (
          <NavbarButton
            title={data.title}
            style={[data.style, style, ]}
            tintColor={data.tintColor}
            handler={data.handler}/>
        )}
      </View>
    );
  }

  getTitleElement(data) {
    if (!!data.props) {
      return <View style={styles.customTitle}>{data}</View>;
    }

    const colorStyle = data.tintColor ? { color: data.tintColor, } : null;

    return (
      <View style={styles.navBarTitleContainer}>
        <Text
          style={[styles.navBarTitleText, colorStyle, ]}>
          {data.title}
        </Text>
      </View>
    );
  }

  render() {
    const { containerStyle, tintColor, title, leftButton, rightButton, style, } = this.props;
    const customTintColor = tintColor ? { backgroundColor: tintColor, } : null;

    const customStatusBarTintColor = this.props.statusBar.tintColor ?
      { backgroundColor: this.props.statusBar.tintColor, } : null;

    let statusBar = null;

    if (Platform.OS === 'ios') {
      statusBar = !this.props.statusBar.hidden ?
        <View style={[styles.statusBar, customStatusBarTintColor, ]} /> : null;
    }

    return (
      <View style={[styles.navBarContainer, containerStyle, customTintColor, ]}>
        {statusBar}
        <View style={[styles.navBar, style, ]}>
          {this.getTitleElement(title)}
          {this.getButtonElement(leftButton, { marginLeft: 8, })}
          {this.getButtonElement(rightButton, { marginRight: 8, })}
        </View>
      </View>
    );
  }

  static propTypes = {
    tintColor: PropTypes.string,
    statusBar: PropTypes.shape(StatusBarShape),
    leftButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    rightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    title: PropTypes.oneOfType([
      PropTypes.shape(TitleShape),
      PropTypes.element,
    ]),
    containerStyle: PropTypes.any,
  };

  static defaultProps = {
    statusBar: {
      style: 'default',
      hidden: false,
      hideAnimation: 'slide',
      showAnimation: 'slide',
    },
    title: {
      title: '',
    },
    containerStyle: {},
  };
}
module.exports = NavigationBar;
