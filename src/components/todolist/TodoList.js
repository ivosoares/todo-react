import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from "../addtodo/AddTodo";


class TodoList extends Component {
    state = {
        todos: [
            { 
                Id: '1',
                Title: 'Ir ao supermercado',
                Status: 'Pending'
            },
            {
                Id: '2',
                Title: 'Cortar Cabelo',
                Status: 'Pending'
            },
            {
                Id: '3',
                Title: 'Estudar Javascript',
                Status: 'Pending'
            },
            {
                Id: '4',
                Title: 'Estudar Css',
                Status: 'Pending'
            }
        ]
    };

    deleteTodo = (id) => {
        debugger;
        const filteredItems = this.state.todos.filter(x => x.Id !== id )
        this.setState({
            todos: filteredItems,
        })
    };

    checkTodo = (x) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if(todo.Id === x.Id) {
                    return {
                        ...todo,
                        Status: todo.Status === "Pending" ? "Done" : "Pending"
                    }
                }else {
                    return todo;
                }
            })
        }))
    }

    addToDo = (todo) => { 
        this.setState ({ 
            todos: [... this.state.todos, todo] 
        }); 
    };

    render() {
        return (
            <div>
                <AddTodo onAdd={this.addToDo}></AddTodo>
                <h1>TodoList</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map (todo => {
                            return (
                                <tr key={todo.Id}>
                                    <td>{todo.Id}</td>
                                    <td>{todo.Title}</td>
                                    <td style={{ color: todo.Status === "Done" ? "green" : "red" }}>{todo.Status}</td>
                                    <td>
                                    <button className="btn btn-danger mr-2"
                                    onClick={() => this.deleteTodo(todo.Id)}>
                                        <span>
                                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                        </span>
                                    </button>
                                    <button className="btn btn-success"
                                    onClick={() => this.checkTodo(todo)}>
                                        <span>
                                        <FontAwesomeIcon icon="check"></FontAwesomeIcon>
                                        </span>
                                    </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;