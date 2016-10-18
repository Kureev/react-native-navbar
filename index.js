import React, { Component, PropTypes } from 'react';
import {
  PixelRatio,
  StatusBarIOS,
  Text,
  View,
  Platform
} from 'react-native';

import NavbarButton from './NavbarButton';
import styles from './styles';

const ButtonShape = {
  title: PropTypes.string.isRequired,
  style: PropTypes.any,
  handler: PropTypes.func,
};

const TitleShape = {
  title: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array,PropTypes.number]),
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default', ]),
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
  animated: PropTypes.bool, // affects `style` and `hidden`
  hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
  showAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ])
};

function customizeStatusBar(data) {
  if (Platform.OS === 'ios') {
    const animated = (data.animated || NavigationBar.defaultProps.statusBar.animated)
    if (data.style) {
      // StatusBar.setBarStyle(data.style, animated);
    }
    if (data.hidden !== undefined) {
      let showHideTransition = 'none';
      if (animated) {
        showHideTransition = data.hidden ?
          (data.hideAnimation || NavigationBar.defaultProps.statusBar.hideAnimation) :
          (data.showAnimation || NavigationBar.defaultProps.statusBar.showAnimation);
      }
      // StatusBar.setHidden(data.hidden, showHideTransition);
    }
  }
}

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isRightHide: this.props.isRightHide ? true : false,
      isLeftHide: this.props.isLeftHide ? true : false,
    };
  }

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
    const style = data.style ? data.style : styles.navBarTitleText;

    return (
      <View style={styles.navBarTitleContainer}>
        <Text
          style={[style, colorStyle, ]}>
          {data.title}
        </Text>
      </View>
    );
  }

  render() {
    const customTintColor = this.props.tintColor ?
      { backgroundColor: this.props.tintColor } : null;

    const customStatusBarTintColor = this.props.statusBar.tintColor ?
      { backgroundColor: this.props.statusBar.tintColor } : null;

    let statusBar = null;

    if (Platform.OS === 'ios') {
      statusBar = !this.props.statusBar.hidden ?
        <View style={[styles.statusBar, customStatusBarTintColor ]} /> : null;
    }

    let leftButton;
    if (!this.state.isLeftHide) {
      leftButton = this.getButtonElement(this.props.leftButton, { marginLeft: 8, });
    }

    let rightButton;
    if (!this.state.isRightHide) {
      rightButton = this.getButtonElement(this.props.rightButton, { marginLeft: 8, });
    }

    return (
      <View style={[styles.navBarContainer, customTintColor, ]}>
        {statusBar}
        <View style={[styles.navBar, this.props.style, ]}>
          {this.getTitleElement(this.props.title)}
          {leftButton}
          {rightButton}
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
  };

  static defaultProps = {
    statusBar: {
      style: 'default',
      hidden: false,
      animated: false,
      hideAnimation: 'slide',
      showAnimation: 'slide',
    },
    title: {
      title: '',
    },
  };
}
module.exports = NavigationBar;
