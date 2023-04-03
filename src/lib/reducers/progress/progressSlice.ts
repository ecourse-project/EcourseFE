import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseDocument, OFileUpload, UpdateLessonArgs, UserAnswersArgs } from 'src/lib/types/backend_modal';
export interface ProgressState {
  selectedDoc: CourseDocument;
  selectedVideo: OFileUpload;
  currentLesson: string;
  isDoneVideo: boolean;
  updateParams: UpdateLessonArgs[];
  answerSheet: UserAnswersArgs[];
  loading: boolean;
  error: string | null;
}

const initialState: ProgressState = {
  selectedDoc: {} as CourseDocument,
  selectedVideo: {} as OFileUpload,
  currentLesson: '',
  isDoneVideo: false,
  updateParams: [] as UpdateLessonArgs[],
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
    updateCheckedAnswer: (state, action: PayloadAction<any>) => {
      if (!state.answerSheet.length) {
        state.answerSheet = action.payload;
      }

      const idxAnswer = state.answerSheet.findIndex((v) => v.quiz_id === action.payload.quiz_id);
      if (~idxAnswer) {
        state.answerSheet.splice(idxAnswer, 1, action.payload);
      }
    },
  },
});

export const progressAction = progressSlice.actions;

export default progressSlice.reducer;
