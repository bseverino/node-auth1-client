import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
    crossDomain: true
  })
};

export default axiosWithAuth;