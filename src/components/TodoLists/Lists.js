import React from 'react'
import Classes from '../TodoLists/Lists.module.css'

const Lists = (props) => {
  
  // creating each todo item

  let todoList = props.lists.map(item => {
    return <li className = {Classes.ListItem}
              key = {props.key} > 

              {item} 
        
            {/* adding a delete icon to each  todo item */}

              <h4 className = {Classes.Delete}
                onClick = {props.handleDelete} >
                x 
              </h4> 
              
            </li>

  })
  return (

    <div className = {Classes.TodoList} >
      <h2 className = {Classes.Header} > Todo List.. </h2> 

      <ul className = {Classes.Ulist} > 
        {todoList} 
      </ul> 

      <button className = {Classes.Button}
        onClick = {props.handleClear} >
        Clear All 
      </button> 
    </div>
  )
}

export default Lists