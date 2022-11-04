import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
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

function Home() {
    return <h2>Home</h2>;
}

function About() {

    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
