import { CourseDocument, OFileUpload } from 'src/models/backend_modal';

export interface CourseProgressContextType {
	selectedDoc: CourseDocument;
	selectedVideo: OFileUpload;
	currentLesson: string;
	isDoneVideo: boolean;
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
}
export const initialState: CourseProgressContextType = {
	selectedDoc: {} as CourseDocument,
	selectedVideo: {} as OFileUpload,
	currentLesson: '',
	isDoneVideo: false,
};
const reducer = (
	state = initialState,
	action: Action
): CourseProgressContextType => {
	switch (action.type) {
		case CourseProgressAction.SET_SELECTED_DOC:
			console.log('trigger action ', action.type);
			console.log('trigger action payload ', action.payload);

			return {
				...state,
				selectedDoc: action.payload,
				selectedVideo: {} as OFileUpload,
				isDoneVideo: false,
			};
		case CourseProgressAction.SET_SELECTED_VIDEO:
			console.log('trigger action ', action.type);
			console.log('trigger action payload ', action.payload);

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
