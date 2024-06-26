import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';


function Nav(props) {

    const color = "#4da8da";



    return (
        <nav>
            <div className="logo">
                <ul>
                    <li><a className="toggle-button" href="/">transl8</a> {props.isLoggedIn ? <span class="userNav">Hello, {props.currentUser}</span> : <p></p>}</li>
                </ul>
            </div>
            <div className="navbar-links">
                <ul>
                {props.isLoggedIn ? <span ></span> : <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>}
                    <Link to="/Requests" style={{ textDecoration: 'none' }}><li>Requests</li></Link>
                    <Link to="/Translators" style={{ textDecoration: 'none' }}><li>Translators</li></Link>
                    {props.isLoggedIn ? <>
                        <Link to="/New" style={{ textDecoration: 'none' }}><li>New</li></Link>  
                        <button onClick={() => firebase.auth().signOut()} style={{ background: `${color}`, textDecoration: 'none' }}><li>Logout</li></button>
                    </> : <><Link to="/Register" style={{ textDecoration: 'none' }}><li>Register</li></Link>
                            <Link to="/Login" style={{ textDecoration: 'none' }}><li>Login</li></Link></>}
                </ul>
            </div>
        </nav>
    )
}


export default Nav;