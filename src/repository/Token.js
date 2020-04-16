export default class Token {

    static getItem(key) {
        return localStorage.getItem(key);
    }

    static setItem(key, value){
        localStorage.setItem(key, value);
    }

    static isAuthenticated() {
        let token = localStorage.getItem('token');
        return token && token !== 'null' && token !== '';
    }

    static clear() {
        localStorage.clear();
    }

    static getToken() {
        return localStorage.getItem('token');
    }
}