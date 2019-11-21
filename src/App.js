// create your App component her
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()

        this.state= {
            people: []
        }
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    peoplesNames= ()=>{
        return this.state.people.map(person=>person.name).join(", ")
    }
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp=>resp.json())
        .then(data=>{
            return this.setState({people: data.people})
        })
    }

    render() {
        return (
            <div>
              {this.peoplesNames()}  
            </div>
        )
    }
}
