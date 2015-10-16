import React, {
  Text,
  TouchableOpacity,
  Component,
  View,
  PropTypes,
} from 'react-native';
import styles from './styles';

export default class NavbarButton extends Component {
  render() {
    const { style, margin, title, handler } = this.props;
    return (
      <TouchableOpacity onPress={handler}>
        <View style={[styles.navbarButton, { margin, }, ]}>
          <Text style={style}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    style: PropTypes.object,
    margin: PropTypes.string,
    title: PropTypes.string,
    handler: PropTypes.func,
  }

  static defaultProps = {
    style: {},
    margin: '0px 0px 0px 0px',
    title: '',
    onPress: () => ({}),
  }
}
