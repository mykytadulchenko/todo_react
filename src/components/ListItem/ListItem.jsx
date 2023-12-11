import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../Store/actions'
import styles from './ListItem.module.css'

const ListItem = ({itemData}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(itemData.value)
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()

     const checkItem = (item) => {
        item = {...item, isFinished: !item.isFinished}
        const newData = data.filter(el => el.id !== item.id)
        newData.push(item)
        dispatch(actions.set_data(newData))
      }
    
      const removeItem = (item) => {
        const newData = data.filter(el => el.id !== item.id)
        dispatch(actions.set_data(newData))
      }

    const edit = (e) => {
        if(e.key !== 'Enter') return
        const newItemData = {...itemData, value: e.target.value}
        const newData = data.filter(el => el.id !== itemData.id)
        newData.push(newItemData)
        dispatch(actions.set_data(newData))
        setIsEditing(false)
    } 

    const rootClass = [styles.list__item]
    if(isEditing) rootClass.push(styles.editing)
    
  return (
    <li className={rootClass.join(' ')}>
        {isEditing ?
        <div>
            <input type="text" 
                autoFocus
                value={value} 
                onKeyUp={edit} 
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => setIsEditing(false)}/>
        </div>
        :
        <><div className={styles.check__container} onClick={() => checkItem(itemData)}>
            <div className={styles.check__body}>
                <i className="fa-regular fa-square fa-sm"></i>
            </div>
            {itemData.isFinished ?
                <div className={styles.check__active}>
                    <i className="fa-solid fa-check fa-sm"></i>
                </div>
                : null
            }
        </div>
        <p onDoubleClick={() => setIsEditing(true)}>{itemData.value}</p>
        <button className={styles.remove__btn} onClick={() => removeItem(itemData)}>
            <i className="fa-solid fa-xmark fa-lg"></i>
        </button></>}
    </li>
  )
}
export default ListItem