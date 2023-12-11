import { createStore } from "redux"

class Store {
    constructor() {
       this.getTasks()
    }

    getTasks() {
        this.data = JSON.parse(localStorage.getItem('todos')) || []
    }

    setTasks(data) {
        const sortedData = data.sort((a, b) => a.id - b.id)
        localStorage.setItem('todos', JSON.stringify(sortedData))
    }
}

const storage = new Store()

const initialState = {
    data: storage.data,
    filter: null,
    selectAll: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DATA':
            storage.setTasks(action.payload)
            return {...state, data: action.payload}
        case 'SET_FILTER':
            return {...state, filter: action.payload}
        case 'SELECT_ALL':
            return {...state, selectAll: !state.selectAll}
        default: return state
    }
}

const store = createStore(reducer)

export default store