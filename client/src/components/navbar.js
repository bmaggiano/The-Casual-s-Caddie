import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import auth from '../utils/auth'


function Navbar() {

    const [currentPage, setCurrentPage] = useState();
    let location = useLocation();


    useEffect(() => {
        setCurrentPage(location.pathname)
    });

    return (
        <>
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link
                    to={'/'}
                    onClick={() => setCurrentPage("Home")}
                    className={currentPage === "/" ? "nav-link active" : "nav-link"}
                >
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={'/About'}
                    onClick={() => setCurrentPage("About")}
                    className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                >
                About
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={'/TourDistances'}
                    onClick={() => setCurrentPage("TourDistances")}
                    className={currentPage === "/TourDistances" ? "nav-link active" : "nav-link"}
                >
                TourDistances
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={'/Profile'}
                    onClick={() => setCurrentPage("Profile")}
                    className={currentPage === "/Profile" ? "nav-link active" : "nav-link"}
                >
                Profile
                </Link>
            </li>
        </ul>
        </>
    )
}

export default Navbar;