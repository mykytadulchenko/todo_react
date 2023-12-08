import { useMemo } from 'react'
import useStore from '../../Store/Store'
import Controls from '../Controls/Controls'
import Filters from '../Filters/Filters'
import Screen from '../Screen/Screen'
import styles from './TodoList.module.css'

const TodoList = () => {
  const {data, setData, filter, setFilter, selectAll, setSelectAll} = useStore()
  const activeCounter = data.reduce((acc, el) => el.isFinished ? acc : ++acc, 0)

  const filteredData = useMemo(() => {
    switch(filter) {
    case 'Active': return data.filter(el => !el.isFinished)
    case 'Finished': return data.filter(el => el.isFinished)
    default: return data
  }
  }, [filter, data])

  const addItem = (e) => {
    if(e.key !== 'Enter') return
    const newData = [...data, {id: data.at(-1)?.id + 1 || 0, value: e.target.value, isFinished: false}]
    setData(newData)
    e.target.value = ''
  }

  const selectAllHandler = (e) => {
    const newData = data.map(el => ({...el, isFinished: selectAll}))
    setData(newData)
    setSelectAll()
  }

  const checkItem = (item) => {
    item = {...item, isFinished: !item.isFinished}
    const newData = data.filter(el => el.id !== item.id)
    newData.push(item)
    setData(newData)
  }

  const removeItem = (item) => {
    const newData = data.filter(el => el.id !== item.id)
    setData(newData)
  }

  const clearSelected = () => {
    const newData = data.filter(el => !el.isFinished)
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