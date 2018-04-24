import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Router, Route, browserHistory, Link} from 'react-router';

import TodoItem from './todoItem';
import AddItem from './addItem';
import About from './about';

class App extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path='/' component={ComponentList}></Route>
                <Route path='/about' component={About}></Route>
            </Router>
        );
    }
}

class ComponentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos:[]
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onDelete(item) {
        const updatedTodos = this.state.todos.filter((val, index)=> {
            return item !==val;
        });
        this.setState({
            todos:updatedTodos
        })
    }

    onAdd(item) {
        const updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        })
    }

    render(){
        const todos = this.state.todos.map((todo, index)=> { 
            return(
            <TodoItem key = {index} item = {todo} onDelete={this.onDelete}/>
            );
        });
        return(
            <div id='todo-list'>
                <Link to={'/about'}>About</Link>
                <p>List for busiest people</p>
                <ul>
                   {todos}
                </ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }  
}

ReactDOM.render(
    <App/>,
    document.getElementById("todo-wrapper")
)
