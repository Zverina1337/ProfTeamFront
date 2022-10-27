import {$host, $authHost} from '.';

export const registration = async (fio, email, password) => {
    const {data} = await $host.post(process.env.REACT_APP_API_URL + "/signup", {fio, email, password})
    localStorage.setItem('token', data.data.user_token)
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post(process.env.REACT_APP_API_URL + '/login',{email, password})
    localStorage.setItem('token', data.data.user_token)
    return data
}

export const logout = async () => {
    const {data} = await $authHost.get(process.env.REACT_APP_API_URL + '/logout/')
    return data
}