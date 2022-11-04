/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Color} from '../../const/Color';

const Style = StyleSheet.create({
  container: {
    backgroundColor: Color.blue,
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bluetooth: {
    backgroundColor: Color.lightBlue,
    width: '50%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 5,
  },
  message: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    fontSize: 18,
    color: Color.white,
  },
  listItem: {
    backgroundColor: Color.white,
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  deviceInfo: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  deviceIcon: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  deviceId: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default Style;
