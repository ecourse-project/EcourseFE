import UserAction from 'src/reducers/user/action';
import { UserState } from 'src/reducers/user/model';
import { ActionBase } from '..';

const initialState: UserState = {
  publicProfile: null,
  userAssets: null,
  agentPastOrders: null,
  campaignAssets: {},
  listMembersSearch: null,
  listMembersSearchfile: null,
  is_agentlookup: false,
  is_skipsetup: false,
  isProspectLookup: false,
  saveCardList: null,
};

const userReducer = (state = initialState, action: ActionBase): UserState => {
  if (!action.type.includes('@user')) {
    return state;
  }
  switch (action.type) {
    case UserAction.UPDATE_PUBLIC_PROFILE:
      return {
        ...state,
        publicProfile: action.payload,
      };
    case UserAction.USER_ASSETS:
      return {
        ...state,
        userAssets: action.payload,
      };
    case UserAction.AGENT_PAST_ORDERS:
      return {
        ...state,
        agentPastOrders: action.payload,
      };
    case UserAction.CAMPAIGN_ASSETS:
      return {
        ...state,
        campaignAssets: action.payload,
      };
    case UserAction.GET_LIST_MEMBERS_SEARCH:
      return {
        ...state,
        listMembersSearch: action.payload,
      };
    case UserAction.GET_LIST_MEMBERS_SEARCH_FILE:
      return {
        ...state,
        listMembersSearchfile: action.payload,
      };
    case UserAction.IS_AGENTLOOKUP:
      return {
        ...state,
        is_agentlookup: action.payload,
      };
    case UserAction.IS_PROSPECT_LOOKUP:
      return {
        ...state,
        isProspectLookup: action.payload,
      };
    case UserAction.IS_SKIPSETUP:
      return {
        ...state,
        is_skipsetup: action.payload,
      };
    case UserAction.SAVE_CARD_LIST:
      return {
        ...state,
        saveCardList: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
