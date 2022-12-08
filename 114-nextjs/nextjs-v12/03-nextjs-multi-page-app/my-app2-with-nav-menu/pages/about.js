import { useState } from 'react';
import Link from "next/link";

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

function NavMenu() {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    );
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

