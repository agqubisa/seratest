import React from 'react';

import Ant from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';

import {white} from '~common';

export function Icons({
  type = 'feather',
  name,
  size = 20,
  color = white,
  style = {},
}) {
  if (name) {
    switch (type) {
      case 'material':
        return (
          <MaterialIcons name={name} size={size} color={color} style={style} />
        );

      case 'octicon':
        return <Octicons name={name} size={size} color={color} style={style} />;

      case 'antdesign':
        return <Ant name={name} size={size} color={color} style={style} />;

      case 'entypo':
        return <Entypo name={name} size={size} color={color} style={style} />;

      case 'ionicon':
        return <IonIcons name={name} size={size} color={color} style={style} />;

      case 'material-community':
        return (
          <MaterialCommunity
            name={name}
            size={size}
            color={color}
            style={style}
          />
        );

      case 'simple-line-icon':
        return (
          <SimpleLine name={name} size={size} color={color} style={style} />
        );

      default:
        return <Feather name={name} size={size} color={color} style={style} />;
    }
  }
  return null;
}
