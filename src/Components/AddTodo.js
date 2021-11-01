import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [description, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert('Title and Description cannot be empty.')
        }
        else {
            props.addTodo(title, description);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container mt-3">
            <h3 className="text-center mt-5">Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Enter your task title here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Task Description</label>
                    <textarea className="form-control" value={description} onChange={(e) => { setDesc(e.target.value) }} id="description" rows="3" placeholder="Enter your task description here"></textarea>
                </div>
                <button type="submit" className="btn btn-success ">Submit</button>
            </form>
        </div>
    )
}
