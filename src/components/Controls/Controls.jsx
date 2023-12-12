import { useDispatch } from 'react-redux'
import actions from '../../Store/actions'
import styles from './Controls.module.css'

const Controls = () => {
  const dispatch = useDispatch()
  
  const addItem = (e) => {
    if(e.key !== 'Enter') return
    dispatch(actions.addItem(e.target.value))
    e.target.value = ''
  }
  const selectAllHandler = () => dispatch(actions.selectAll())
  
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