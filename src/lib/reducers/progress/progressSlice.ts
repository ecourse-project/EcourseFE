import {
  Course,
  CourseDocument,
  OFileUpload,
  QuizLocationEnum,
  UpdateProgressArgs,
  UserAnswersArgs,
} from 'src/lib/types/backend_modal';
import { cloneDeep } from 'lodash';
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { QuizLocation, SelectedQuizType } from 'src/lib/types/appType';
import { QuizAssignEnum } from 'src/lib/utils/enum';

export interface ProgressState {
  courseDetail: Course;
  selectedDoc: CourseDocument | null;
  selectedVideo: OFileUpload | null;
  currentLesson: string;
  isDoneVideo: boolean;
  updateParams: UpdateProgressArgs;
  answerSheet: UserAnswersArgs[];
  loading: boolean;
  error: string | null;
  selectedQuiz: SelectedQuizType | null;
  quizLocation: Array<QuizLocation>;
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
  selectedQuiz: null,
  quizLocation: [],
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setSelectedDoc: (state, action: PayloadAction<any>) => {
      state.selectedDoc = action.payload;
      state.selectedVideo = {} as OFileUpload;
      state.selectedQuiz = null;
      state.isDoneVideo = false;
    },
    setSelectedVideo: (state, action: PayloadAction<any>) => {
      state.selectedVideo = action.payload;
      state.selectedDoc = {} as CourseDocument;
      state.selectedQuiz = null;
      state.isDoneVideo = false;
    },
    setSelectedQuiz: (state, action: PayloadAction<SelectedQuizType | null>) => {
      state.selectedQuiz = action.payload;
      state.selectedVideo = {} as OFileUpload;
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
      const cloneStateLesson = [...current(state.updateParams.lessons)];
      const idx = cloneStateLesson.findIndex((v) => v.lesson_id === action.payload.lesson_id);
      if (~idx) {
        cloneStateLesson.splice(idx, 1, action.payload);
      }
      state.updateParams.lessons = cloneStateLesson;
    },
    updateCheckedAnswer: (state, action: PayloadAction<any>) => {
      if (!state.answerSheet.length) {
        state.answerSheet = action.payload;
      }

      const idxAnswer = state.answerSheet.findIndex((v) => v.question_id === action.payload.quiz_id);
      if (~idxAnswer) {
        state.answerSheet.splice(idxAnswer, 1, action.payload);
      }
    },
    setCourse: (state, action: PayloadAction<Course>) => {
      state.courseDetail = action.payload;
    },
    setQuizLocation: (state, action: PayloadAction<Array<QuizLocation>>) => {
      state.quizLocation = action.payload;
    },
    updateQuizLocation: (
      state,
      action: PayloadAction<{ lessonId: string; questionId: string; documentId: string }>,
    ) => {
      const prevState: Array<QuizLocation> = cloneDeep(state.quizLocation);
      const existedLessonIdx = prevState.findIndex((v) => v.lesson_id === action.payload.lessonId);

      if (existedLessonIdx >= 0) {
        const existedQuiz = prevState[existedLessonIdx]?.quiz?.findIndex((v) => v.order === action.payload.documentId);
        if (typeof existedQuiz === 'number' && existedQuiz >= 0) {
          if (action.payload.questionId === QuizAssignEnum.UNASSIGN_QUIZ) {
            prevState[existedLessonIdx]?.quiz?.splice(existedQuiz, 1);
          } else {
            prevState[existedLessonIdx]?.quiz?.splice(existedQuiz, 1, {
              id: action.payload.questionId,
              location: QuizLocationEnum.VIDEO,
              order: action.payload.documentId,
            });
          }
          state.quizLocation = prevState;
        } else {
          if (action.payload.questionId === QuizAssignEnum.UNASSIGN_QUIZ) {
            state.quizLocation = prevState;
          } else {
            const newLessonQuiz = {
              ...prevState[existedLessonIdx],
              quiz: [
                ...(prevState[existedLessonIdx]?.quiz || []),
                {
                  id: action.payload.questionId,
                  location: QuizLocationEnum.VIDEO,
                  order: action.payload.documentId,
                },
              ],
            };
            prevState[existedLessonIdx] = newLessonQuiz;
            state.quizLocation = prevState;
          }
        }
      } else {
        if (action.payload.questionId === QuizAssignEnum.UNASSIGN_QUIZ) {
          state.quizLocation = prevState;
        } else {
          state.quizLocation = [
            ...prevState,
            {
              lesson_id: action.payload.lessonId,
              quiz: [
                {
                  id: action.payload.questionId,
                  location: QuizLocationEnum.VIDEO,
                  order: action.payload.documentId,
                },
              ],
            },
          ];
        }
      }
    },
  },
});

export const progressAction = progressSlice.actions;

export default progressSlice.reducer;
