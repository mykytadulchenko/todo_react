const actions = {
    setFilter: (value) => ({type: 'SET_FILTER', payload: value}),
    selectAll: () => ({type: 'SELECT_ALL'}),
    removeSelected: () => ({type: 'REMOVE_SELECTED'}),
    addItem: (value) => ({type: 'ADD_ITEM', payload: value}),
    checkItem: (item) => ({type: 'CHECK_ITEM', payload: item}),
    removeItem: (item) => ({type: 'REMOVE_ITEM', payload: item}),
    editItem: (item, value) => ({type: 'EDIT_ITEM', payload: {item, value}})
}

export default actions