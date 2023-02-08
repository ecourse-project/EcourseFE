import { AppState } from './app/appSlice';
import { CourseState } from './course/courseSlice';
import { DocumentState } from './document/documentSlice';

export interface RootState {
  app: AppState;
  document: DocumentState;
  course: CourseState;
}
