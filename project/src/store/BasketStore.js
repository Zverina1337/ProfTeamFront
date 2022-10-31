import { makeAutoObservable } from 'mobx'

export default class BasketStore {
    constructor(){
        this._data = []
        makeAutoObservable(this)
    }

    setData(data){
        this._data = data
    }

    get data(){
        return this._data
    }
}