import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import TodoItem from "../components/TodoItem";
import TodoTotal from "../components/TodoTotal";
import todosService from "../todos.service";

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: todosService.getTodos()
        };

        this.onComplete = this.onComplete.bind(this);
    }

    onComplete(todo) {
        todo.done = 1;
        var beginTime= todo.time.getTime();
        var endTime = new Date().getTime();
        var result = (endTime - beginTime) / 1000;
        todo.estimated = `${result} sec`;
        this.setState({todos: this.state.todos});
    }

    render() {
        return (
            <todo-form>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <Link to="/add" className="btn btn-info full-width-btn">Add</Link>
                    </div>
                </div>
                <TodoTotal
                    count={this.state.todos.length}
                ></TodoTotal>
                <div className="row align-center">
                    <div className="col div-width">
                        {this.state.todos.map( todo =>
                            <TodoItem
                                key={todo.text}
                                todo={todo}
                                onComplete={this.onComplete}
                            />
                        )}
                    </div>
                </div>
            </todo-form>
        );
    }
}

export default TodoForm;
