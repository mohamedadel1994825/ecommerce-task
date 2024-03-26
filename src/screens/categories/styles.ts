import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '@styles';

interface HomeStyles {
  hotDealsSection: ViewStyle;
  hotDealsSectionTitle: TextStyle;
  productsListContainer: ViewStyle;
  productsList: ViewStyle;
}

const HomeStyles = StyleSheet.create<HomeStyles>({
  hotDealsSection: {backgroundColor: Colors.black},
  hotDealsSectionTitle: {color: Colors.white},
  productsListContainer: {
    paddingLeft: 5,
  },
  productsList: {marginBottom: 6},
});

export default HomeStyles;
