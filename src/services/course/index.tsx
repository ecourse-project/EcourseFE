// import { apiIns } from 'src/config/apiClient';
import apiURL from 'src/apis';
import { apiClient } from 'src/config/apiClient';
import {
	Document,
	OCart,
	Order,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';

class CourseService {
	static getAll(params: PaginationParams): Promise<Pagination<Document>> {
		return apiClient.get(apiURL.getAllDoc(params.limit, params.page));
	}

	static getUserDoc(params: PaginationParams): Promise<Pagination<Document>> {
		return apiClient.get(apiURL.getUDoc(params.limit, params.page));
	}

	static getDocDetail(id: string): Promise<Document> {
		return apiClient.get(apiURL.getDocDetail(id));
	}

	static getCart(): Promise<OCart> {
		return apiClient.get(apiURL.getCart());
	}

	static addToCArt(id: string): Promise<any> {
		return apiClient.get(apiURL.addToCart(id));
	}

	static removeFromCart(id: string): Promise<any> {
		return apiClient.get(apiURL.removeFromCart(id));
	}

	static createOrder(): Promise<any> {
		return apiClient.get(apiURL.createOrder());
	}

	static getAllOrder(): Promise<Order> {
		return apiClient.get(apiURL.getAllOrder());
	}
}
export default CourseService;
