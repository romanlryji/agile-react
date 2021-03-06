import ListGroup from 'react-bootstrap/ListGroup'

import TodoItem from "./TodoItem"

const TodoItems = props => {



  return (

    <ListGroup>
      {props.todos.map(
        todo => (
          <ListGroup.Item key={todo.id}><TodoItem
            key={todo.id}
            todo={todo}
            handleCompletedToggleFunc={props.handleCompletedToggleFunc}
            deleteTodoFunc={props.deleteTodoFunc}
            setNewTitleFunc={props.setNewTitleFunc}
          /></ListGroup.Item>
        ))
      }
      {/* <ListGroup.Item><TodoItem todo={todo1} /></ListGroup.Item>
      <ListGroup.Item><TodoItem todo={todo2} /></ListGroup.Item> */}
    </ListGroup>
  )
}

export default TodoItems