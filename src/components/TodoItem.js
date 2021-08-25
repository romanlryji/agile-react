const TodoItem = props => {
  const { completed, id, title } = props.todo

  return (
    <div>{title}</div>
  )
}

export default TodoItem