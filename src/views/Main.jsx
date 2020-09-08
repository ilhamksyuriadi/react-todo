import React, { Component } from 'react';
import './Main.scss'
import ProjectComponent from '../components/ProjectComponent';
import TodoComponent from '../components/TodoComponent';

export default class Main extends Component {
    render() {
        return (
            <div className="main-layout">
                <ProjectComponent></ProjectComponent>
                <TodoComponent></TodoComponent>
            </div>
        )
    }
}
