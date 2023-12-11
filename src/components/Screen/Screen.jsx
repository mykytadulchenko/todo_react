import ListItem from '../ListItem/ListItem'
import styles from './Screen.module.css'

const Screen = ({data}) => {
  return (
    <ul className={styles.screen}>
      {data.map(item => 
        <ListItem key={item.id} itemData={item}/>
      )}
    </ul>
  )
}
export default Screen