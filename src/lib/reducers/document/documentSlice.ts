import { Document, Pagination } from 'src/lib/types/backend_modal';

import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export interface DocumentState {
  updateLoading: number;
  listDoc: Pagination<Document>;
  listBoughtDoc: Document[];
  mostDownDoc: Document[];
}

export enum LoadingEnum {
  INCREMENT = 'INCREMENT',
  DESCREMENT = 'DESCREMENT',
}

const initialState: DocumentState = {
  updateLoading: 0,
  listDoc: {} as Pagination<Document>,
  listBoughtDoc: [],
  mostDownDoc: [],
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    fetchListDoc: (state, action: PayloadAction<Pagination<Document>>) => {
      state.listDoc = action.payload;
    },

    fetchMostDoc: (state, action: PayloadAction<Document[]>) => {
      state.mostDownDoc = action.payload;
    },
    updateCart: (state, action: PayloadAction<Document>) => {
      // console.log('curernte', current(state));
    },
    updateLoading: (state, action) => {
      state.updateLoading =
        action.payload === LoadingEnum.INCREMENT
          ? state.updateLoading + 1
          : state.updateLoading > 0
          ? state.updateLoading - 1
          : 0;
    },
    updateStatusAddDoc: (state, action: PayloadAction<Document>) => {
      const idx = state.listDoc.results?.findIndex((v) => v.id === action.payload.id);
      if (idx >= 0) {
        state.listDoc.results.splice(idx, 1, action.payload);
      }
      const mostIdx = state.mostDownDoc?.findIndex((v) => v.id === action.payload.id);
      if (mostIdx < 0) return;
      state.mostDownDoc.splice(mostIdx, 1, action.payload);
    },
    updateStatusRemoveDoc: (state, action: PayloadAction<any>) => {
      const idx = state.listDoc.results?.findIndex((v) => v.id === action.payload.id);
      if (idx >= 0) {
        state.listDoc.results.splice(idx, 1, action.payload);
      }

      const mostIdx = state.mostDownDoc.findIndex((v) => v.id === action.payload.id);
      if (mostIdx < 0) return;
      state.mostDownDoc.splice(mostIdx, 1, action.payload);
    },
    setIsFavourite: (state, action: PayloadAction<Document>) => {
      const idxDoc = state.listDoc.results?.findIndex((v) => v.id === action.payload.id);
      if (idxDoc >= 0) {
        state.listDoc.results.splice(idxDoc, 1, action.payload);
      }
      const mostIdx = state.mostDownDoc?.findIndex((v) => v.id === action.payload.id);
      if (mostIdx >= 0) {
        state.mostDownDoc.splice(mostIdx, 1, action.payload);
      }
    },
    //======================================
  },
});

export const docActions = documentSlice.actions;

export default documentSlice.reducer;
