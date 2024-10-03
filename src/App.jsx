import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import TotalComponents from './components/TotalComponents'

function App() {

  return (
    <div className="row container-fluid bg-dark">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className=' p-4 text-light'>
          <h2 className='text-center text-light  pt-5 mb-3'>MY <span className='text-primary'>TODO</span> LIST</h2>
          <AddTodoForm />
          <TodoList />
          <TotalComponents />
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default App
