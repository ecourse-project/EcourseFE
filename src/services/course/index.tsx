// import { apiIns } from 'src/config/apiClient';
// import apiURL from 'src/apis';
import { apiClient } from 'src/config/apiClient';
import {
	CalculatePriceArgs,
	Course,
	CourseComment,
	CreateOrderArg,
	Document,
	FavoriteList,
	MoveEnum,
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
	Quiz,
	QuizResult,
	QuizResultArgs,
	RateCourseArgs,
	RateDocArgs,
	Rating,
	TotalPrice,
	UpdateLessonArgs,
	UpdateProgressArgs,
	User,
} from 'src/models/backend_modal';

const apiURL = {
	login: () => 'api/users-auth/token/',
	me: () => 'api/users/me/',
	register: () => 'api/users-auth/registration/',
	existEmail: (email) => `api/users/exists/?email=${email}`,
	resetPwd: () => 'api/users/password-reset/',
	changePwd: () => 'api/users/password-change/',
	verifyToken: () => `api/users-auth/token/verify/`,

	getAllDocs: (limit, page) => `api/documents/?limit=${limit}&page=${page}`,
	getMostDownloadDocs: () => `api/documents/most-download/`,
	getUDocs: (limit, page) =>
		`api/documents/my-documents/?limit=${limit}&page=${page}`,
	getDocDetail: (id) => `api/documents/detail/?document_id=${id}`,

	getCart: () => `api/carts/info/`,
	getFavoriteList: () => `api/carts/favorite/info/`,
	moveDoc: (id, start, end) =>
		`api/carts/document/move/?document_id=${id}&start=${start}&end=${end}`,
	moveCourse: (id, start, end) =>
		`api/carts/course/move/?course_id=${id}&start=${start}&end=${end}`,

	getAllOrders: (limit, page) =>
		`api/payment/orders/?limit=${limit}&page=${page}`,
	getOrder: (id) => `api/payment/order/detail/?order_id=${id}`,
	createOrder: () => `/api/payment/order/create/`,
	cancelOrder: (id) => `api/payment/order/cancel/?order_id=${id}`,
	calculatePrice: () => `api/payment/order/calculate/`,

	getAllCourses: (limit, page) => `api/courses/?limit=${limit}&page=${page}`,
	getMostDownloadCourses: () => `api/courses/most-download/`,
	getUCourses: (limit, page) =>
		`api/courses/my-courses/?limit=${limit}&page=${page}`,
	getCourseDetail: (id) => `api/courses/detail/?course_id=${id}`,
	updateLessonProgress: () => `api/courses/update-lesson-progress/`,

	createComment: () => `api/comments/create/`,
	listComments: (id, limit, page) =>
		`api/comments/list/?course_id=${id}&limit=${limit}&page=${page}`,

	rateDocument: () => `api/rating/document/rate/`,
	rateCourse: () => `api/rating/course/rate/`,

	listQuiz: (id) => `api/quiz/?course_id=${id}`,
	getQuizResult: () => `api/quiz/result/`,
};

class CourseService {
	static myInfo(): Promise<User> {
		return apiClient.get(apiURL.me());
	}

	static register(
		email: string,
		password1: string,
		password2: string,
		full_name: string
	): Promise<ORegistration> {
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

	static changePwd(
		old_password: string,
		password1: string,
		password2: string
	): Promise<OPasswordChange> {
		return apiClient.post(apiURL.changePwd(), {
			old_password: old_password,
			password1: password1,
			password2: password2,
		});
	}

	static verifyToken(token: string): Promise<OVerifyToken> {
		return apiClient.post(apiURL.verifyToken(), { token: token });
	}

	static getAllDocs(params: PaginationParams): Promise<Pagination<Document>> {
		return apiClient.get(apiURL.getAllDocs(params.limit, params.page));
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

	static moveDoc(
		id: string,
		start: MoveEnum,
		end: MoveEnum
	): Promise<Document> {
		return apiClient.get(apiURL.moveDoc(id, start, end));
	}

	static moveCourse(
		id: string,
		start: MoveEnum,
		end: MoveEnum
	): Promise<Course> {
		return apiClient.get(apiURL.moveCourse(id, start, end));
	}

	static getAllOrders(
		params: PaginationParams
	): Promise<Pagination<OutputOrder>> {
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

	static getAllCourses(params: PaginationParams): Promise<Pagination<Course>> {
		return apiClient.get(apiURL.getAllCourses(params.limit, params.page));
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

	static createComment(
		owner_id: string,
		course_id: string,
		user_id: string,
		content: string
	): Promise<CourseComment> {
		return apiClient.post(apiURL.createComment(), {
			owner_id: owner_id,
			course_id: course_id,
			user_id: user_id,
			content: content,
		});
	}

	static listComments(
		id: string,
		limit: number,
		page: number
	): Promise<Pagination<CourseComment>> {
		return apiClient.get(apiURL.listComments(id, limit, page));
	}

	static rateDocument(params: RateDocArgs): Promise<Rating> {
		return apiClient.post(apiURL.rateDocument(), params);
	}

	static rateCourse(params: RateCourseArgs): Promise<Rating> {
		return apiClient.post(apiURL.rateCourse(), params);
	}

	static listQuiz(id: string): Promise<Quiz[]> {
		return apiClient.get(apiURL.listQuiz(id));
	}

	static getQuizResult(params: QuizResultArgs): Promise<QuizResult> {
		return apiClient.post(apiURL.getQuizResult(), params);
	}
}
export default CourseService;
