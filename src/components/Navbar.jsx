import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h1><Link to={`/`}>NavBar</Link></h1>
                <div className="collapse navbar-collapse position-absolute top-1 end-0" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={`/`} className="nav-link active" aria-current="page" >Home</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to={`/new`} className="nav-link" >Posts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar