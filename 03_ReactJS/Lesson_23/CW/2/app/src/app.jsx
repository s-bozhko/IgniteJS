import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from App.jsx</h1>
                {this.props.children}
            </div>
        ); 
    }
}