
import axios from 'axios';

// Базовая настройка для Laravel Sanctum
const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',  // URL твоего бэка
  withCredentials: true,             // чтобы cookie отправлялись
  xsrfCookieName: 'XSRF-TOKEN',      // имя cookie CSRF
  xsrfHeaderName: 'X-XSRF-TOKEN',    // header для CSRF

});

export default axiosClient;