import { CourseDocument, Lesson, OFileUpload, UpdateLessonArgs, UserAnswersArgs } from 'src/lib/types/backend_modal';

export interface CourseProgressContextType {
  selectedDoc: CourseDocument;
  selectedVideo: OFileUpload;
  currentLesson: string;
  isDoneVideo: boolean;
  updateParams: UpdateLessonArgs[];
  answerSheet: UserAnswersArgs[];
}

interface Action {
  type: CourseProgressAction;
  payload?: any;
}

export enum CourseProgressAction {
  SET_SELECTED_DOC = 'SET_SELECTED_DOC',
  SET_SELECTED_VIDEO = 'SET_SELECTED_VIDEO',
  SET_COMPLETE_VIDEO = 'SET_COMPLETE_VIDEO',
  SET_CURRENT_LESSON = 'SET_CURRENT_LESSON',
  UPDATE_CHECKED_ITEM = 'UPDATE_CHECKED_ITEM',
  UPDATE_CHECKED_ANSWER = 'UPDATE_CHECKED_ANSWER',
}

const reducer = (state: CourseProgressContextType, action: Action): CourseProgressContextType => {
  switch (action.type) {
    case CourseProgressAction.UPDATE_CHECKED_ANSWER:
      const currentAnswer = [...state.answerSheet];
      if (!currentAnswer.length) {
        return {
          ...state,
          answerSheet: action.payload,
        };
      }
      const idxAnswer = currentAnswer.findIndex((v) => v.question_id === action.payload.quiz_id);
      if (idxAnswer < 0) return state;
      currentAnswer.splice(idxAnswer, 1, action.payload);
      return {
        ...state,
        answerSheet: currentAnswer,
      };
    case CourseProgressAction.UPDATE_CHECKED_ITEM:
      const currentState = [...state.updateParams];
      if (!currentState.length) {
        return {
          ...state,
          updateParams: action.payload,
        };
      }
      const idx = currentState.findIndex((v) => v.lesson_id === action.payload.lesson_id);
      if (idx < 0) return state;
      currentState.splice(idx, 1, action.payload);
      return {
        ...state,
        updateParams: currentState,
      };
    case CourseProgressAction.SET_SELECTED_DOC:
      return {
        ...state,
        selectedDoc: action.payload,
        selectedVideo: {} as OFileUpload,
        isDoneVideo: false,
      };
    case CourseProgressAction.SET_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
        selectedDoc: {} as CourseDocument,
        isDoneVideo: false,
      };
    case CourseProgressAction.SET_CURRENT_LESSON:
      return {
        ...state,
        currentLesson: action.payload,
      };
    case CourseProgressAction.SET_COMPLETE_VIDEO:
      return {
        ...state,
        isDoneVideo: true,
      };
    default:
      return state;
  }
};

export default reducer;
