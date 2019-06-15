import axios, {AxiosInstance} from 'axios';

export default class Api {

    private static axiosInstance: AxiosInstance;

    static init() {
        this.axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL
        });
    }

    static get(url: string) {
        return this.axiosInstance.get(url);
    }
    
}