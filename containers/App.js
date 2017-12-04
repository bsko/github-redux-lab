import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from "./Header";
import TodoForm from "./TodoForm";
import AddTodoForm from "./AddTodoForm";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <Route exact path="/" component={TodoForm}/>
                    <Route path="/add" component={AddTodoForm}/>
                </div>
            </Router>
        );
    }
}

export default App;
