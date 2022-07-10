import { ActionBase } from '..';
import CampaignNftAction from './actions';
import { CampaignNftState } from './model';

const initialState: CampaignNftState = {
  listCampaignNfts: {
    count: 0,
    results: [],
  },
  campaignNftDetail: null,
  listCampaignAudience: null,
  listCampaignPastOrder: null,
  campaignPublicData: null,
  campaignInteractions: {
    count: 0,
    results: [],
  },
  campaignHomeownersMailed: {
    count: 0,
    results: [],
  },
  dataCampaign: null,
  blurImage: null,
};

const campaignNftReducer = (state = initialState, action: ActionBase): CampaignNftState => {
  if (!action.type.includes('@campaign-nft')) return state;
  switch (action.type) {
    case CampaignNftAction.GET_LIST_CAMPAIGN_NFT_SUCCESS:
      return {
        ...state,
        listCampaignNfts: action.payload,
      };
      break;
    case CampaignNftAction.GET_CAMPAIGN_NFT_DETAIL_SUCCESS:
      return {
        ...state,
        campaignNftDetail: action.payload,
      };
    case CampaignNftAction.GET_LIST_CAMPAIGN_AUDIENCE:
      return {
        ...state,
        listCampaignAudience: action.payload,
      };
    case CampaignNftAction.GET_LIST_CAMPAIGN_ORDERS:
      return {
        ...state,
        listCampaignPastOrder: action.payload,
      };
    case CampaignNftAction.GET_CAMPAIGN_PUBLIC_DATA_SUCCESS:
      return {
        ...state,
        campaignPublicData: action.payload,
      };
    case CampaignNftAction.GET_CAMPAIGN_HOMEOWNERSMAILED_SUCCESS:
      return {
        ...state,
        campaignHomeownersMailed: action.payload,
      };
    case CampaignNftAction.GET_CAMPAIGN_INTERACTIONS_SUCCESS:
      return {
        ...state,
        campaignInteractions: action.payload,
      };
    case CampaignNftAction.DATA_CAMPAIGN:
      return {
        ...state,
        dataCampaign: action.payload,
      };
    case CampaignNftAction.GET_BLUR_IMAGE_SUCCESS:
      return {
        ...state,
        blurImage: action.payload,
      };
    default:
      return state;
  }
};

export default campaignNftReducer;
