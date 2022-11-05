import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import NavMenu from './common-components/navMenu'

import About from './pages/about/_about';
import Home from './pages/home/_home';
import Users from './pages/users/_users';


export default function App() {
    return (
        <Router>
            <NavMenu />

            <Routes>
                <Route
                    path="/about"
                    element={<About/>}
                />
                <Route
                    path="/users"
                    element={<Users/>}
                />
                <Route
                    path="/"
                    element={<Home/>}
                />
            </Routes>
        </Router>
    );
}


