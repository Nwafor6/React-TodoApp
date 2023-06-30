import React from "react"
import { Link } from "react-router-dom"
// import logo from '../assets/images/app-bg.JPG'

const Navbar= ()=>{
    return (
        <>
            <div className="main-nav bg-color">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container ">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link to="/" className="logo">Todo</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Sign-up</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div className=" container user-header mb-5">
                    <div className="user-name"><p className="m-0"><b>Hello Glory</b></p>
                    <small className="p-0">Today you have 4 task</small>
                    </div>
                    <div className="user-pic"><i className="bi bi-person"></i></div>
                </div>
            </div>
            
        </>

        
    )
}

export default Navbar