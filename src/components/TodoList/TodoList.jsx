import { useMemo, useState } from 'react'
import Controls from '../Controls/Controls'
import Filters from '../Filters/Filters'
import Screen from '../Screen/Screen'
import styles from './TodoList.module.css'

const TodoList = ({store}) => {
  const [data, setData] = useState(store.data)
  const [filter, setFilter] = useState(null)
  const [selectAll, setSelectAll] = useState(true)
  const filteredData = useMemo(() => {
    switch(filter) {
    case 'Active': return data.filter(el => !el.isFinished)
    break
    case 'Finished': return data.filter(el => el.isFinished)
    break
    default: return data
  }
  }, [filter, data])
  
  

  const activeCounter = data.reduce((acc, el) => el.isFinished ? acc : ++acc, 0)

  const addItem = (e) => {
    if(e.key !== 'Enter') return
    const newData = [...data, {id: data.at(-1)?.id + 1 || 0, value: e.target.value, isFinished: false}]
    store.setTasks(newData)
    setData(newData)
    e.target.value = ''
  }

  const selectAllHandler = (e) => {
    const newData = data.map(el => ({...el, isFinished: selectAll}))
    store.setTasks(newData)
    setData(newData)
    setSelectAll(!selectAll)
  }

  const checkItem = (item) => {
    item = {...item, isFinished: !item.isFinished}
    const newData = data.filter(el => el.id !== item.id)
    newData.push(item)
    store.setTasks(newData)
    setData(newData)
  }

  const removeItem = (item) => {
    const newData = data.filter(el => el.id !== item.id)
    store.setTasks(newData)
    setData(newData)
  }

  const clearSelected = () => {
    const newData = data.filter(el => !el.isFinished)
    store.setTasks(newData)
    setData(newData)
  }

  return (
    <div className={styles.list}>
        <Controls addItem={addItem} selectAll={selectAllHandler}/>
        <Screen data={filteredData} checkItem={checkItem} removeItem={removeItem}/>
        {data.length > 0 ?
        <Filters 
          setFilter={setFilter} 
          activeCounter={activeCounter} 
          isAnyFinished={data.length !== activeCounter}
          clearSelected={clearSelected}
          />
          : null}
    </div>
  )
}

export default TodoList