import {
	createAsyncThunk,
	createSlice,
	current,
	PayloadAction,
} from '@reduxjs/toolkit';
import { Statistic } from 'antd';
import { access, stat } from 'fs';
import { actionChannel } from 'redux-saga/effects';
import { OrderStatus } from 'src/components/order/order-card';
import {
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
	listCartDoc: Document[];
	listBoughtDoc: Document[];
	totalPrice: number;
	listOrder: Pagination<OutputOrder>;
}

const initialState: DocumentState = {
	loading: false,
	listDoc: {} as Pagination<Document>,
	listOrder: {} as Pagination<OutputOrder>,
	listCartDoc: [],
	listBoughtDoc: [],
	totalPrice: 0,
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
		cancelOrder: (state, action: PayloadAction<OutputOrder>) => {
			state.listOrder.results.map((v) =>
				v.id === action.payload.id ? (v.status = OrderStatus.FAILED) : ''
			);
		},
		updateCart: (state, action: PayloadAction<Document>) => {
			console.log('curernte', current(state));
		},
		addToCart: (state, action: PayloadAction<Document>) => {
			console.log('state', current(state));
			state.listDoc.results.map((v) => {
				v.id === action.payload.id ? (v.sale_status = DocStatus.IN_CART) : '';
			});
			state.listCartDoc.push({
				...action.payload,
				sale_status: DocStatus.IN_CART,
			});
			state.totalPrice += action.payload.price;
		},
		removeFromCart: (state, action: PayloadAction<Document>) => {
			console.log('state: ', current(state));
			state.listDoc.results.map((v) => {
				v.id === action.payload.id ? (v.sale_status = DocStatus.AVAILABLE) : '';
			});
			state.listCartDoc = state.listCartDoc.filter(
				(cart) => cart.id !== action.payload.id
			);
			state.totalPrice -= action.payload.price;
		},
		clearCart: (state) => {
			state.listCartDoc.forEach((v) => {
				state.listDoc.results.map((u) => {
					u.id === v.id ? (u.sale_status = DocStatus.PENDING) : '';
				});
			});
			state.listCartDoc = [];
			state.totalPrice = 0;
		},
		setTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice = action.payload;
		},

		//======================================
		fetchListCart: (state) => {
			state.loading = true;
		},
		fetchListCartSuccess: (state, action: PayloadAction<OCart>) => {
			state.loading = false;
			state.totalPrice = action.payload.total_price;
			state.listCartDoc = action.payload.documents;
		},
		fetchListCartFail: (state) => {
			state.loading = false;
		},
	},
});

export const cartActions = documentSlice.actions;

export default documentSlice.reducer;
