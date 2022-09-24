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

// ===========================================Users===========================================
export interface User {
	id: string;
	email: string;
	full_name: string;
	avatar: string;
	phone: string;
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
	file_size: string;
	file_type: string;
}

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
	is_selling: boolean;
}

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

export interface IDocumentUpdate {
	name: string;
	description: string;
	title: string;
	price: number;
	image: string;
	file: string;
}

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
	is_selling: boolean;
}

// ===========================================Comments===========================================
export interface ReplyComment {
	id: string;
	user: User;
	content: string;
}

export interface Comment {
	id: string;
	user: User;
	content: string;
	course_id: string;
	reply_comments: ReplyComment[];
}

// ===========================================Cart===========================================
export interface OCart {
	id: string;
	total_price: number;
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
