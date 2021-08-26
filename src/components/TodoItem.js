// import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const TodoItem = props => {
  const { completed, id, title } = props.todo

  return (
    <div>{title} <Button onClick={() => { props.deleteTodoFunc(id) }}>Delete</Button></div>
  )
}

export default TodoItem