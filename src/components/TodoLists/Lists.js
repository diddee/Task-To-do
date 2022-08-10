import React from 'react'
import Classes from '../TodoLists/Lists.module.css'

const Lists = (props) => {
    let todoList = props.todos.map(item => {
        return <li className= {Classes.ListItem}>{item}</li>

    })
  return (
    <div className= {Classes.TodoList}>
        <h2>Todo Lists..</h2>
        <ul className= {Classes.Ulist}>
            <li className= {Classes.ListItem}>Go home</li>
            <li className= {Classes.ListItem}>Go market</li>
            <li className= {Classes.ListItem}>Go school</li>
            

        </ul>
      
    </div>
  )
}

export default Lists


