import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                        <img src="https://res.cloudinary.com/dusnjqou6/image/upload/v1627110485/Guappjolotas/logo_fnpe6f.svg" alt="imagen"/>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Todas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/masvaloradas">Mas valoradas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/menosvaloradas">Menos valoradas</Link>
                                </li>
                                <li>
                                    <input className="form-control col" type="search" placeholder="Search" aria-label="Search" />
                                </li>
                                <li className="ms-1">
                                    <button className="btn btn-outline-warning" type="submit">Search</button>
                                </li>
                            </ul>
                            <li className="justify-content-end">
                                <Link type="button" className="btn btn-outline-primary" to="/account/login">Login</Link>
                                <Link type="button" className="btn btn-outline-primary" to="/account/register">Register</Link>
                            </li>

                        </div>

                </div>
            </nav>
        </div>
            )
}
