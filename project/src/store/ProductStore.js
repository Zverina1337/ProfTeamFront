import { makeAutoObservable } from 'mobx'

export default class ProductStore {
    constructor(){
        this._data = [
            {id: 0, name: "lorem", description: "lorem ipsum dolor sit amet", price: "1831", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
            {id: 1, name: "ipsum", description: "lorem ipsum dolor sit amet", price: "11331", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
            {id: 2, name: "dolor", description: "lorem ipsum dolor sit amet", price: "11561", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
            {id: 3, name: "sit", description: "lorem ipsum dolor sit amet", price: "21831", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
            {id: 4, name: "amet", description: "lorem ipsum dolor sit amet", price: "2431", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
            {id: 5, name: "amet", description: "lorem ipsum dolor sit amet", price: "2431", img:'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'},
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