import { useMemo } from 'react'
import Controls from '../Controls/Controls'
import Filters from '../Filters/Filters'
import Screen from '../Screen/Screen'
import styles from './TodoList.module.css'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const data = useSelector(state => state.data)
  const filter = useSelector(state => state.filter)

  const activeCounter = data.reduce((acc, el) => el.isFinished ? acc : ++acc, 0)

  const filteredData = useMemo(() => {
    switch(filter) {
    case 'Active': return data.filter(el => !el.isFinished)
    case 'Finished': return data.filter(el => el.isFinished)
    default: return data
  }
  }, [filter, data])

  return (
    <div className={styles.list}>
        <Controls/>
        <Screen data={filteredData}/>
        {data.length > 0 ?
        <Filters activeCounter={activeCounter} isAnyFinished={data.length !== activeCounter}/>
        : null}
    </div>
  )
}

export default TodoList