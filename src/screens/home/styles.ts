import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 14,
    paddingLeft: 15,
    marginTop: 10,
  },
  separator: {
    width: 15,
  },
  categoryItemIndicator: {
    width: '100%',
    height: 1,
    marginBottom: 20,
    backgroundColor: Colors.gray100,
  },
  brandTitle: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 15,
    marginLeft: 15,
  },
  modelTitle: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 15,
    marginTop: 18,
    marginLeft: 15,
  },

  categoryItemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  categoryItemIcon: {
    fontSize: 14,
  },
  categoryItemText: {
    fontSize: 13,
  },
  brandItemContainer: {
    padding: 10,
    borderRadius: 5,
  },
  modelListContainer: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
});
