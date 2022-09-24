import React, { Component } from 'react'
import Input from '../Inputs/Inputs'
import List from '../TodoLists/Lists'
import Classes from "./Todo.module.css"

class Todo extends Component {
    state = {
        todos: [],
        todo: '',
        id: ''
    }
    changeHandler = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    // adding a todo item

    addTodo = () => {
        const todoId = Math.random()
        const todo = [...this.state.todo] 
        let newTodo= this.state.todo
        const allTodos = [...this.state.todos, newTodo]

        if (todo.length === 0) {
          
          this.setState({
            todo: 'Please add a task to do!'
          })
        }else{
          this.setState({
            todos: allTodos,
            todo: '',
            id: todoId
        })
        }
      
    }
    // deleting a todo item
    deleteHandler = (key) => {
      const newList = [...this.state.todos]
      newList.splice(key, 1)

      this.setState({
        todos: newList
      })
    
    } 

    // deleting all existing todo items
    
    ClearAllHandler = () => {
      this.setState({
        todos: []
      })
    }
  render() {
    
    // console.log(this.state);
    return (
      <div className= {Classes.Todo}>
        <Input
        value = {this.state.todo}
        handleChange = {this.changeHandler}
        addTodo = {this.addTodo}/>
        <List 
        key = {this.state.id}
        lists = {this.state.todos}
        handleDelete = {this.deleteHandler}
        handleClear = {this.ClearAllHandler}/>
      </div>
    )
  }
}

export default Todo
