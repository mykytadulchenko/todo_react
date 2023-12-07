import styles from './App.module.css'
import Store from "../../Store/Store"
import TodoList from '../TodoList/TodoList'

function App() {
  const store = new Store()
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo List</h1>
      <TodoList store={store}/>
    </div>
  )
}

export default App
