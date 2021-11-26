import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Router V6</Link>
                <div>
                    <NavLink to="/" className="btn btn-outline-primary me-2">Home</NavLink>
                    <NavLink to="/blog" className="btn btn-outline-primary me-2">Blog</NavLink>
                    <NavLink to="/contact" className="btn btn-outline-primary">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
