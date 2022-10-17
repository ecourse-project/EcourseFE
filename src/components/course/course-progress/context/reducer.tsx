import {
	CourseDocument,
	Lesson,
	OFileUpload,
	UpdateLessonArgs,
} from 'src/models/backend_modal';

export interface CourseProgressContextType {
	selectedDoc: CourseDocument;
	selectedVideo: OFileUpload;
	currentLesson: string;
	isDoneVideo: boolean;
	updateParams: Lesson[];
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
}

const reducer = (
	state: CourseProgressContextType,
	action: Action
): CourseProgressContextType => {
	switch (action.type) {
		case CourseProgressAction.UPDATE_CHECKED_ITEM:
			console.log('trigger ', action);
			return {
				...state,
				updateParams: action.payload,
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
