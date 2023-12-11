const actions = {
    set_data: (value) => ({type: 'SET_DATA', payload: value}),
    set_filter: (value) => ({type: 'SET_FILTER', payload: value}),
    select_all: () => ({type: 'SELECT_ALL'})
}

export default actions