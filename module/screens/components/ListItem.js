/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Style from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {icon} from '../../const/Icons';
import {Color} from '../../const/Color';

const ListItem = ({item}) => {
  return (
    <View style={Style.listItem}>
      <View style={Style.deviceIcon}>
        <MaterialIcons name={icon.devices} size={35} color={Color.black} />
      </View>
      <View style={Style.deviceInfo}>
        <Text style={Style.deviceName}>{item?.name}</Text>
        <Text style={Style.deviceId}>{item?.id}</Text>
      </View>
    </View>
  );
};

export default ListItem;
