import { create } from "zustand"

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

const store = new Store()

const useStore = create((set) => ({
    data: store.data,
    filter: null,
    selectAll: true,
    setData: (val) => {
        set(state => ({data: val}))
        store.setTasks(val)
    },
    setFilter: (val) => set(state => ({filter: val})),
    setSelectAll: () => set(state => ({selectAll: !state.selectAll}))
}))

export default useStore