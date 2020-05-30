import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TodoList extends Component {
    state = {
        todos: [
            { 
                Id: '1',
                Title: 'Ir ao supermercado',
                Status: 'Done'
            },
            {
                Id: '2',
                Title: 'Cortar Cabelo',
                Status: 'Done'
            }
        ]
    };

    render() {
        return (
            <div>
                <h1>Lista de Tarefas</h1>
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
                        {this.state.todos.map (x => {
                            return (
                                <tr key={x.Id}>
                                    <td>{x.Id}</td>
                                    <td>{x.Title}</td>
                                    <td>{x.Status}</td>
                                    <td>
                                    <button className="btn btn-danger mr-2">
                                        <span>
                                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                        </span>
                                    </button>
                                    <button className="btn btn-success">
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