import { API_CONFIG } from '../config/configurations';

const url = () => (API_CONFIG.url + API_CONFIG.version);
const globalTimeout = API_CONFIG.timeout;
const timeoutMessage =
  'Está tardando demasiado, verifica tu conexión a internet e intenta nuevamente';

export default class API {
  static getGlobalTimeout() {
    return globalTimeout;
  }
  static getTimeoutMessage() {
    return timeoutMessage;
  }
  static genericErrorMessage(status) {
    return status === 404 ? 'Recurso no encontrado' : 'Intentelo más tarde';
  }
  static get(route) {
    return fetch(url() + route, {
      method: 'GET',
    });
  }
  static post(route, params = {}) {
    return fetch(url() + route, {
      method: 'POST',
      mode: 'CORS',
      cache: 'no-cache',
      body: JSON.stringify(params),
    });
  }
  static delete(route) {
    return fetch(url() + route, {
      method: 'DELETE',
    });
  }
}
