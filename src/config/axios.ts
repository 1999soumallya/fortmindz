import Axios, { AxiosError, AxiosInstance } from "axios";

const axios: AxiosInstance = Axios.create({ baseURL: import.meta.env.VITE_APP_API_URL + '/v1' })

axios.interceptors.request.use((config) => {
    return config
}, (error: AxiosError) => {
    Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, (error: AxiosError) => { 
    if (error.response?.status === 401) {
        window.location.reload()
    }
    return Promise.reject(error)
})

export default axios