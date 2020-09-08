import React, { Component } from 'react';
import './TodoItem.scss'

export default class TodoItem extends Component {
    render() {
        const checkmark = this.props.item.entry === 'upcoming'
            ? <input disabled="disable" type="checkbox" defaultChecked={this.props.item.checked} />
            : <input onChange={() => this.props.handleCheckbox(this.props.item.id)} type="checkbox" defaultChecked={this.props.item.checked} />
        let status = null;
        if (this.props.item.status === 'Approved') {
            status = <div className="todo-status-Approved">{this.props.item.status}</div>
        } else if (this.props.item.status === 'In Progress') {
            status = <div className="todo-status-InProgress">{this.props.item.status}</div>
        } else {
            status = <div className="todo-status-Waiting">{this.props.item.status}</div>
        }
        return (
            <div className="todo-item">
                <label className="checkbox-container">
                    { checkmark }
                    { 
                        this.props.item.entry === 'upcoming'
                            ? <span className="checkmark-disabled"></span>
                            : <span className="checkmark"></span>
                    }
                </label>
                <p className="todo-name">{this.props.item.name}</p>
                <div className="todo-status">{status}</div>
            </div>
        )
    }
}
