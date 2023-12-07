import ListItem from '../ListItem/ListItem'
import styles from './Screen.module.css'

const Screen = ({data, checkItem, removeItem}) => {
  return (
    <ul className={styles.screen}>
      {data.map(item => 
        <ListItem key={item.id} itemData={item} checkItem={checkItem} removeItem = {removeItem}/>
      )}
    </ul>
  )
}
export default Screen