const axios = require("axios");
const Api = axios.create({baseUrl: "http://localhost:3000"});
export default Api;