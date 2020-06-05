const KEY = 'poupaGrana-token';

class TokenRepository {

    static set(value) {

        localStorage.setItem(KEY, value);
    }

    static setSession(value) {
        sessionStorage.setItem(KEY, value);
    }

    static getSession() {
        return sessionStorage.getItem(KEY);
    }

    static deleteSession() {

        return sessionStorage.removeItem(key);
    }

    static get() {

        return localStorage.getItem(KEY);
    }

    static delete() {

        return localStorage.removeItem(KEY);
    }

    static isAuthenticatedSession() {

        let token = sessionStorage.getItem(KEY);
        return token && token !== 'null' && token !== '';
    }

    static isAuthenticated() {

        let token = localStorage.getItem(KEY);
        return token && token !== 'null' && token !== '';
    }

    static clear() {
        sessionStorage.clear()
        localStorage.clear();
    }

}

export default TokenRepository;