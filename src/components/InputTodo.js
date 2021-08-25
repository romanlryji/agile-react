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

  const addClick = () => {
    console.log(inputText.title)
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        value={inputText.title}
        onChange={onChange}
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