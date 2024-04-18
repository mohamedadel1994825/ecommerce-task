import NetInfo from '@react-native-community/netinfo';
import { useMutation } from "react-query";

const useMutateFetchNetwork = () => {
    const fetchNetwork = () => {
        return NetInfo.fetch();
    }
    const { mutate, isLoading, data } = useMutation(fetchNetwork, {
        mutationKey: 'MutateFetchNetwork',
    });
    return {
        mutateFetchNetwork: mutate,
        isLoadingMutateFetchNetwork: isLoading,
        isNetworkConnectedAfterMutate: data?.isConnected
    };
};
export { useMutateFetchNetwork };
