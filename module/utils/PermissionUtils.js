import {PermissionsAndroid, Platform} from 'react-native';

export const checkPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 23) {
    const result = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (result) {
      console.log('Permission is OK');
      return true;
    } else {
      const permissionResult = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (permissionResult) {
        return true;
      } else {
        return false;
      }
    }
  }
};
