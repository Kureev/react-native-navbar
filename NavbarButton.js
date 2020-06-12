import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import PropTypes from 'prop-types'
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NavbarButton(props) {
  const {
    style,
    icon,
    iconSize,
    tintColor,
    title,
    handler,
    disabled,
    accessible,
    accessibilityLabel
  } = props;

  return (
    <TouchableOpacity
      style={styles.navBarButton}
      onPress={handler}
      disabled={disabled}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={style}>
        <Text style={[styles.navBarButtonText, { color: tintColor }]}>
          { icon &&
            <Icon name={icon} size={iconSize} color={tintColor} /> 
          }  
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

NavbarButton.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  tintColor: PropTypes.string,
  title: PropTypes.string,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
  accessible: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
};

NavbarButton.defaultProps = {
  style: {},
  icon: '',
  iconSize: 22,
  title: '',
  tintColor: '#0076FF',
  disabled: false,
  handler: () => ({}),
};
