import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import InputTodo from "./InputTodo"
import TodoItems from "./TodoItems"

const TodoContainer = () => {
  // let todo1 = {
  //   id: uuidv4(),
  //   title: 'Item1'
  // }

  // let todo2 = {
  //   id: uuidv4(),
  //   title: 'Item2'
  // }

  // const [todos, setTodos] = useState([todo1, todo2])
  const [todos, setTodos] = useState(getInitialTodos())

  // let todos = [todo1, todo2]

  const handleCompletedToggle = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const delTodoItem = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      })
    ])
  }

  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    return loadedTodos || []
  }

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <div>
      <InputTodo addTodoFunc={addTodoItem} />
      <TodoItems
        todos={todos}
        deleteTodoFunc={delTodoItem}
        handleCompletedToggleFunc={handleCompletedToggle}
      />
    </div>
  )
}

export default TodoContainer