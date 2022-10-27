import {$host, $authHost} from '.';

export const getProducts = async () => {
    const {data} = await $host.get(process.env.REACT_APP_API_URL + '/products')
    return data.data
}

export const addToCart = async (id) => {
    const {data} = await $authHost.post(process.env.REACT_APP_API_URL + '/cart/'  + id)
    return data
}

export const getProductsCart = async () => {
    const {data} = await $authHost.get(process.env.REACT_APP_API_URL + '/cart')
    return data.data
}

export const deleteCartProduct = async (id) => {
    const {data} = await $authHost.delete(process.env.REACT_APP_API_URL + '/cart/' + id)
    return data
}

export const order = async () => {
    const {data} = await $authHost.post(process.env.REACT_APP_API_URL + '/order/')
    return data
}

export const getOrders = async () => {
    const {data} = await $authHost.get(process.env.REACT_APP_API_URL + '/order/')
    return data
}