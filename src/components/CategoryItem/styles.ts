import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  categoryItemContainer: {
    alignItems: 'center',
    // justifyContent: 'space-between',
    // height: 50,
  },
  categoryItemIcon: {
    fontSize: 14,
    // marginBottom: 8
  },
  categoryItemText: {
    fontSize: 13,
    marginTop: 10,
    height: 25
  },
  categoryItemIndicator: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    width: '100%',
    marginTop: 1,
  }
});
