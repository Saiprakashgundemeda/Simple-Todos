// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails

  const onDeleteTodo = () => {
    deleteUser(id)
  }

  return (
    <li className="useCardContainer">
      <p className="TodoItemPara">{title}</p>
      <div className="btnContainer">
        <button type="button" className="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
