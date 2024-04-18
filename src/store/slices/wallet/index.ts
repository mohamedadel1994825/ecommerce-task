
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { RootState } from "@types";
export interface WalletRootState {
    unpaid: number,
    invoices: any[],
    isOpenPaymentSuccessModal: boolean,
    isOpenPaymentFailureModal: boolean,
    // totalPaymentPurchases: 0,
    isPaymentSuccess: boolean,
    paymentDescription: string,
    selectedPackage: {},
    paymentData: null
}
const initialState: WalletRootState = {
    unpaid: 0,
    invoices: [],
    isOpenPaymentSuccessModal: false,
    isOpenPaymentFailureModal: false,
    // totalPaymentPurchases: 0,
    isPaymentSuccess: false,
    paymentDescription: "",
    selectedPackage: "",
    paymentData: null
}

const slice: Slice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        togglePaymentSuccessModal: (state: WalletRootState, action: PayloadAction<{
            isOpenPaymentSuccessModal: boolean,
            isOpenPaymentFailureModal: boolean,
            isPaymentSuccess: boolean,
            paymentDescription: string,
            paymentData: any
        }>) => {
            state.isOpenPaymentSuccessModal = action.payload.isOpenPaymentSuccessModal,
                state.isOpenPaymentFailureModal = action.payload.isOpenPaymentFailureModal,
                // totalPaymentPurchases: action.payload.total,
                state.isPaymentSuccess = action.payload.isPaymentSuccess,
                state.paymentDescription = action.payload.paymentDescription,
                state.paymentData = action.payload.paymentData
        },
        setSelectedPackage: (state: WalletRootState, action: PayloadAction<string>) => {
            state.selectedPackage = action.payload
        }
    }
})

// Action Creators
const { togglePaymentSuccessModal, setSelectedPackage } = slice.actions;

// App Object
const Wallet = {
    slice,
    togglePaymentSuccessModal,
    setSelectedPackage,
};
export const selectWallet = (state: RootState) => state?.wallet;

export { Wallet };
