import React, { Component } from 'react';

export class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        
    }
}

export default App;

