import { useRef } from 'react'
import styles from './Filters.module.css'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../Store/actions'

const Filters = ({activeCounter, isAnyFinished}) => {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()

  const clearSelected = () => {
    const newData = data.filter(el => !el.isFinished)
    dispatch(actions.set_data(newData))
  }

  const changeFilter = (e) => {
    if(active.current) active.current.className = null
    active.current = e.target
    dispatch(actions.set_filter(e.target.dataset.filter))
    e.target.className = styles.active__btn
  }

  const active = useRef()

  return (
    <div className={styles.footer}>
      <div className={styles.taskCounter}>
        {`${activeCounter} tasks left`}
      </div>
      <div className={styles.filters}>
        <button data-filter="All" onClick={changeFilter}>All</button>
        <button data-filter="Active" onClick={changeFilter}>Active</button>
        <button data-filter="Finished" onClick={changeFilter}>Finished</button>
      </div>
      <button className={isAnyFinished ? null : styles.hidden} onClick={clearSelected}>Clear completed</button>
    </div>
  )
}
export default Filters