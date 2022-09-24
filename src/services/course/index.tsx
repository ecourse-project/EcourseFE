// import { apiIns } from 'src/config/apiClient';
import apiURL from 'src/apis';
import { apiClient } from 'src/config/apiClient';
import {
	Course,
	CreateOrderArg,
	Document,
	OCart,
	OIsExist,
	OPasswordChange,
	OPasswordRest,
	ORegistration,
	OutputAdd,
	OutputCancel,
	OutputOrder,
	OutputRemove,
	Pagination,
	PaginationParams,
	User,
} from 'src/models/backend_modal';

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

	static getAllDocs(params: PaginationParams): Promise<Pagination<Document>> {
		return apiClient.get(apiURL.getAllDocs(params.limit, params.page));
	}

	static getMostDownloadDocs(): Promise<Document> {
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

	static addDocToCArt(id: string): Promise<OutputAdd> {
		return apiClient.get(apiURL.addDocToCart(id));
	}

	static removeDocFromCart(id: string): Promise<OutputRemove> {
		return apiClient.get(apiURL.removeDocFromCart(id));
	}

	static addCourseToCArt(id: string): Promise<OutputAdd> {
		return apiClient.get(apiURL.addCourseToCart(id));
	}

	static removeCourseFromCart(id: string): Promise<OutputRemove> {
		return apiClient.get(apiURL.removeCourseFromCart(id));
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

	static getAllCourses(params: PaginationParams): Promise<Pagination<Course>> {
		return apiClient.get(apiURL.getAllCourses(params.limit, params.page));
	}

	static getUserCourses(params: PaginationParams): Promise<Pagination<Course>> {
		return apiClient.get(apiURL.getUCourses(params.limit, params.page));
	}

	static getCourseDetail(id: string): Promise<Course> {
		return apiClient.get(apiURL.getCourseDetail(id));
	}

	static createComment(
		owner_id: string,
		course_id: string,
		user_id: string,
		content: string
	): Promise<Comment> {
		return apiClient.post(apiURL.createComment(), {
			owner_id: owner_id,
			course_id: course_id,
			user_id: user_id,
			content: content,
		});
	}

	static listComments(id: string): Promise<Comment[]> {
		return apiClient.get(apiURL.listComments(id));
	}
}
export default CourseService;
