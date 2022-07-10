export interface AppState {
  loading: number;
  theme: 'dark' | 'light';
  idModal: string | null;
  visibleModalMailingList: boolean;
  visibleModalButtonMailingList: boolean;
  visiblePaymentForm: boolean;
  visibleConFirmCampaign: boolean;
}
