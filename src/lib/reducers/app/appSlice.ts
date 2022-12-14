import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { List } from 'antd';
import { OrderStatus } from 'src/components/order/order-item';
import {
  Course,
  CreateOrderArg,
  Document,
  FavoriteList,
  OCart,
  OutputOrder,
  Pagination,
  User,
} from 'src/lib/types/backend_modal';
import { SaleStatusEnum } from 'src/lib/types/backend_modal';
export interface AppState {
  appCart: OCart;
  listOrder: Pagination<OutputOrder>;
  listFav: FavoriteList;
  loading: number;
  user: User;
}

export enum LoadingEnum {
  INCREMENT = 'INCREMENT',
  DESCREMENT = 'DESCREMENT',
}

const initialState: AppState = {
  appCart: {} as OCart,
  listOrder: {} as Pagination<OutputOrder>,
  listFav: {} as FavoriteList,
  loading: 0,
  user: {} as User,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMyProfile: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    addDocToCart: (state, action: PayloadAction<Document>) => {
      console.log('add doc to cart ');
      state.appCart.documents.push({
        ...action.payload,
      });
    },
    removeDocFromCart: (state, action: PayloadAction<any>) => {
      state.appCart.documents = state.appCart.documents.filter((cart) => cart.id !== action.payload.id);
    },
    updateDocIsFav: (state, action: PayloadAction<Document>) => {
      if (action.payload.is_favorite) {
        state.listFav.documents.push(action.payload);
      } else {
        const favIdx = state.listFav.documents?.findIndex((v) => v.id === action.payload.id);
        if (favIdx >= 0) {
          state.listFav.documents = state.listFav.documents.filter((v) => v.id !== action.payload.id);
        }
      }
    },
    updateCourseIsFav: (state, action: PayloadAction<Course>) => {
      if (action.payload.is_favorite) {
        state.listFav.courses.push(action.payload);
      } else {
        const favIdx = state.listFav.courses?.findIndex((v) => v.id === action.payload.id);
        if (favIdx >= 0) {
          state.listFav.courses = state.listFav.courses.filter((v) => v.id !== action.payload.id);
        }
      }
    },
    addCourseToCart: (state, action: PayloadAction<Course>) => {
      console.log('add doc to cart', action.payload);

      state.appCart.courses.push({
        ...action.payload,
      });
    },
    removeCourseFromCart: (state, action: PayloadAction<Course>) => {
      state.appCart.courses = state.appCart.courses.filter((cart) => cart.id !== action.payload.id);
    },
    createOrder: (state, action: PayloadAction<OutputOrder>) => {
      state.listOrder.results.unshift(action.payload);
    },
    cancelOrder: (state, action: PayloadAction<OutputOrder>) => {
      state.listOrder.results.map((v) => (v.id === action.payload.id ? (v.status = OrderStatus.FAILED) : ''));
    },
    clearDocCart: (state, action: PayloadAction<CreateOrderArg>) => {
      action.payload.documents.forEach((v) => {
        state.appCart.documents = state.appCart.documents.filter((u) => {
          return u.id !== v;
        });
      });
    },
    clearCourseCart: (state, action: PayloadAction<CreateOrderArg>) => {
      action.payload.courses.forEach((v) => {
        state.appCart.courses = state.appCart.courses.filter((u) => {
          return u.id !== v;
        });
      });
    },
    //==========================================================================
    fetchListOrder: (state, action: PayloadAction<Pagination<OutputOrder>>) => {
      state.listOrder = action.payload;
    },
    fetchListCartSuccess: (state, action: PayloadAction<OCart>) => {
      state.appCart = action.payload;
    },
    fetchListFav: (state, action: PayloadAction<FavoriteList>) => {
      state.listFav = action.payload;
    },
    setAppLoading: (state, action: PayloadAction<string>) => {
      action.payload === LoadingEnum.INCREMENT
        ? (state.loading += 1)
        : state.loading > 0
        ? (state.loading -= 1)
        : (state.loading = 0);
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
