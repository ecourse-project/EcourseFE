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
	getAllDoc: (limit, page) => `api/documents/?limit=${limit}&page=${page} `,
	getUDoc: (limit, page) =>
		`api/documents/my-documents/?limit=${limit}&page=${page} `,
	getDocDetail: (id) => `api/documents/detail/?document_id=${id}`,
	getCart: () => `api/carts/info/`,
	addToCart: (id) => `api/carts/document/add/?document_id=${id} `,
	removeFromCart: (id) => `api/carts/document/remove/?document_id=${id}`,
	createOrder: () => `/api/payment/order/create`,
	getOrder: (id) => `api/payment/orders/detail/?order_id=${id}`,
	getAllOrder: () => `api/payment/orders`,
};
export default apiURL;
