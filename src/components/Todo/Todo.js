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
    addTodo = () => {
        let newTodo= this.state.todo
        const allTodos = [...this.state.todos, newTodo]

        this.setState({
            todos: allTodos,
            todo: ''
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
        lists = {this.state.todos}/>
      </div>
    )
  }
}

export default Todo
