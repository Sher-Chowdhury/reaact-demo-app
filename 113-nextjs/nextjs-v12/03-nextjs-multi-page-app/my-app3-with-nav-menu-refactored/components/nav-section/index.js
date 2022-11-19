import Link from "next/link";

export default function NavMenu() {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    );
}