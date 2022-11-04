import {NativeAppEventEmitter, ToastAndroid, Alert} from 'react-native';
import BleManager from 'react-native-ble-manager';

export class BleService {
  static init() {
    BleManager.start({showAlert: false});
    this.enableBlutooth();
  }

  static async startScan(defaultTimeout = 10) {
    await BleManager.scan([], defaultTimeout);
  }

  static stopScan() {
    BleManager.stopScan();
  }

  static subscribeStartScanListener(callback) {
    NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral', callback);
  }

  static subscribeStopScanListener(callback = () => {}) {
    NativeAppEventEmitter.addListener('BleManagerStopScan', callback);
  }

  static removeListner() {
    NativeAppEventEmitter.removeAllListeners('BleManagerDiscoverPeripheral');
    NativeAppEventEmitter.removeAllListeners('BleManagerStopScan');
  }

  static enableBlutooth = async () => {
    try {
      await BleManager.enableBluetooth();
      return true;
    } catch (error) {
      ToastAndroid.show('Bluetooth permission required', ToastAndroid.SHORT);
      return false;
    }
  };
}
