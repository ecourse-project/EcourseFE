import { IdcardFilled } from '@ant-design/icons';
import { call, delay, ForkEffect, put, takeLatest, all } from '@redux-saga/core/effects';
import { Action } from 'redux';
import { AlertTextError } from 'src/alert/NotificationAlert';
import CampaignNftService from 'src/services/campaign-nft';
import { ActionBase } from '..';
import AppAction from '../app/action';
import CampaignNftAction from './actions';

function* watchGetListCampaignNftSaga(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });
    yield delay(1000);
    const dataSearch = action.payload;
    const listCampaignNfts = yield call(CampaignNftService.listCampaignNFT, dataSearch);
    yield put({
      type: CampaignNftAction.GET_LIST_CAMPAIGN_NFT_SUCCESS,
      payload: listCampaignNfts,
    });
  } catch (error: any) {
    AlertTextError(error.message, true);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* watchGetCampaignNFtDetailSaga(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });
    const id = action.payload;
    const campaignNftDetail = yield call(CampaignNftService.getCampaignNFT, id);
    yield put({
      type: CampaignNftAction.GET_CAMPAIGN_NFT_DETAIL_SUCCESS,
      payload: campaignNftDetail,
    });
  } catch (error: any) {
    AlertTextError(error.message, true);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* watchGetCampaignPublicAndPrivateData(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });
    const { page, limit, id } = action.payload;
    const [publicData, homeownersMailedData, interactionsData] = yield all([
      call(CampaignNftService.getNFTMetadata, id),
      call(CampaignNftService.getHomeownersMailedDetails, page, limit, id),
      call(CampaignNftService.getCampaignInteractions, page, limit, id),
    ]);
    yield put({
      type: CampaignNftAction.GET_CAMPAIGN_PUBLIC_DATA_SUCCESS,
      payload: publicData,
    });
    yield put({
      type: CampaignNftAction.GET_CAMPAIGN_HOMEOWNERSMAILED_SUCCESS,
      payload: homeownersMailedData,
    });
    yield put({
      type: CampaignNftAction.GET_CAMPAIGN_INTERACTIONS_SUCCESS,
      payload: interactionsData,
    });
  } catch (error: any) {
    AlertTextError(error.message, true);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* watchGetCampaignPublicData(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });
    const id = action.payload;
    const publicData = yield call(CampaignNftService.getNFTMetadata, id);
    yield put({
      type: CampaignNftAction.GET_CAMPAIGN_PUBLIC_DATA_SUCCESS,
      payload: publicData,
    });
  } catch (error: any) {
    AlertTextError(error.message, true);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* watchGetCampaignHomeownersMailedData(action: ActionBase) {
  try {
    const { page, limit, id } = action.payload;
    const homeownersMailedData = yield call(CampaignNftService.getHomeownersMailedDetails, page, limit, id);
    yield put({
      type: CampaignNftAction.GET_CAMPAIGN_HOMEOWNERSMAILED_SUCCESS,
      payload: homeownersMailedData,
    });
  } catch (error: any) {
    AlertTextError(error.message, true);
  }
}

function* watchGetCampaignInteractionsData(action: ActionBase) {
  try {
    const { page, limit, id } = action.payload;
    const interactionsData = yield call(CampaignNftService.getCampaignInteractions, page, limit, id);
    yield put({
      type: CampaignNftAction.GET_CAMPAIGN_INTERACTIONS_SUCCESS,
      payload: interactionsData,
    });
  } catch (error: any) {
    AlertTextError(error.message, true);
  }
}

function* watchGetBlurImage(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });
    const { raw_url } = action.payload;
    const blurImageData = yield call(CampaignNftService.blurImage, { raw_url });
    yield put({
      type: CampaignNftAction.GET_BLUR_IMAGE_SUCCESS,
      payload: blurImageData,
    });
  } catch (error: any) {
    AlertTextError(error.message, true);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* campaignNftSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield takeLatest(CampaignNftAction.GET_LIST_CAMPAIGN_NFT, watchGetListCampaignNftSaga);
  yield takeLatest(CampaignNftAction.GET_CAMPAIGN_NFT_DETAIL, watchGetCampaignNFtDetailSaga);
  yield takeLatest(CampaignNftAction.GET_CAMPAIGN_PUBLIC_AND_PRIVATE_DATA, watchGetCampaignPublicAndPrivateData);
  yield takeLatest(CampaignNftAction.GET_CAMPAIGN_PUBLIC_DATA, watchGetCampaignPublicData);
  yield takeLatest(CampaignNftAction.GET_CAMPAIGN_HOMEOWNERSMAILED, watchGetCampaignHomeownersMailedData);
  yield takeLatest(CampaignNftAction.GET_CAMPAIGN_INTERACTIONS, watchGetCampaignInteractionsData);
  yield takeLatest(CampaignNftAction.GET_BLUR_IMAGE, watchGetBlurImage);
}

export default campaignNftSaga;
