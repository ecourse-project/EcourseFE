const globalVariable = {
  API_URL:
    process.env.ECOURSE_API_URL ||
    // 'https://ecourse-main.herokuapp.com/' ||
    'http://127.0.0.1:4000/',
};
export default globalVariable;
