import React from 'react'
import Classes from '../TodoLists/Lists.module.css'

const Lists = (props) => {
    let todoList = props.lists.map(item => {
        return <li className= {Classes.ListItem}
        >{item} <h4 className= {Classes.Delete}
        onClick = {props.handleDelete}>x</h4>
        </li>

    })
  return (
    <div className= {Classes.TodoList}>
        <h2 className= {Classes.Header}>Todo List..</h2>
        <ul className= {Classes.Ulist}>
            {todoList}
        </ul>
        <button type= 'button' 
        className= {Classes.Button}
        onClick={props.handleClear}
        >Clear All</button>
    </div>
  )
}

export default Lists


