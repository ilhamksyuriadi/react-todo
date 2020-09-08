import React, { Component } from 'react';
import './ProjectComponent.scss';
import axios from 'axios';

export default class ProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            count: 0
        }
    }

    componentWillMount() {
        console.log('didmount called from project')
        axios.get('https://demo1283417.mockable.io/projects')
            .then(res => {
                console.log(res.data)
                const new_state = {
                    ...this.state,
                    projects: res.data.projects,
                    count: res.data.count
                }
                this.setState(new_state)
                console.log(this.state)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const projects = this.state.projects.map(project => {
            return (
                <div className="project">
                    <h4>{project.name}</h4>
                </div>
            )
        })
        return (
            <div className="project-layout">
                <div className="content">
                    <h1>Hi Hasna,</h1>
                    <p>Welcome back to the workspace, we missed you!</p>
                    <input type="text" name="" id="" placeholder="Search Task or Project"/>
                    <h2>Projects <span>({this.state.count})</span></h2>
                    <div className="project-box">
                        { projects }
                    </div>
                </div>
            </div>
        )
    }
}
