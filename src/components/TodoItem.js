import { useState } from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const TodoItem = props => {
  const { completed, id, title } = props.todo
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdateDone = e => {
    if (e.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  return (
    <InputGroup>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={completed} onChange={() => props.handleCompletedToggleFunc(id)} />
      <FormControl
        readOnly={!editing}
        style={completed ? completedStyle : null}
        value={title}
        onDoubleClick={handleEditing}
        onKeyDown={handleUpdateDone}
        onChange={e => props.setNewTitleFunc(id, e.target.value)}
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