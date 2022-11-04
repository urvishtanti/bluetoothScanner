import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import BluetoothScreen from './module/screens/BluetoothScreen';
import {BleService} from './module/services/BleService';

const App = ({params}) => {
  useEffect(() => {
    BleService.init();
  }, []);
  return (
    <View style={styles.flex}>
      <BluetoothScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
