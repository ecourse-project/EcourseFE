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

// ===========================================Users Auth===========================================
// - POST: /api/users-auth/registration/
export interface IRegistration {
	email: string;
	password: string;
	password2: string;
	full_name: string;
}

export interface ORegistration {
	email: string;
	full_name: string;
}

// - POST: /api/users-auth/token/
export interface IToken {
	email: string;
	password: string;
}

export interface OToken {
	refresh: string;
	access: string;
}

// - POST: /api/users-auth/token/refresh/
export interface ITokenRefresh {
	refresh: string;
}

export interface OTokenRefresh {
	access: string;
}

// ===========================================Users===========================================
// - GET: /api/users/me/
export interface OProfile {
	id: string;
	email: string;
	full_name: string;
	avatar: string;
	phone: string;
}

// - GET: /api/users/exists/?email=binh@mail.com
export interface OIsExist {
	exists: boolean;
}

// - POST: /api/users/password-reset/
export interface IPasswordRest {
	email: string;
}

export interface OPasswordRest {
	detail: string;
}

// - POST: /api/users/password-change/
export interface IPasswordChange {
	old_password: string;
	password: string;
	password2: string;
}

export interface OPasswordChange {
	detail: string;
}

// ===========================================Upload===========================================
// - POST: /api/upload/upload-files/
export interface IFileUpload {
	file: string;
}

export interface OFileUpload {
	id: string;
	file_path: string;
	file_size: string;
	file_type: string;
}

// - POST: /api/upload/upload-images/
export interface IImageUpload {
	file: string;
}

export interface OImageUpload {
	id: string;
	image_path: string;
	image_size: string;
	image_type: string;
}

// ===========================================Documents===========================================
// - GET: /api/documents/?limit={number}&page={number}
// - GET: /api/documents/my-documents/?limit={number}&page={number}
export interface Document {
	id: string;
	created: string;
	modified: string;
	name: string;
	description: string;
	title: string;
	price: number;
	sold: number;
	thumbnail: OImageUpload;
	file: OFileUpload;
	sale_status: string;
}

// - POST: /api/documents/
// Ràng buộc chỉ cho upload duy nhất 1 ảnh và 1 file
export interface IDocumentUpload {
	name: string;
	description: string;
	title: string;
	price: number;
	image: string;
	file: string;
}

export interface ODocumentUpload {
	//----------> Là Document ở trên
	id: string;
	name: string;
	description: string;
	title: string;
	price: number;
	sold: number;
	thumbnail: OImageUpload;
	file: OFileUpload;
	sale_status: string;
}

export interface Data {
	data: Document[];
}

// - PUT/PATCH: /api/documents/detail/?document_id={id}
export interface IDocumentUpdate {
	name: string;
	description: string;
	title: string;
	price: number;
	image: string;
	file: string;
}

// - DELETE: /api/documents/detail/?document_id={id}
// Request/Response: None

// ===========================================Courses===========================================
export interface CourseDocument {
	id: string;
	created: string;
	modified: string;
	name: string;
	description: string;
	title: string;
	file: OFileUpload;
}

export interface Topic {
	id: string;
	created: string;
	modified: string;
	name: string;
}

export interface Lesson {
	id: string;
	created: string;
	modified: string;
	name: string;
	lesson_number: number;
	content: string;
	videos: OFileUpload[];
	documents: CourseDocument[];
	progress: number;
	status: string;
}

export interface Course {
	id: string;
	created: string;
	modified: string;
	name: string;
	topic: Topic;
	description: string;
	price: number;
	sold: number;
	lessons: Lesson[];
	progress: number;
	status: string;
	thumbnail: OImageUpload;
	sale_status: string;
}

// ===========================================Cart===========================================
// - GET: /api/carts/info/
export interface OCart {
	id: string;
	total_price: number;
	documents: Document[];
	courses: Course[];
}

// - GET: /api/carts/document/add/?document_id={id}
export interface OutputAdd {
	message: string;
}

// - GET: /api/carts/document/remove/?document_id={id}
export interface OutputRemove {
	message: string;
}

// ===========================================Payment===========================================
// - GET: /api/payment/orders/
// => Response: list orders

// - GET: /api/payment/order/detail/?order_id={id}
export interface OutputOrder {
	id: string;
	created: string;
	code: string;
	total_price: number;
	documents: Document[];
	courses: Course[];
	status: string;
}

// - GET: /api/payment/order/create/
// => Response: OutputOrder

// - GET: /api/payment/order/cancel/?order_id={id}
export interface OutputCancel {
	message: string;
}
