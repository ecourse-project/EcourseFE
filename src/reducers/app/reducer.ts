import { ActionBase } from '..';
import AppAction from './action';
import { AppState } from './model';

const initialState: AppState = {
  loading: 0,
  theme: 'light',
  idModal: null,
  visibleModalMailingList: false,
  visibleModalButtonMailingList: false,
  visiblePaymentForm: false,
  visibleConFirmCampaign: false,
};
const appReducer = (state = initialState, action: ActionBase): AppState => {
  if (!action.type.includes('@app')) {
    return state;
  }
  switch (action.type) {
    case AppAction.APP_LOADING:
      return {
        ...state,
        loading: action.payload === 'INCREMENT' ? state.loading + 1 : state.loading > 0 ? state.loading - 1 : 0,
      };

    case AppAction.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case AppAction.VISIBLE_MODAL_ADD_MAILING:
      return {
        ...state,
        visibleModalMailingList: action.payload,
      };
    case AppAction.VISIBLE_MODAL_BUTTON_ADD_MAILING:
      return {
        ...state,
        visibleModalButtonMailingList: action.payload,
      };
    case AppAction.VISIBLE_PAYMENT_FORM:
      return {
        ...state,
        visiblePaymentForm: action.payload,
      };
    case AppAction.VISIBLE_CONFIRM_CAMPAIGN_MODAL:
      return {
        ...state,
        visibleConFirmCampaign: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default appReducer;
