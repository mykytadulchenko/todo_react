import styles from './ListItem.module.css'

const ListItem = ({itemData, checkItem, removeItem}) => {
  return (
    <li className={styles.list__item}>
        <div className={styles.check__container} onClick={() => checkItem(itemData)}>
            <div className={styles.check__body}>
                <i className="fa-regular fa-square fa-sm"></i>
            </div>
            {itemData.isFinished &&
                <div className={styles.check__active}>
                    <i className="fa-solid fa-check fa-sm"></i>
                </div>
            }
        </div>
        <p>{itemData.value}</p>
        <button className={styles.remove__btn} onClick={() => removeItem(itemData)}>
            <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
    </li>
  )
}
export default ListItem