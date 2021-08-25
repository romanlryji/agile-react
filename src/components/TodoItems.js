import ListGroup from 'react-bootstrap/ListGroup'

import TodoItem from "./TodoItem"

const TodoItems = () => {
  return (
    <ListGroup>
      <ListGroup.Item><TodoItem /></ListGroup.Item>
      <ListGroup.Item><TodoItem /></ListGroup.Item>
      <ListGroup.Item><TodoItem /></ListGroup.Item>
      <ListGroup.Item><TodoItem /></ListGroup.Item>
      <ListGroup.Item><TodoItem /></ListGroup.Item>
    </ListGroup>
  )
}

export default TodoItems