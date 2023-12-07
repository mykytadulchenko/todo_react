import styles from './Controls.module.css'

const Controls = ({addItem, selectAll}) => {
  
  return (
    <div className={styles.controls}>
      <button onClick={selectAll}>
        <i className="fa-solid fa-check-double"></i>
      </button>
      <input type="text" placeholder='Input task...' onKeyUp={addItem}/>
    </div>
  )
}
export default Controls