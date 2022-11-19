import { useState } from 'react';
import NavMenu from "../components/nav-section";

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function About() {
    const names = ['Tony Stark', 'Peter Parker', 'Bruce Banner'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="About" />
            <NavMenu />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}

