import { Course, Pagination } from 'src/lib/types/backend_modal';

import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export interface CourseState {
  loading: boolean;
  listCourse: Pagination<Course>;
  mostDownCourse: Course[];
}

const initialState: CourseState = {
  loading: false,
  listCourse: {} as Pagination<Course>,
  mostDownCourse: [],
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    fetchListCourse: (state, action: PayloadAction<Pagination<Course>>) => {
      state.listCourse = action.payload;
    },
    fetchMostCourse: (state, action: PayloadAction<Course[]>) => {
      state.mostDownCourse = action.payload;
    },
    updateCart: (state, action: PayloadAction<Course>) => {
      // console.log('curernte', current(state));
    },
    updateStatusAddCourse: (state, action: PayloadAction<Course>) => {
      const idx = state.listCourse.results?.findIndex((v) => v.id === action.payload.id);
      if (idx >= 0) {
        state.listCourse.results.splice(idx, 1, action.payload);
      }

      const mostIdx = state.mostDownCourse?.findIndex((v) => v.id === action.payload.id);
      if (mostIdx < 0) return;
      state.mostDownCourse.splice(mostIdx, 1, action.payload);
    },
    updateStatusRemoveCourse: (state, action: PayloadAction<any>) => {
      const idx = state.listCourse.results?.findIndex((v) => v.id === action.payload.id);
      if (idx >= 0) {
        state.listCourse.results.splice(idx, 1, action.payload);
      }

      const mostIdx = state.mostDownCourse.findIndex((v) => v.id === action.payload.id);
      if (mostIdx < 0) return;
      state.mostDownCourse.splice(mostIdx, 1, action.payload);
    },
    setIsFavourite: (state, action: PayloadAction<Course>) => {
      const idxDoc = state.listCourse.results?.findIndex((v) => v.id === action.payload.id);
      if (idxDoc >= 0) {
        state.listCourse.results.splice(idxDoc, 1, action.payload);
      }
      const mostIdx = state.mostDownCourse?.findIndex((v) => v.id === action.payload.id);
      if (mostIdx >= 0) {
        state.mostDownCourse.splice(mostIdx, 1, action.payload);
      }
    },
  },
});

export const courseAction = courseSlice.actions;

export default courseSlice.reducer;
