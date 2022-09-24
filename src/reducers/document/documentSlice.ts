import {
	createAsyncThunk,
	createSlice,
	current,
	PayloadAction,
} from '@reduxjs/toolkit';
import { List, Statistic } from 'antd';
import { access, stat } from 'fs';
import { actionChannel } from 'redux-saga/effects';
import { OrderStatus } from 'src/components/order/order-card';
import {
	CreateOrderArg,
	Document,
	OCart,
	OutputOrder,
	Pagination,
} from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import { DocStatus } from 'src/utils/enum';
// import { fetchCount } from './counterAPI';

export interface DocumentState {
	loading: boolean;
	listDoc: Pagination<Document>;
	appCart: OCart;
	listBoughtDoc: Document[];
	listOrder: Pagination<OutputOrder>;
}

const initialState: DocumentState = {
	loading: false,
	listDoc: {} as Pagination<Document>,
	listOrder: {} as Pagination<OutputOrder>,
	appCart: {} as OCart,
	listBoughtDoc: [],
};

export const documentSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		fetchListDoc: (state, action: PayloadAction<Pagination<Document>>) => {
			state.listDoc = action.payload;
		},
		fetchListOrder: (state, action: PayloadAction<Pagination<OutputOrder>>) => {
			state.listOrder = action.payload;
		},
		createOrder: (state, action: PayloadAction<OutputOrder>) => {
			state.listOrder.results.push(action.payload);
		},
		cancelOrder: (state, action: PayloadAction<OutputOrder>) => {
			state.listOrder.results.map((v) =>
				v.id === action.payload.id ? (v.status = OrderStatus.FAILED) : ''
			);
		},
		updateCart: (state, action: PayloadAction<Document>) => {
			console.log('curernte', current(state));
		},
		addDocToCart: (state, action: PayloadAction<Document>) => {
			console.log('state', current(state));
			state.listDoc.results.map((v) => {
				v.id === action.payload.id ? (v.sale_status = DocStatus.IN_CART) : '';
			});
			state.appCart.documents.push({
				...action.payload,
				sale_status: DocStatus.IN_CART,
			});
			state.appCart.total_price += action.payload.price;
		},
		removeDocFromCart: (state, action: PayloadAction<Document>) => {
			console.log('state: ', current(state));
			state.listDoc.results.map((v) => {
				v.id === action.payload.id ? (v.sale_status = DocStatus.AVAILABLE) : '';
			});
			state.appCart.documents = state.appCart.documents.filter(
				(cart) => cart.id !== action.payload.id
			);
			state.appCart.total_price -= action.payload.price;
		},
		clearCart: (state, action: PayloadAction<CreateOrderArg>) => {
			state.appCart.documents.forEach((v) => {
				state.listDoc.results.map((u) => {
					u.id === v.id ? (u.sale_status = DocStatus.PENDING) : '';
				});
			});
			// will do the same with course
			action.payload.documents.forEach((v) => {
				state.appCart.documents = state.appCart.documents.filter((u) => {
					if (u.id === v) {
						state.appCart.total_price -= u.price;
					}
					return u.id !== v;
				});
			});
		},
		setTotalPrice: (state, action: PayloadAction<number>) => {
			state.appCart.total_price = action.payload;
		},

		//======================================
		fetchListCart: (state) => {
			state.loading = true;
		},
		fetchListCartSuccess: (state, action: PayloadAction<OCart>) => {
			state.loading = false;
			state.appCart = action.payload;
		},
		fetchListCartFail: (state) => {
			state.loading = false;
		},
	},
});

export const cartActions = documentSlice.actions;

export default documentSlice.reducer;
