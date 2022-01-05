import React, { Component } from 'react'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoForm />
                <span>Hello</span>
            </div>
        )
    }
}
