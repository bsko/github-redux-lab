import React, {Component} from 'react';
import todosService from '../todos.service';

class TodoInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            count: todosService.getTodos().length
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const validationResult = this.props.validate(this.state.newTodo);
        if(validationResult === true) {
            this.props.onSubmit(this.state.newTodo);
            this.setState({
                newTodo: '',
                count: todosService.getTodos().length
            });
        } else {
            this.setState(validationResult);
        }
    }

    render() {
        return (
            <todo-input>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <input id='title' type="text"
                               className="input-class form-control"
                               value={this.state.newTodo}
                               onChange={(evt) => this.setState({newTodo: evt.target.value, emptyValue: false, duplicateValue: false})}/>
                        <button id='add-todo' type="button" className="button-class btn btn-info" disabled={this.state.count >= 10} onClick={this.handleAdd}>Add</button>
                    </div>
                </div>

                {this.state.emptyValue && <div className="row align-center display-none">
                    <div className="col div-width">
                        <div className="alert alert-warning div-width custom-flex-container">
                            <strong>Warning!</strong> &nbsp; You have to fill the description of task.
                        </div>
                    </div>
                </div>}

                {this.state.duplicateValue && <div className="row align-center display-none">
                    <div className="col div-width">
                        <div className="alert alert-warning div-width custom-flex-container">
                            <strong>Warning!</strong> &nbsp; Similar task is already exists.
                        </div>
                    </div>
                </div>}
            </todo-input>
        );
    }
}

export default TodoInput;
