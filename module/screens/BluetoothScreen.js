import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Color} from '../const/Color';
import {icon} from '../const/Icons';
import {text} from '../const/Text';
import {BleService} from '../services/BleService';
import {checkPermission} from '../utils/PermissionUtils';
import ListItem from './components/ListItem';
import Scanning from './components/Scanning';
import Style from './Style';

//scanning time in seconds
const SCAN_TIMEOUT = 10;

const BluetoothScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [list, setList] = useState([]);
  const peripherals = new Map();

  useEffect(() => {
    handlePermission();
    return () => {
      BleService.removeListner();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePermission = async () => {
    const permission = await checkPermission();
    if (!permission) {
      Alert.alert(text.permissionRequired, [
        {
          text: text.openSetting,
          onPress: Linking.openSettings(),
        },
      ]);
    }
    BleService.startScan(SCAN_TIMEOUT);
    BleService.subscribeStartScanListener(handleScanStart);
    BleService.subscribeStopScanListener(handleScanComplete);
  };

  const handleScanStart = data => {
    if (!data.name) {
      return;
    }
    peripherals.set(data.id, data);
    setList(Array.from(peripherals.values()));
    return;
  };

  const handleScanComplete = () => {
    setScanned(true);
    setRefresh(false);
  };

  const onRefresh = async () => {
    // don't allow to refresh when already refreshing or first time scanning
    if (refresh) {
      return;
    }
    setRefresh(true);
    BleService.startScan();
  };

  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <Text style={Style.title}>{text.heading}</Text>
        {scanned && (
          <TouchableOpacity
            onPress={onRefresh}
            style={Style.refreshButtonContainer}>
            <IonIcon
              name={icon.refresh}
              size={25}
              style={Style.icon}
              color={Color.white}
            />
          </TouchableOpacity>
        )}
      </View>
      {!scanned ? (
        <Scanning />
      ) : (
        <FlatList
          data={list}
          contentContainerStyle={Style.flex}
          keyExtractor={(item, _) => item?.id}
          renderItem={({item}) => <ListItem item={item} />}
          ListEmptyComponent={() => {
            if (refresh) {
              return <></>;
            }
            return (
              <View style={Style.emptyListContainer}>
                <Text style={Style.noItemText}>{text.noDeviceFound}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={Style.separator} />}
        />
      )}
      {refresh && (
        <View style={Style.indicatorContainer}>
          <ActivityIndicator
            animating={true}
            color={Color.black}
            size="large"
          />
          <Text>{text.reScan}</Text>
        </View>
      )}
    </View>
  );
};

export default BluetoothScreen;
