// NavBar.jsx
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav style={{ padding: '1rem', background: '#eee' }}>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

