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
  handler: PropTypes.func,
};

const StatusBarShape = {
  type: PropTypes.oneOf(['light-content', 'default', ]).isRequired,
  tintColor: PropTypes.string,
};

export default class NavigationBar extends Component {
  componentDidMount() {
    StatusBarIOS.setStyle(this.props.statusBar, false);
  }

  componentWillReceiveProps(props) {
    if (props.statusBar !== this.props.statusBar) {
      StatusBarIOS.setStyle(this.props.statusBar, false);
    }
  }

  getButtonElement(data) {
    if (data._isReactElement) {
      return data;
    }

    return <NavbarButton
      title={data.title}
      style={data.style}
      handler={data.handler} />;
  }

  getTitleElement() {
    const { title } = this.props;

    if (title._isReactElement) {
      return <View style={styles.customTitle}>{title}</View>;
    }

    return <Text style={styles.navBarTitleText}>{title}</Text>;
  }

  render() {
    return (
      <View style={[styles.navBarContainer, this.props.barTintColor, ]}>
        <View style={[styles.statusBar, ]} />
        <View style={[styles.navBar, this.props.style, ]}>
          {this.getTitleElement()}
          {this.getButtonElement(this.props.leftButton)}
          {this.getButtonElement(this.props.rightButton)}
        </View>
      </View>
    );
  }

  static propTypes = {
    style: PropTypes.object,
    barTintColor: PropTypes.string,
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
      type: 'default',
    },
    title: '',
  }
}
