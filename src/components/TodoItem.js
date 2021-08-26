import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const TodoItem = props => {
  const { completed, id, title } = props.todo

  return (
    <InputGroup>
      <FormControl
        value={title}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={() => { props.deleteTodoFunc(id) }}
      >
        Delete
      </Button>
    </InputGroup>
  )
}

export default TodoItem