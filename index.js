import React from 'react-native';
const {
  PixelRatio,
  StatusBarIOS,
  Component,
  Text,
  View,
  PropTypes
} = React;
import NavbarButton from './NavbarButton';
import styles from './styles';

const ButtonShape = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  handler: PropTypes.func,
};

const TitleShape = {
  title: PropTypes.string.isRequired,
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default', ]).isRequired,
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
};

export default class NavigationBar extends Component {
  componentDidMount() {
    if (!this.props.statusBar.hidden) {
      StatusBarIOS.setStyle(this.props.statusBar.style, false);
    }
  }

  componentWillReceiveProps(props) {
    if (props.statusBar !== this.props.statusBar) {
      if (!this.props.statusBar.hidden) {
        StatusBarIOS.setStyle(this.props.statusBar.style, false);
      }
      this.forceUpdate();
    }
  }

  getButtonElement(data, style) {
    if (data._isReactElement) {
      return data;
    }

    return <NavbarButton
      title={data.title}
      style={[data.style, style, ]}
      tintColor={data.tintColor}
      handler={data.handler} />;
  }

  getTitleElement(data) {
    if (data._isReactElement) {
      return <View style={styles.customTitle}>{data}</View>;
    }

    const colorStyle = data.tintColor ? { color: data.tintColor, } : null;

    return (
      <Text
        style={[styles.navBarTitleText, colorStyle, ]}>
        {data.title}
      </Text>
    );
  }

  render() {
    const customTintColor = this.props.tintColor ?
      { color: this.props.tintColor } : null;

    return (
      <View style={[styles.navBarContainer, customTintColor, ]}>
        <View style={[styles.statusBar, ]} />
        <View style={[styles.navBar, this.props.style, ]}>
          {this.getTitleElement(this.props.title)}
          {this.getButtonElement(this.props.leftButton, { marginLeft: 8, })}
          {this.getButtonElement(this.props.rightButton, { marginRight: 8, })}
        </View>
      </View>
    );
  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
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
  }

  static defaultProps = {
    statusBar: {
      style: 'default',
      hidden: false,
    },
    title: {
      title: '',
    },
  }
}
