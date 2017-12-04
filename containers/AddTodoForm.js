import React, {Component} from 'react';
import TodoInput from "../components/TodoInput";
import todosService from "../todos.service";
import {Link} from "react-router-dom";

class AddTodoForm extends Component {

    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.validate = this.validate.bind(this);
    }

    addTodo(text) {
        todosService.addTodo({
            text: text,
            time: new Date(),
            done: 0
        });
    }

    validate(newTodo) {
        if(!newTodo || !newTodo.trim()) {
            return {emptyValue: true};
        } else if(todosService.getTodos().find(item => item.text === newTodo)) {
            return {duplicateValue: true};
        }
        return true;
    }

    render() {
        return (
            <add-add-todo-form>
                <TodoInput
                    onSubmit={this.addTodo}
                    validate={this.validate}
                />
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <Link to="/">Go back to list</Link>
                    </div>
                </div>
            </add-add-todo-form>
        );
    }
}

export default AddTodoForm;
