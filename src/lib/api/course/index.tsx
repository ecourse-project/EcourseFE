// import { apiIns } from 'src/config/apiClient';
// import apiURL from 'src/apis';
import { apiClient } from 'src/lib/config/apiClient';
import {
  CalculatePriceArgs,
  Class,
  Course,
  CourseComment,
  CreateOrderArg,
  Document,
  FavoriteList,
  Homepage,
  MoveEnum,
  Nav,
  OCart,
  OIsExist,
  OPasswordChange,
  OPasswordRest,
  ORegistration,
  OutputAdd,
  OutputCancel,
  OutputOrder,
  OutputRemove,
  OVerifyToken,
  Pagination,
  PaginationParams,
  Post,
  Quiz,
  QuizResult,
  QuizResultArgs,
  RateCourseArgs,
  RateDocArgs,
  Rating,
  RatingEnum,
  RatingStats,
  RequestStatus,
  TotalPrice,
  UpdateLessonArgs,
  UpdateProgressArgs,
  User,
} from 'src/lib/types/backend_modal';

const parseParamsToUrL = (url: string, params: string[], paramsName: string) => {
  let newURL = url;
  const newParams = [...params];
  newURL += `&${paramsName}=${newParams.shift()}`;
  for (const i of newParams) {
    newURL += `&${paramsName}=${i}`;
  }
  return newURL;
};

export const apiURL = {
  login: () => 'api/users-auth/token/',
  refresh: () => 'api/users-auth/token/refresh/',
  me: () => 'api/users/me/',
  register: () => 'api/users-auth/registration/',
  existEmail: (email) => `api/users/exists/?email=${email}`,
  resetPwd: () => 'api/users/password-reset/',
  changePwd: () => 'api/users/password-change/',
  verifyToken: () => `api/users-auth/token/verify/`,

  getHomeDocs: (limit, page, topic?, document_id?: string[]) => {
    let url = `api/documents/home/?limit=${limit}&page=${page}&topic=${topic}`;
    if (document_id) {
      url = parseParamsToUrL(url, document_id, `document_id`);
    }
    return url;
  },
  getAllDocs: (limit, page, topic?, document_id?: string[]) => {
    let url = `api/documents/?limit=${limit}&page=${page}&topic=${topic}`;
    if (document_id) {
      url = parseParamsToUrL(url, document_id, `document_id`);
    }
    return url;
  },
  getMostDownloadDocs: () => `api/documents/most-download/`,
  getUDocs: (limit, page) => `api/documents/my-documents/?limit=${limit}&page=${page}`,
  getDocDetail: (id) => `api/documents/detail/?document_id=${id}`,

  getCart: () => `api/carts/info/`,
  getFavoriteList: () => `api/carts/favorite/info/`,
  moveDoc: (id, start, end) => `api/carts/document/move/?document_id=${id}&start=${start}&end=${end}`,
  moveCourse: (id, start, end) => `api/carts/course/move/?course_id=${id}&start=${start}&end=${end}`,

  getAllOrders: (limit, page) => `api/payment/orders/?limit=${limit}&page=${page}`,
  getOrder: (id) => `api/payment/order/detail/?order_id=${id}`,
  createOrder: () => `/api/payment/order/create/`,
  cancelOrder: (id) => `api/payment/order/cancel/?order_id=${id}`,
  calculatePrice: () => `api/payment/order/calculate/`,

  getHomeCourses: (limit, page, topic?, course_id?: string[]) => {
    let url = `api/courses/home/?limit=${limit}&page=${page}&topic=${topic}`;
    if (course_id) {
      url = parseParamsToUrL(url, course_id, `course_id`);
    }
    return url;
  },
  getAllCourses: (limit, page, topic?, course_id?: string[]) => {
    let url = `api/courses/?limit=${limit}&page=${page}&topic=${topic}`;
    if (course_id) {
      url = parseParamsToUrL(url, course_id, `course_id`);
    }
    return url;
  },
  getMostDownloadCourses: () => `api/courses/most-download/`,
  getUCourses: (limit, page) => `api/courses/my-courses/?limit=${limit}&page=${page}`,
  getCourseDetail: (id) => `api/courses/detail/?course_id=${id}`,
  updateLessonProgress: () => `api/courses/update-lesson-progress/`,

  createComment: () => `api/comments/create/`,
  listComments: (id, limit, page) => `api/comments/list/?course_id=${id}&limit=${limit}&page=${page}`,

  rateDocument: () => `api/rating/document/rate/`,
  rateCourse: () => `api/rating/course/rate/`,
  documentRatingStats: (document_id) => `document/rating/stats/?document_id=${document_id}`,
  courseRatingStats: (course_id) => `course/rating/stats/?course_id=${course_id}`,
  documentRatingFilter: (document_id, score) => `document/rating/filter/?document_id=${document_id}&score=${score}`,
  courseRatingFilter: (course_id, score) => `course/rating/filter/?course_id=${course_id}&score=${score}`,

  listQuiz: (id) => `api/quiz/?course_id=${id}`,
  getQuizResult: () => `api/quiz/result/`,
  downloadCerti: (course_id) => `api/quiz/certi/?course_id=${course_id}`,

  listHeaders: () => `api/settings/headers/`,
  getHome: () => `api/settings/home/`,
  initData: () => `api/settings/init/`,

  getHomeClasses: (limit, page, topic?, class_id?: string[]) => {
    let url = `api/classes/home/?limit=${limit}&page=${page}&topic=${topic}`;
    if (class_id) {
      url = parseParamsToUrL(url, class_id, `class_id`);
    }
    return url;
  },
  listClasses: (limit, page, topic?, class_id?: string[]) => {
    let url = `api/classes/?limit=${limit}&page=${page}&topic=${topic}`;
    if (class_id) {
      url = parseParamsToUrL(url, class_id, `class_id`);
    }
    return url;
  },
  getClassDetail: (class_id) => `api/classes/detail/?class_id=${class_id}`,
  requestJoinClass: () => `api/classes/join-request/`,

  getPostDetail: (post_id) => `api/posts/detail/&post_id=${post_id}`,
  listPosts: (limit, page, topic?, post_id?: string[]) => {
    let url = `api/posts/?limit=${limit}&page=${page}&topic=${topic}`;
    if (post_id) {
      url = parseParamsToUrL(url, post_id, `post_id`);
    }
    return url;
  },
};

class CourseService {
  static myInfo(): Promise<User> {
    return apiClient.get(apiURL.me());
  }

  static updateInfo(phone?: string, full_name?: string): Promise<User> {
    return apiClient.patch(apiURL.me(), {
      phone: phone,
      full_name: full_name,
    });
  }

  static register(email: string, password1: string, password2: string, full_name: string): Promise<ORegistration> {
    return apiClient.post(apiURL.register(), {
      email: email,
      password1: password1,
      password2: password2,
      full_name: full_name,
    });
  }

  static existEmail(email: string): Promise<OIsExist> {
    return apiClient.get(apiURL.existEmail(email));
  }

  static resetPwd(email: string): Promise<OPasswordRest> {
    return apiClient.post(apiURL.resetPwd(), { email: email });
  }

  static changePwd(old_password: string, password1: string, password2: string): Promise<OPasswordChange> {
    return apiClient.patch(apiURL.changePwd(), {
      old_password: old_password,
      password1: password1,
      password2: password2,
    });
  }

  static verifyToken(token: string): Promise<OVerifyToken> {
    return apiClient.post(apiURL.verifyToken(), { token: token });
  }

  static getAllDocs(params: PaginationParams, topic?: string, document_id?: string[]): Promise<Pagination<Document>> {
    return apiClient.get(apiURL.getAllDocs(params.limit, params.page, topic, document_id));
  }

  static getHomeDocs(params: PaginationParams, topic?: string, document_id?: string[]): Promise<Pagination<Document>> {
    return apiClient.get(apiURL.getHomeDocs(params.limit, params.page, topic, document_id));
  }

  static getMostDownloadDocs(): Promise<Document[]> {
    return apiClient.get(apiURL.getMostDownloadDocs());
  }

  static getUserDocs(params: PaginationParams): Promise<Pagination<Document>> {
    return apiClient.get(apiURL.getUDocs(params.limit, params.page));
  }

  static getDocDetail(id: string): Promise<Document> {
    return apiClient.get(apiURL.getDocDetail(id));
  }

  // static updateDoc(id: string): Promise<Document> {
  // 	return apiClient.patch(apiURL.getDocDetail(id));
  // }

  static deleteDoc(id: string): Promise<any> {
    return apiClient.delete(apiURL.getDocDetail(id));
  }

  static getCart(): Promise<OCart> {
    return apiClient.get(apiURL.getCart());
  }

  static getFavoriteList(): Promise<FavoriteList> {
    return apiClient.get(apiURL.getFavoriteList());
  }

  static moveDoc(id: string, start: MoveEnum, end: MoveEnum): Promise<Document> {
    return apiClient.get(apiURL.moveDoc(id, start, end));
  }

  static moveCourse(id: string, start: MoveEnum, end: MoveEnum): Promise<Course> {
    return apiClient.get(apiURL.moveCourse(id, start, end));
  }

  static getAllOrders(params: PaginationParams): Promise<Pagination<OutputOrder>> {
    return apiClient.get(apiURL.getAllOrders(params.limit, params.page));
  }

  static getOrder(id: string): Promise<OutputOrder> {
    return apiClient.get(apiURL.getOrder(id));
  }

  static createOrder(params: CreateOrderArg): Promise<OutputOrder> {
    return apiClient.post(apiURL.createOrder(), params);
  }

  static cancelOrder(id: string): Promise<OutputCancel> {
    return apiClient.get(apiURL.cancelOrder(id));
  }

  static calculatePrice(params: CalculatePriceArgs): Promise<TotalPrice> {
    return apiClient.post(apiURL.calculatePrice(), params);
  }

  static getAllCourses(params: PaginationParams, topic?: string, course_id?: string[]): Promise<Pagination<Course>> {
    return apiClient.get(apiURL.getAllCourses(params.limit, params.page, topic, course_id));
  }

  static getHomeCourses(params: PaginationParams, topic?: string, course_id?: string[]): Promise<Pagination<Course>> {
    return apiClient.get(apiURL.getHomeCourses(params.limit, params.page, topic, course_id));
  }

  static getMostDownloadCourses(): Promise<Course[]> {
    return apiClient.get(apiURL.getMostDownloadCourses());
  }

  static getUserCourses(params: PaginationParams): Promise<Pagination<Course>> {
    return apiClient.get(apiURL.getUCourses(params.limit, params.page));
  }

  static getCourseDetail(id: string): Promise<Course> {
    return apiClient.get(apiURL.getCourseDetail(id));
  }

  static updateLessonProgress(params: UpdateProgressArgs): Promise<any> {
    return apiClient.post(apiURL.updateLessonProgress(), params);
  }

  static createComment(owner_id: string, course_id: string, user_id: string, content: string): Promise<CourseComment> {
    return apiClient.post(apiURL.createComment(), {
      owner_id: owner_id,
      course_id: course_id,
      user_id: user_id,
      content: content,
    });
  }

  static listComments(id: string, limit: number, page: number): Promise<Pagination<CourseComment>> {
    return apiClient.get(apiURL.listComments(id, limit, page));
  }

  static rateDocument(params: RateDocArgs): Promise<Rating> {
    return apiClient.post(apiURL.rateDocument(), params);
  }

  static rateCourse(params: RateCourseArgs): Promise<Rating> {
    return apiClient.post(apiURL.rateCourse(), params);
  }

  static documentRatingStats(document_id: string): Promise<RatingStats> {
    return apiClient.get(apiURL.documentRatingStats(document_id));
  }

  static courseRatingStats(course_id: string): Promise<RatingStats> {
    return apiClient.get(apiURL.courseRatingStats(course_id));
  }

  static documentRatingFilter(document_id: string, score: RatingEnum): Promise<Rating> {
    return apiClient.get(apiURL.documentRatingFilter(document_id, score));
  }

  static courseRatingFilter(course_id: string, score: RatingEnum): Promise<Rating> {
    return apiClient.get(apiURL.courseRatingFilter(course_id, score));
  }

  static listQuiz(id: string): Promise<Quiz[]> {
    return apiClient.get(apiURL.listQuiz(id));
  }

  static getQuizResult(params: QuizResultArgs): Promise<QuizResult> {
    return apiClient.post(apiURL.getQuizResult(), params);
  }

  static downloadCerti(course_id: string): Promise<any> {
    return apiClient.get(apiURL.downloadCerti(course_id));
  }

  static listHeaders(): Promise<Nav[]> {
    return apiClient.get(apiURL.listHeaders());
  }

  static getHome(): Promise<Homepage[]> {
    return apiClient.get(apiURL.getHome());
  }

  static initData(): Promise<{ success: true }> {
    return apiClient.get(apiURL.initData());
  }

  static getHomeClasses(limit: number, page: number, topic?: string, class_id?: string[]): Promise<Pagination<Class>> {
    return apiClient.get(apiURL.getHomeClasses(limit, page, topic, class_id));
  }

  static listClasses(limit: number, page: number, topic?: string, class_id?: string[]): Promise<Pagination<Class>> {
    return apiClient.get(apiURL.listClasses(limit, page, topic, class_id));
  }

  static getClassDetail(class_id: string): Promise<Class> {
    return apiClient.get(apiURL.getClassDetail(class_id));
  }

  static requestJoinClass(class_id: string): Promise<{ request_status: RequestStatus }> {
    return apiClient.post(apiURL.requestJoinClass(), { class_id: class_id });
  }

  static listPosts(limit: number, page: number, topic?: string, post_id?: string[]): Promise<Pagination<Post>> {
    return apiClient.get(apiURL.listPosts(limit, page, topic, post_id));
  }

  static getPostDetail(post_id: string): Promise<Post> {
    return apiClient.get(apiURL.getPostDetail(post_id));
  }
}
export default CourseService;
