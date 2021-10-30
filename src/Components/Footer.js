import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        bottom: "0",
        top: "94vh",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">Copyright &copy; MyTodoList.com</p>
        </footer>
    )
}
