import { ForkEffect, put, select, takeLatest } from 'redux-saga/effects';
import { ActionBase } from '..';
import CampaignNftAction from '../campaign-nft/actions';
import { RootState } from '../model';
import UserAction from './action';

function* watchAddNewOrder(action: ActionBase) {
  const data = yield action.payload;
  const currentListOrders = yield select((state: RootState) => state.campaignNft.listCampaignPastOrder);
  if (!data && !currentListOrders) return;
  currentListOrders.push(data);
  yield put({
    type: CampaignNftAction.GET_LIST_CAMPAIGN_ORDERS,
    payload: [...currentListOrders],
  });
}

function* userSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(UserAction.ADD_NEW_ORDER, watchAddNewOrder);
}

export default userSaga;
