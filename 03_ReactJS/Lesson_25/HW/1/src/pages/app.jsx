var React = require('react'); 
var Link = require('react-router').Link;   

// импорт хранилища данных (store)
var TodoStore = require('../stores/toDoStore'); 

// импорт React-компонентов 
var List = require('./list.jsx'); 

// импорт действий toDoActions 
var TodoActions = require('../actions/toDoActions'); 

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            tasks: TodoStore.getAll()
        } 
    } 

    render() {
        return(<div className="panel">
                    <div className="panel well">
                        <h2>Tasks</h2>
                        <div>
                            <Link to="/edit"><button className="btn btn-sm btn-warning">Edit</button></Link>
                        </div>
                    </div>
             <List showDetails={false} items={this.state.tasks} />
        </div>  
    )}
} 

module.exports = App; 