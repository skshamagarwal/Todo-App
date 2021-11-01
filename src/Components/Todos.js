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
                                    {
                                        element.completed
                                            ? <button type="button" className="btn btn-warning btn-sm" onClick={() => { props.markDone(element.id) }}>Mark Pending</button>
                                            : <button type="button" className="btn btn-success btn-sm" onClick={() => { props.markDone(element.id) }}>Mark Done</button>
                                    }
                                    <button type="button" className="btn btn-danger btn-sm mx-2" onClick={() => { props.onDelete(element) }}>Delete</button>
                                    <div className="mt-3">
                                        {
                                            element.completed
                                                ? <p className="text-success"><b>Task Finished </b></p>
                                                : <p className="text-danger"><b> Task Pending </b></p>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
        </div>
    )
}
