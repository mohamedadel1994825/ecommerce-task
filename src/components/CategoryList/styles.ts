import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    categoryTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 14,
        paddingLeft: 15,
        marginTop: 10,
    },
    categoryItemIndicator: {
        width: '100%',
        height: 1,
        marginBottom: 20,
        backgroundColor: Colors.gray100,
    },
});
