import React from 'react'

export default function Todos(props) {
    let todoStyle = {
        minHeight: "39.6vh"
    }
    return (
        <div className="container" style={todoStyle}>
            <h3 className="text-center my-4">Todo List</h3>
            {
                props.todos.length === 0
                    ? <div className="text-center">No Todos to display</div>
                    : props.todos.map((element) => {
                        return (
                            <div className="card my-3" key={element.s_no}>
                                <div className="card-body">
                                    <h5 className="card-title">{element.task}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Task Id {element.s_no}</h6>
                                    <p className="card-text"><b>Description:</b> {element.description}</p>
                                    <button type="button" className="btn btn-success btn-sm mx-1">Mark Done</button>
                                    <button type="button" className="btn btn-danger btn-sm mx-1" onClick={() => { props.onDelete(element) }}>Delete</button>
                                    {
                                        element.completed ? <a href="#" className="card-link">Task Finished</a>
                                            : <a href="#" className="card-link">Task Pending</a>
                                    }
                                </div>
                            </div>
                        )
                    })}
        </div>
    )
}
