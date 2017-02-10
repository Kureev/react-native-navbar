import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

export default class NavbarButton extends Component {
  render() {
    const { style, tintColor, margin, title, handler, disabled } = this.props;

    return (
      <TouchableOpacity style={styles.navBarButton} onPress={handler} disabled={disabled}>
        <View style={style}>
          <Text style={[styles.navBarButtonText, { color: tintColor, }, ]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    tintColor: PropTypes.string,
    title: PropTypes.string,
    handler: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    title: '',
    tintColor: '#0076FF',
    onPress: () => ({}),
  };
}
