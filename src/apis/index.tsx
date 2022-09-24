// =================== Users Auth ===================
// - POST: /api/users-auth/registration/                                     =====> Register
// - POST: /api/users-auth/token/                                            =====> Get token
// - POST: /api/users-auth/token/refresh/                                    =====> Get refresh token

// =================== Users ===================
// - GET: /api/users/me/                                                     =====> Get user profile
// - GET: /api/users/exists/?username=binhdiep012&email=binh@mail.com        =====> Check exists username & email
// - POST: /api/users/password-reset/                                        =====> Reset password
// - POST: /api/users/password-change/                                       =====> Change password

// =================== Upload ===================
// - POST: /api/upload/upload-files/                                         =====> Upload files
// - POST: /api/upload/upload-images/                                        =====> Upload images

// =================== Documents ===================
// - POST: /api/documents/                                                   =====> Create documents
// - GET: /api/documents/?limit={number}&page={number}                       =====> List documents
// - GET/PUT/PATCH/DELETE: /api/documents/detail/?document_id={id}           =====> Get, Update & Delete documents
// - GET: /api/documents/my-documents/?limit={number}&page={number}          =====> Get user's documents

// =================== Cart ===================
// - GET: /api/carts/info/                                                   =====> Get cart
// - GET: /api/carts/document/add/?document_id={id}                          =====> Add document to cart
// - GET: /api/carts/document/remove/?document_id={id}                       =====> Remove document to cart

// =================== Payment ===================
// - GET: /api/payment/orders/                                               =====> Create order
// - GET: /api/payment/orders/detail/?order_id={id}                          =====> Get order

const apiURL = {
	login: () => 'api/users-auth/token/',
	me: () => 'api/users/me/',
	register: () => 'api/users-auth/registration/',
	existEmail: (email) => `api/users/exists/?email=${email}`,
	resetPwd: () => 'api/users/password-reset/',
	changePwd: () => 'api/users/password-change/',
	getAllDocs: (limit, page) => `api/documents/?limit=${limit}&page=${page}`,
	getMostDownloadDocs: () => `api/documents/most-download`,
	getUDocs: (limit, page) =>
		`api/documents/my-documents/?limit=${limit}&page=${page}`,
	getDocDetail: (id) => `api/documents/detail/?document_id=${id}`,
	getCart: () => `api/carts/info/`,
	addDocToCart: (id) => `api/carts/document/add/?document_id=${id} `,
	removeDocFromCart: (id) => `api/carts/document/remove/?document_id=${id}`,
	addCourseToCart: (id) => `api/carts/course/add/?course_id=${id} `,
	removeCourseFromCart: (id) => `api/carts/course/remove/?course_id=${id}`,
	getAllOrders: (limit, page) =>
		`api/payment/orders/?limit=${limit}&page=${page}`,
	getOrder: (id) => `api/payment/order/detail/?order_id=${id}`,
	createOrder: () => `/api/payment/order/create/`,
	cancelOrder: (id) => `api/payment/order/cancel/?order_id=${id}`,
	getAllCourses: (limit, page) => `api/courses/?limit=${limit}&page=${page}`,
	getUCourses: (limit, page) =>
		`api/courses/my-courses/?limit=${limit}&page=${page}`,
	getCourseDetail: (id) => `api/courses/detail/?course_id=${id}`,
	createComment: () => `api/comments/create/`,
	listComments: (id) => `api/comments/list/?course_id=${id}`,
};

export default apiURL;
