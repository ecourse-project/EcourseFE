import HomeAction from 'src/reducers/home/action';
import { HomeState } from 'src/reducers/home/model';
import { ActionBase } from '..';
import { handleFormatDataResponse } from 'src/utils/utils';

const initialState: HomeState = {
  overviews_info: {},
  overviews: [],
  overviewsOnBoarding: [],
  soldHouse: [],
  compareArea: [],
  userAgent: {},
  website_domain: null,
  listAgent: {
    results: [],
    count: 0,
  },
  is_refresh: false,
};

const homeReducer = (state = initialState, action: ActionBase): HomeState => {
  if (!action.type.includes('@home')) {
    return state;
  }
  switch (action.type) {
    case HomeAction.OVERVIEW_INFO:
      return {
        ...state,
        overviews_info: action.payload,
      };
    case HomeAction.UPDATE_OVERVIEW:
      return {
        ...state,
        overviews: action.payload,
      };
    case HomeAction.UPDATE_OVERVIEW_ON_BOARDING:
      return {
        ...state,
        overviewsOnBoarding: handleFormatDataResponse(action?.payload),
      };
    case HomeAction.UPDATE_SOLD_HOUSE_ON_BOARDING:
      return {
        ...state,
        soldHouse: action?.payload,
      };
    case HomeAction.UPDATE_COMPARE_AREA:
      return {
        ...state,
        compareArea: action.payload,
      };
    case HomeAction.UPDATE_USER_AGENT:
      return {
        ...state,
        userAgent: action.payload,
      };
    case HomeAction.UPDATE_DOMAIN_WEBSITE:
      return {
        ...state,
        website_domain: action.payload,
      };
    case HomeAction.UPDATE_LIST_AGENT:
      return {
        ...state,
        listAgent: action.payload,
      };
    case HomeAction.IS_REFRESHED:
      return {
        ...state,
        is_refresh: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default homeReducer;
