import {
  Course,
  CourseDocument,
  OFileUpload,
  UpdateLessonArgs,
  UpdateProgressArgs,
  UserAnswersArgs,
} from 'src/lib/types/backend_modal';

import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export interface ProgressState {
  courseDetail: Course;
  selectedDoc: CourseDocument;
  selectedVideo: OFileUpload;
  currentLesson: string;
  isDoneVideo: boolean;
  updateParams: UpdateProgressArgs;
  answerSheet: UserAnswersArgs[];
  loading: boolean;
  error: string | null;
}

const initialState: ProgressState = {
  courseDetail: {} as Course,
  selectedDoc: {} as CourseDocument,
  selectedVideo: {} as OFileUpload,
  currentLesson: '',
  isDoneVideo: false,
  updateParams: {} as UpdateProgressArgs,
  answerSheet: [],
  loading: false,
  error: null,
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setSelectedDoc: (state, action: PayloadAction<any>) => {
      state.selectedDoc = action.payload;
      state.selectedVideo = {} as OFileUpload;
      state.isDoneVideo = false;
    },
    setSelectedVideo: (state, action: PayloadAction<any>) => {
      state.selectedVideo = action.payload;
      state.selectedDoc = {} as CourseDocument;
      state.isDoneVideo = false;
    },
    setCompleteVideo: (state) => {
      state.isDoneVideo = true;
    },
    setCurrentLesson: (state, action: PayloadAction<any>) => {
      state.currentLesson = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUpdateParams: (state, action: PayloadAction<UpdateProgressArgs>) => {
      state.updateParams = action.payload;
    },
    updateProgress: (state, action: PayloadAction<any>) => {
      // // console.log('action in reduce', action);
      console.log('action.payload :>> ', action.payload);
      const cloneStateLesson = [...current(state.updateParams.lessons)];
      const idx = cloneStateLesson.findIndex((v) => v.lesson_id === action.payload.lesson_id);
      if (~idx) {
        cloneStateLesson.splice(idx, 1, action.payload);
      }
      console.log('cloneState :>> ', cloneStateLesson);
      state.updateParams.lessons = cloneStateLesson;
      // arrWithout.push(action.payload);
      // // console.log('arrWithout :>> ', arrWithout);
      // state.updateParams = arrWithout;
      // console.log('state.up :>> ', state.updateParams);
      // state.updateParams = action.payload;
    },
    updateCheckedAnswer: (state, action: PayloadAction<any>) => {
      if (!state.answerSheet.length) {
        state.answerSheet = action.payload;
      }

      const idxAnswer = state.answerSheet.findIndex((v) => v.quiz_id === action.payload.quiz_id);
      if (~idxAnswer) {
        state.answerSheet.splice(idxAnswer, 1, action.payload);
      }
    },
    setCourse: (state, action: PayloadAction<Course>) => {
      console.log('copurse set cot', action.payload);
      state.courseDetail = action.payload;
    },
  },
});

export const progressAction = progressSlice.actions;

export default progressSlice.reducer;
