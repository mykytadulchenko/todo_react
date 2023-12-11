import { useDispatch, useSelector } from 'react-redux'
import actions from '../../Store/actions'
import styles from './Controls.module.css'

const Controls = () => {
  const data = useSelector(state => state.data)
  const selectAll = useSelector(state => state.selectAll)
  const dispatch = useDispatch()
  
  const addItem = (e) => {
    if(e.key !== 'Enter') return
    const newData = [...data, {id: data.at(-1)?.id + 1 || 0, value: e.target.value, isFinished: false}]
    dispatch(actions.set_data(newData))
    e.target.value = ''
  }

  const selectAllHandler = (e) => {
    const newData = data.map(el => ({...el, isFinished: selectAll}))
    dispatch(actions.set_data(newData))
    dispatch(actions.select_all())
  }
  
  return (
    <div className={styles.controls}>
      <button onClick={selectAllHandler}>
        <i className="fa-solid fa-check-double"></i>
      </button>
      <input type="text" placeholder='Input task...' onKeyUp={addItem}/>
    </div>
  )
}
export default Controls