import { useState } from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const TodoItem = props => {
  const { completed, id, title } = props.todo
  const [editingMode, setEditingMode] = useState(false)

  const enableEditing = () => {
    setEditingMode(true)
  }

  const handleUpdateDone = e => {
    if (e.key === "Enter") {
      setEditingMode(false)
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
        readOnly={!editingMode}
        style={completed ? completedStyle : null}
        value={title}
        onDoubleClick={enableEditing}
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