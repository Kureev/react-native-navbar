import {
  Image,
  TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';

export default class Left extends Component {
  render() {
    const charmander = 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif';
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={{ uri: charmander }}
          style={[{ width: 20, height: 20, }, this.props.style]}/>
      </TouchableOpacity>
    );
  }
}
