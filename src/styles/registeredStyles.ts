import {StyleSheet} from 'react-native';
import {AppStyles} from '@interfaces';

export default StyleSheet.create<AppStyles>({
  flex: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emptyImageStyle: {
    width: 350,
    aspectRatio: 800 / 660,
  },
  emptyText: {
    textAlign: 'center',
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
