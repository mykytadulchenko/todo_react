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
            const selectedAllData = state.data.map(el => ({...el, isFinished: state.selectAll}))
            storage.setTasks(selectedAllData)
            return {...state, selectAll: !state.selectAll, data: selectedAllData}
        case 'ADD_ITEM':
            const newItemData = [...state.data, {id: state.data.at(-1)?.id + 1 || 0, value: action.payload, isFinished: false}]
            storage.setTasks(newItemData)
            return {...state, data: newItemData}
        case 'CHECK_ITEM':
            const checkItem = { ...action.payload, isFinished: !action.payload.isFinished }
            const newCheckedData = state.data.filter((el) => el.id !== action.payload.id)
            newCheckedData.push(checkItem)
            storage.setTasks(newCheckedData)
            return {...state, data: newCheckedData}
        case 'REMOVE_ITEM':
            const dataWithoutItem = state.data.filter((el) => el.id !== action.payload.id)
            storage.setTasks(dataWithoutItem)
            return {...state, data: dataWithoutItem}
        case 'EDIT_ITEM':
            const editedItem = { ...action.payload.item, value: action.payload.value }
            const editedItemData = state.data.filter((el) => el.id !== action.payload.item.id)
            editedItemData.push(editedItem)
            storage.setTasks(editedItemData)
            return {...state, data: editedItemData}
        case 'REMOVE_SELECTED':
            const selectedRemovedData = state.data.filter(el => !el.isFinished)
            storage.setTasks(selectedRemovedData)
            return {...state, data: selectedRemovedData}
        default: return state
    }
}

const store = createStore(reducer)

export default store