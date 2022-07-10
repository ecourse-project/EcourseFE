import { ForkEffect, put, takeLatest, call, all } from 'redux-saga/effects';
import OverviewService from 'src/services/overview';
import AppAction from '../app/action';
import HomeAction from './action';
import { ActionBase } from '..';

function* watchTop3Areas(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });

    const res = yield OverviewService.getOverviewTop3Areas(action.payload);
    yield put({
      type: HomeAction.UPDATE_OVERVIEW,
      payload: res?.neighbourhoods || [],
    });
    yield put({
      type: HomeAction.OVERVIEW_INFO,
      payload: { agent_id: res?.id, agent_name: res?.name },
    });
  } catch (error: any) {
    console.error('can not get getOverviewTop3Areas: ', error);
    yield put({
      type: HomeAction.UPDATE_OVERVIEW,
      payload: [],
    });
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* watchUserAgent(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });
    const res = yield OverviewService.getAgentInfo(action.payload);
    yield put({
      type: HomeAction.UPDATE_USER_AGENT,
      payload: res || {},
    });
  } catch (error: any) {
    yield put({
      type: HomeAction.UPDATE_USER_AGENT,
      payload: {},
    });
    console.error('can not get userAgent: ', error);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}
function* watchDataOnboarding(action: ActionBase) {
  const ssid = action.payload;
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });
    let resSoldHouses;
    const listTop3NH = yield OverviewService.getOverviewTop3Areas(ssid);
    if (listTop3NH?.id) {
      resSoldHouses = yield OverviewService.getAgentSoldHouses(ssid && listTop3NH?.id ? listTop3NH?.id : null);
    }
    yield put({
      type: HomeAction.UPDATE_OVERVIEW_ON_BOARDING,
      payload: listTop3NH?.neighbourhoods || [],
    });
    yield put({
      type: HomeAction.UPDATE_SOLD_HOUSE_ON_BOARDING,
      payload: resSoldHouses || [],
    });
  } catch (error: any) {
    yield put({
      type: HomeAction.UPDATE_OVERVIEW_ON_BOARDING,
      payload: [],
    });
    yield put({
      type: HomeAction.UPDATE_SOLD_HOUSE_ON_BOARDING,
      payload: [],
    });
    console.error('can not get Onboarding: ', error);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* homeSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(HomeAction.GET_TOP_AREAS, watchTop3Areas);
  yield takeLatest(HomeAction.GET_USER_AGENT, watchUserAgent);
  yield takeLatest(HomeAction.GET_DATA_ONBOARDING, watchDataOnboarding);
}

export default homeSaga;
