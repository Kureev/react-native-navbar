import React, { Component, PropTypes } from 'react';
import {
  PixelRatio,
  StatusBar,
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
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default',]),
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
  hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none',]),
  showAnimation: PropTypes.oneOf(['fade', 'slide', 'none',])
};

const CustomComponentShape = {
  component: PropTypes.object.isRequired,
  style: PropTypes.string,
}

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
    customizeStatusBar(this.props.statusBar);
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

  getLeftElement(){
    if (this.props.leftComponent){
      var leftItem = this.props.leftComponent;
      return (
        <View style={[styles.navBarButtonContainer, { marginBottom: 10 }, leftItem.style ]}>
          {leftItem.component}
        </View>
      )
    }else {
      return this.getButtonElement(this.props.leftButton, {marginLeft: 8,})
    }
  }

  getRightElement(){
    if (this.props.rightComponent){
      var rightItem = this.props.rightComponent;
      return (
        <View style={[styles.navBarButtonContainer, { marginBottom: 10 }, rightItem.style]}>
          {rightItem.component}
        </View>
      )
    }else {
       return this.getButtonElement(this.props.rightButton, {marginRight: 8,})
    }
  }

  getTitleElement(data) {

    if (this.props.titleComponent) {

      var TitleComponent = this.props.titleComponent.component;
      return (
        <View style={this.props.titleComponent.style}>
          {TitleComponent}
        </View>
      );

    } else {
      if (!!data.props) {
        return <View style={styles.customTitle}>{data}</View>;
      }

      const colorStyle = data.tintColor ? {color: data.tintColor,} : null;

      return (
        <View style={styles.navBarTitleContainer}>
          <Text
            style={[styles.navBarTitleText, colorStyle, ]}>
            {data.title}
          </Text>
        </View>
      );
    }

  }

  render() {
    const customTintColor = this.props.tintColor ?
    {backgroundColor: this.props.tintColor} : null;

    const customStatusBarTintColor = this.props.statusBar.tintColor ?
    {backgroundColor: this.props.statusBar.tintColor} : null;

    let statusBar = null;

    if (Platform.OS === 'ios') {
      statusBar = !this.props.statusBar.hidden ?
        <View style={[styles.statusBar, customStatusBarTintColor ]}/> : null;
    }

    return (
      <View style={[styles.navBarContainer, customTintColor, ]}>
        {statusBar}
        <View style={[styles.navBar, this.props.style, ]}>
          {this.getTitleElement(this.props.title)}
          {this.getLeftElement()}
          {this.getRightElement()}
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
    leftComponent: PropTypes.shape(CustomComponentShape),
    rightComponent: PropTypes.shape(CustomComponentShape),
    titleComponent: PropTypes.shape(CustomComponentShape),
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
  };
}
module.exports = NavigationBar;
