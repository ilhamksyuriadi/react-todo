import React, { Component } from 'react';
import './TodoComponent.scss';
import TodoItem from './TodoItem';
import axios from 'axios';

export default class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : []
        }

        this.handleCheckbox = this.handleCheckbox.bind(this)
    }

    componentDidMount(){
        console.log('didmount called')
        axios.get('https://demo1283417.mockable.io/todos')
            .then(res => {
                console.log(res.data.todos)
                this.setState({
                    ...this.state,
                    todos: res.data.todos
                })
                console.log(this.state)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleCheckbox(id){
        console.log('checkbox clicked', id)
        const updated_todos = this.state.todos
            .map(todo => {
                if (todo.id === id) {
                    if (todo.checked === true) {
                        todo.status = 'In Progress'
                        todo.checked = false
                        return todo
                    } else {
                        todo.status = 'Approved'
                        todo.checked = true
                        return todo
                    }
                } else {
                    return todo
                }
            })
        const new_state = {
            ...this.state,
            todos: updated_todos
        }
        this.setState(new_state);
    }

    render() {
        const today_todos = this.state.todos
        .filter(todo => todo.entry === 'today')
        .map((todo, index) => {
            return (
                <span key={index}>
                    <TodoItem 
                        item = {todo}
                        handleCheckbox = {this.handleCheckbox}
                    ></TodoItem>
                </span>
            )
        })
        const upcoming_todos = this.state.todos
        .filter(todo => todo.entry === 'upcoming')
        .map((todo, index) => {
            return (
                <span key={index}>
                    <TodoItem item = {todo}></TodoItem>
                </span>
            )
        })
        return (
            <div className="todo-layout">
                <div className="content">
                    <div className="project-section">
                        <h1>Cyber Punk</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry.
                        </p>
                    </div>
                    <div className="todo-section">
                        <h2>Today</h2>
                        { today_todos }
                    </div>
                    <div className="upcoming-section">
                        <h2>Upcoming</h2>
                        { upcoming_todos }
                    </div>
                </div>
            </div>
        )
    }
}
