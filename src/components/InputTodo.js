import React, { useState } from "react"

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: ""
  })

  const onChange = e => {
    console.log(e.target.value)
    setInputText({
      title: e.target.value
    })
  }

  const handleKeydown = e => {
    if (e.key === "Enter") {
      addClick(e)
    } else if (e.key === "Escape") {
      setInputText({
        title: ""
      })
    }
  }

  const addClick = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoFunc(inputText.title)
      setInputText({
        title: ""
      })
    } else {
      alert("Enter something please")
    }
    
    console.log(inputText.title + ' added')
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        value={inputText.title}
        onChange={onChange}
        onKeyDown={handleKeydown}
        placeholder="New Todo Item"
        aria-label="New Todo Item"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={addClick}>
        Add
      </Button>
    </InputGroup>
  )
}

export default InputTodo