import React, { Component, PropTypes } from 'react';
import {
  PixelRatio,
  StatusBar,
  Text,
  View,
  Platform
} from 'react-native';

import NavbarButton from './NavbarButton';
import Title from './Title';
import styles from './styles';

let NavbarContainer = styled.View`
  background-color: #fff;
`;

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
      StatusBar.setBarStyle(data.style, animated);
    }
    if (data.hidden !== undefined) {
      let showHideTransition = 'none';
      if (animated) {
        showHideTransition = data.hidden ?
          (data.hideAnimation || NavigationBar.defaultProps.statusBar.hideAnimation) :
          (data.showAnimation || NavigationBar.defaultProps.statusBar.showAnimation);
      }
      StatusBar.setHidden(data.hidden, showHideTransition);
    }
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
    if (data.prototype.isReactComponent) {
      return <View style={styles.customTitle}>{data}</View>;
    }

    return <Title ...data />;
  }

  render() {
    if (this.props.tintColor) {
      NavbarContainer = styled(Navbar)`
        background-color: ${props => props.tintColor};
      `;
    }

    let statusBar = null;

    if (Platform.OS === 'ios') {
      if (!this.props.statusBar.hidden) {
        statusBar = styled.View`
          height: 20;
        `;

        if (this.props.statusBar.tintColor) {
          statusBar = styled(statusBar)`
            background-color: ${props => props.statusBar.tintColor};
          `;
        }
      }
    }

    const Navbar = styled.View`
      height: 44;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      ${props => props.style}
    `;

    return (
      <NavbarContainer>
        {statusBar}
        <Navbar>
          {this.getTitleElement(this.props.title)}
          {this.getButtonElement(this.props.leftButton, { marginLeft: 8, })}
          {this.getButtonElement(this.props.rightButton, { marginRight: 8, })}
        </Navbar>
      </NavbarContainer>
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
