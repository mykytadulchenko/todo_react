import styles from './Filters.module.css'

const Filters = ({setFilter, activeCounter, isAnyFinished, clearSelected}) => {
  const changeFilter = (e) => setFilter(e.target.dataset.filter)
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