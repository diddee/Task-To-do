import React, { Component } from 'react'
import Input from '../Inputs/Inputs'
import List from '../TodoLists/Lists'
import Classes from "./Todo.module.css"

class Todo extends Component {
    state = {
        todos: [],
        todo: ''
    }
    changeHandler = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    addTodo = (newTodo) => {
        newTodo.id = Math.random()
        const allTodos = [...this.state.todos, newTodo]

        console.log(newTodo.id);
        this.setState({
            todos: allTodos,
        })
    }

    deleteHandler = () => {
      const list = [...this.state.todos]
      list.splice(0, 1)
    }

    ClearAllHandler = () => {
      this.setState({
        todos: []
      })
    }
  render() {
    console.log(this.state);
    return (
      <div className= {Classes.Todo}>
        <Input
        value = {this.state.todo}
        handleChange = {this.changeHandler}
        addTodo = {this.addTodo}/>
        <List 
        // id = {newTodo.id}
        lists = {this.state.todos}
        handleDelete = {() => this.deleteHandler}
        handleClear = {this.ClearAllHandler}/>
      </div>
    )
  }
}

export default Todo
