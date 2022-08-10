import React from 'react'
import Classes from '../Inputs/Inputs.module.css'

const Inputs = (props) => {
  return (
    <div className = {Classes.Inputs}>
        <input type= 'text' 
        placeholder='add a todo item....' 
        value = {props.value}
        className= {Classes.Input} 
        onChange = {props.handleChange}/>

        <button type='submit'
        className= {Classes.Button}
        onClick ={props.addTodo}
        >Add</button>
    </div>
  )
}

export default Inputs
