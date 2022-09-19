// import { apiIns } from 'src/config/apiClient';
import apiURL from 'src/apis';
import { apiClient } from 'src/config/apiClient';
import {
	Course,
	Document,
	OCart,
	OIsExist,
	OPasswordChange,
	OPasswordRest,
	OutputAdd,
	OutputCancel,
	OutputOrder,
	OutputRemove,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';

class CourseService {
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

	static createOrder(): Promise<OutputOrder> {
		return apiClient.get(apiURL.createOrder());
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
}
export default CourseService;
