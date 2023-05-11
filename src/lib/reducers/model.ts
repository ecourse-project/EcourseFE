import { AppState } from './app/appSlice';
import { CourseState } from './course/courseSlice';
import { DocumentState } from './document/documentSlice';
import { ProgressState } from './progress/progressSlice';

export interface RootState {
  app: AppState;
  document: DocumentState;
  course: CourseState;
  progress: ProgressState;
}
