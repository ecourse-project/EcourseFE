// =========================================== BASE ===========================================

export interface PaginationParams {
  limit: number;
  page: number;
}

export interface Pagination<T> {
  link: {
    next: string;
    previous: string;
  };
  count: number;
  results: Array<T>;
}

export enum SaleStatusEnum {
  AVAILABLE = 'AVAILABLE',
  IN_CART = 'IN_CART',
  PENDING = 'PENDING',
  BOUGHT = 'BOUGHT',
}

// ===========================================Users Auth===========================================
export interface IRegistration {
  email: string;
  password1: string;
  password2: string;
  full_name: string;
}

export interface ORegistration {
  email: string;
  full_name: string;
}

export interface IToken {
  email: string;
  password: string;
}

export interface OToken {
  refresh: string;
  access: string;
}

export interface ITokenRefresh {
  refresh: string;
}

export interface OTokenRefresh {
  access: string;
}

export interface OVerifyToken {
  detail?: string;
  code?: string;
}

// ===========================================Users===========================================

export enum RoleEnum {
  MANAGER = 'MANAGER',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar: string;
  phone?: string;
  role: RoleEnum;
  is_testing_user: boolean;
  quiz_permission: boolean;
}

export interface OIsExist {
  exists: boolean;
}

export interface IPasswordRest {
  email: string;
}

export interface OPasswordRest {
  detail: string;
}

export interface IPasswordChange {
  old_password: string;
  password1: string;
  password2: string;
}

export interface OPasswordChange {
  detail: string;
}

// ===========================================Upload===========================================
export interface IFileUpload {
  file: string;
}

export interface OFileUpload {
  id: string;
  file_path: string;
  file_size: number;
  file_type: string;
  file_name: string;
  duration: number;
  file_embedded_url?: string;
  use_embedded_url?: boolean;
}

export interface IImageUpload {
  image: string;
  is_avatar?: boolean;
}

export interface OImageUpload {
  id: string;
  image_size: number;
  image_path: string;
  image_short_path: string;
  image_type: string;
  is_avatar: boolean;
}

export interface UploadImageSuccess {
  id: string;
  image_path: string;
  image_short_path: string;
  image_size: number;
  image_type: string;
  is_avatar: boolean;
}

// ===========================================Documents===========================================
export interface DocumentTopic {
  id: string;
  name: string;
}

export interface Document {
  id: string;
  created: string;
  modified: string;
  name: string;
  description: string;
  topic: string;
  price: number;
  sold: number;
  thumbnail: OImageUpload;
  file: OFileUpload;
  sale_status?: SaleStatusEnum;
  is_selling: boolean;
  views: number;
  // rating: number;
  num_of_rates: number;
  is_favorite?: boolean;
  // rating_detail?: Rating[];
  // my_rating?: Rating;
  download: boolean;
}

export interface IDocumentUpload {
  name: string;
  description: string;
  topic: string;
  price: number;
  image: string;
  file: string;
}

export interface ODocumentUpload {
  id: string;
  name: string;
  description: string;
  topic: string;
  price: number;
  sold: number;
  thumbnail: OImageUpload;
  file: OFileUpload;
  sale_status: string;
}

export interface Data {
  data: Document[];
}

export interface IDocumentUpdate {
  name: string;
  description: string;
  topic: string;
  price: number;
  image: string;
  file: string;
}

// ===========================================Courses===========================================
export enum ProgressStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export enum QuizLocationEnum {
  VIDEO = 'VIDEO',
  DOCUMENT = 'DOCUMENT',
}

export interface UpdateLessonArgs {
  lesson_id: string;
  completed_docs: string[];
  completed_videos: string[];
}

export interface UpdateProgressArgs {
  course_id: string;
  lessons: UpdateLessonArgs[];
}

export interface CourseDocument {
  id: string;
  modified: string;
  name: string;
  description: string;
  topic: string;
  file: OFileUpload;
}

export interface Topic {
  id: string;
  name: string;
}

export interface Lesson {
  id: string;
  name: string;
  lesson_number: number;
  content: string;
  videos: OFileUpload[];
  documents: CourseDocument[];
  docs_completed?: string[];
  videos_completed?: string[];
  quiz_detail?: QuizResult[];
  list_quiz: Quiz[];
  quiz_location?: Array<{ id: string; order: string; location: QuizLocationEnum }>;
}

export interface Course {
  id: string;
  modified: string;
  name: string;
  topic?: Topic;
  description?: string;
  price?: number;
  sold?: number;
  lessons?: Lesson[];
  progress?: number;
  status?: ProgressStatusEnum;
  thumbnail?: OImageUpload;
  sale_status?: SaleStatusEnum;
  // views: number;
  // rating: number;
  // num_of_rates: number;
  mark?: number;
  is_done_quiz?: boolean;
  is_favorite?: boolean;
  // rating_detail?: Rating[];
  // my_rating?: Rating;
  // rating_stats?: RatingStats;
  request_status?: RequestStatus;
  course_of_class?: boolean;
  test: boolean;
  author?: string;
}

// ===========================================Classes===========================================
export enum RequestStatus {
  ACCEPTED = 'accepted',
  REQUESTED = 'requested',
  AVAILABLE = 'available',
}

export interface Class {}

// ===========================================Comments===========================================
export interface ReplyComment {
  id: string;
  user: User;
  created: string;
  content: string;
}

export interface CourseComment {
  id: string;
  user: User;
  created: string;
  content: string;
  course_id: string;
  reply_comments: ReplyComment[];
}

// ===========================================Cart===========================================
export enum MoveEnum {
  LIST = 'LIST',
  CART = 'CART',
  FAVORITE = 'FAVORITE',
}

export interface OCart {
  id: string;
  total_price: number;
  documents: Document[];
  courses: Course[];
}

export interface FavoriteList {
  id: string;
  documents: Document[];
  courses: Course[];
}

export interface OutputAdd {
  message: string;
}

export interface OutputRemove {
  message: string;
}

// ===========================================Payment===========================================
export interface CreateOrderArg {
  documents: string[];
  courses: string[];
  total_price: number;
}

export interface OutputOrder {
  id: string;
  created: string;
  code: string;
  total_price: number;
  documents: Document[];
  courses: Course[];
  status: string;
}

export interface OutputCancel {
  message: string;
}

export interface CalculatePriceArgs {
  documents: string[];
  courses: string[];
}

export interface TotalPrice {
  total_price: number;
}

// ===========================================Rating===========================================
export enum RatingEnum {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export interface UserRatingInfo {
  full_name: string;
  avatar: string;
}

export interface RateDocArgs {
  document_id: string;
  // rating: RatingEnum;
  comment: string;
}

export interface RateCourseArgs {
  course_id: string;
  // rating: RatingEnum;
  comment: string;
}

export interface Rating {
  id: string;
  created: string;
  user: UserRatingInfo;
  // rating: RatingEnum;
  comment: string;
}

export interface RatingStats {
  score_1: number;
  score_2: number;
  score_3: number;
  score_4: number;
  score_5: number;
}

// ===========================================Quiz===========================================
export enum QuestionTypeEnum {
  CHOICES = 'CHOICES',
  MATCH = 'MATCH',
  FILL = 'FILL',
}

export enum ContentTypeEnum {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export interface MatchQuestion {
  id?: string;
  order?: number;
  time_limit?: number;
  content: string;
  first_column: Array<{ id: string; content_type: ContentTypeEnum; content: string }>;
  second_column: Array<{ id: string; content_type: ContentTypeEnum; content: string }>;
  correct_answer?: Array<Array<string>>;
  question_type: QuestionTypeEnum;
}

export interface FillBlankQuestion {
  id?: string;
  title: string;
  order?: number;
  time_limit?: number;
  content: string;
  full_content: string;
  hidden_words?: Array<{ id: number; word: string; hidden: boolean }>;
  question_type: QuestionTypeEnum;
}

export interface ChoicesQuestion {
  id?: string;
  order?: number;
  time_limit?: number;
  content: string;
  content_type?: ContentTypeEnum;
  choices: Array<{ choice?: string; choice_name: string; answer_type: ContentTypeEnum; answer: string }>;
  question_type: QuestionTypeEnum;
  correct_answer: { id: string; name: string };
}

export interface Question {
  id: string;
  order: number;
  time_limit?: number;
  question_type: QuestionTypeEnum;
  choices_question?: ChoicesQuestion;
  match_question?: MatchQuestion;
  fill_blank_question?: FillBlankQuestion;
}

export interface Quiz {
  id: string;
  name?: string;
  questions?: Question[];
}

export interface UserAnswersArgs {
  question_id: string;
  question_type: QuestionTypeEnum;
  answer: string | Array<string> | Array<Array<string>>;
}

export interface QuizResultArgs {
  id: string;
  course_id: string;
  lesson_id: string;
  user_answers: UserAnswersArgs[];
}

export interface AssignQuizArgs {
  course_id: string;
  quiz_location: Array<{
    lesson_id: string;
    quiz?: Array<{
      id: string;
      order: string;
      location: QuizLocationEnum;
    }>;
  }>;
}

export interface CreateQuizArgs {
  name: string;
}

export interface QuestionArgs {
  quiz_id: string;
  question: ChoicesQuestion | MatchQuestion | FillBlankQuestion;
}

export interface ChoicesQuestionAnswer {
  correct: number;
  total: number;
  result: Array<{ question_id: string; user_answer: string; correct_answer?: string }>;
}

export interface MatchQuestionAnswer {
  question_id: string;
  correct: number;
  total: number;
  user_answer: Array<Array<string>>;
  correct_answer?: Array<Array<string>>;
}

export interface FillQuestionAnswer {
  question_id: string;
  correct: number;
  total: number;
  user_answer: Array<string>;
  correct_answer?: Array<string>;
}

export interface QuizResult {
  id: string;
  name?: string;
  mark?: number;
  is_done_quiz: boolean;
  choices_question: ChoicesQuestionAnswer;
  match_question: MatchQuestionAnswer[];
  fill_question: FillQuestionAnswer[];
}

// ===========================================Setting===========================================
export enum NavTypeEnum {
  DOCUMENT = 'DOCUMENT',
  COURSE = 'COURSE',
  CLASS = 'CLASS',
  POST = 'POST',
}

export interface Topic {
  label: string;
  value: string;
}

export interface Nav {
  header: string;
  topic: Topic[];
  type: NavTypeEnum;
}

export interface HomepageDetail {
  document_id: string[];
  course_id: string[];
  class_id: string[];
  post_id: string[];
}

export interface Homepage {
  topic: string;
  detail: HomepageDetail;
}

export interface Home {
  homepage: Homepage[];
  category: string[];
}

export interface SearchItem {
  id: string;
  author?: string;
  name: string;
  thumbnail?: OImageUpload;
  content_summary?: string;
  type: NavTypeEnum;
}

// ===========================================Post===========================================
export interface Post {
  id: string;
  created?: string;
  modified?: string;
  name: string;
  topic?: string;
  thumbnail: OImageUpload;
  content?: string;
  content_summary: string;
}

// ===========================================Configuration===========================================
export interface PaymentInfo {
  method: string;
  payment_info: string;
  content: string;
}
