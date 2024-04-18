import { ScreenEnum } from "@navigation";

export type RootStackParamList = {
    [ScreenEnum.Login]: undefined;
    [ScreenEnum.LocationAccess]: undefined;
    [ScreenEnum.Home]: { userId: string }; // Example of defining params for Home screen
    [ScreenEnum.ScanQr]: undefined;
    [ScreenEnum.Promotion]: undefined;
    [ScreenEnum.Unlock]: undefined;
    [ScreenEnum.TripHistoryDetails]: { tripId: string };
    [ScreenEnum.Notifications]: undefined;
    [ScreenEnum.Invoices]: undefined;
    [ScreenEnum.InvoicePdf]: { invoiceId: string };
    [ScreenEnum.TripsRating]: undefined;
    [ScreenEnum.QrScanner]: undefined;
    [ScreenEnum.History]: undefined;
    [ScreenEnum.Bikes]: undefined;
    [ScreenEnum.Scooters]: undefined;
    [ScreenEnum.Payment]: undefined;
    [ScreenEnum.PayUnPaid]: undefined;
    [ScreenEnum.AddPaymentMethod]: undefined;
    [ScreenEnum.MainStack]: undefined;
    [ScreenEnum.Auth]: undefined;
    [ScreenEnum.HomeStack]: undefined;
    [ScreenEnum.Loading]: undefined;
    [ScreenEnum.LanguageSelection]: undefined;
    [ScreenEnum.Onboarding]: undefined;
    [ScreenEnum.Main]: undefined;
    [ScreenEnum.Settings]: undefined;
    [ScreenEnum.Wallet]: undefined;
    // Add more screens and their params as needed
  };