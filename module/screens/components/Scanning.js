/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Color} from '../../const/Color';
import {icon} from '../../const/Icons';
import {text} from '../../const/Text';
import Style from './Style';

const Scanning = () => {
  return (
    <View style={Style.container}>
      <View style={Style.bluetooth}>
        <Feather name={icon.bluetooth} size={50} color={Color.white} />
      </View>
      <Text style={Style.message}>{text.scanning}</Text>
    </View>
  );
};

export default Scanning;
