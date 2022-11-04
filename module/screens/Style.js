/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Color} from '../const/Color';

const Style = StyleSheet.create({
  container: {flex: 1},
  header: {
    backgroundColor: Color.blue,
    flexDirection: 'row',
    alignContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Color.white,
    height: 60,
  },
  title: {
    color: Color.white,
    flexDirection: 'row',
    flex: 1,
    marginVertical: 15,
    paddingLeft: 10,
    fontSize: 20,
  },
  refreshButtonContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {marginRight: 10},

  separator: {
    borderBottomColor: Color.black,
    borderBottomWidth: 1,
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  noItemText: {
    fontSize: 20,
    alignSelf: 'center',
  },
  flex: {
    flex: 1,
  },
  indicatorContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Style;
