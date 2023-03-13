import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from '../images/logo.png'
import auth from '../utils/auth'
import '../App.css'


function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (

        <div>
            <div className="flex items-center justify-around border-b border-black py-8">
                <a href="/">
                    <img className="bg-black rounded-full"src={logo} alt="logo" />
                </a>
                <nav>
                    <section className="MOBILE-MENU  flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON cursor-pointer space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 bg-gray-600"></span>
                            <span className="block h-0.5 w-8 bg-gray-600"></span>
                            <span className="block h-0.5 w-8 bg-gray-600"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a className="active-link" href="/">Home</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a className="active-link" href="/TourDistances">Tour Distances</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a className="active-link" href="/About">About</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a className="active-link" href="/Profile">Profile</a>
                                </li>
                                {auth.loggedIn() ? (
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a className="active-link" onClick={auth.logout} href="/">Logout</a>
                            </li>
                        ) : (
                            <li></li>
                        )}
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                        <li>
                            <a className="active-link" href="/">Home</a>
                        </li>
                        <li>
                            <a className="active-link" href="/TourDistances">TourDistances</a>
                        </li>
                        <li>
                            <a className="active-link" href="/About">About</a>
                        </li>
                        <li>
                            <a className="active-link" href="/Profile">Profile</a>
                        </li>
                        {auth.loggedIn() ? (
                            <li>
                                <a className="active-link" onClick={auth.logout} href="/">Logout</a>
                            </li>
                        ) : (
                            <li></li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;