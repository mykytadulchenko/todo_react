import Controls from "../Controls/Controls"
import Filters from "../Filters/Filters"
import List from "../List/List"

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <Controls/>
      <List/>
      <Filters/>
    </div>
  )
}

export default App
