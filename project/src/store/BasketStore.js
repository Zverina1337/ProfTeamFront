import { makeAutoObservable } from 'mobx'

export default class BasketStore {
    constructor(){
        this._data = [
            {id: 6, name: "amet", description: "lorem ipsum dolor sit amet", price: "2431", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
            {id: 7, name: "amet", description: "lorem ipsum dolor sit amet", price: "2431", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
        ]
        makeAutoObservable(this)
    }

    setData(data){
        this._data = data
    }

    get data(){
        return this._data
    }
}