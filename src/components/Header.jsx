import logo from "../assets/logo.svg";
import navopen from "../assets/icon-menu.svg"
import navclose from "../assets/icon-menu-close.svg"
import { useState } from "react";

function Header() {

    const [isMenuOpen,setIsMenuOpen] = useState(true)

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const navItemClass = "font-light text-gray-700 text-2xl cursor-pointer hover:text-red-600";
    const menuStyles = "text-black text-xl font-semibold"
    return (
        <header className="flex justify-between items-center p-4 h-20 ">
            {/* Logo */}
            <div>
                <img src={logo} alt="Application Logo" className="h-10" />
            </div>

            {/* Navigation Bar */}

            <nav >
                {/* Mobile Menu Toggle Button */}
            <div>
                 <button onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? (
                    <img src={navopen} alt="icon-menu" className="h-8  w-14" />
                ) : (
                    <div className="absolute  top-14 right-10 h-full w-1/2 bg-white ">
                        <img src={navclose} alt="icon-menu" className="h-8  absolute top-4 left-80" />
                     <div
            className={` ${ isMenuOpen ? "hidden" : "block"} md:hidden w-1/2 `}
            >
               
    <ul className="mt-16 space-y-8 px-6">
      <li><a href="#" className={menuStyles}>Home</a></li>
      <li><a href="#" className={menuStyles}>New</a></li>
      <li><a href="#" className={menuStyles}>Popular</a></li>
      <li><a href="#" className={menuStyles}>Trending</a></li>
      <li><a href="#" className={menuStyles}>Categories</a></li>
    </ul>  
            </div>
                    </div>
                )}
                </button>
            </div>


                <ul className="md:flex space-x-6 hidden ">
                    <li className={navItemClass}>Home</li>
                    <li className={navItemClass}>New</li>
                    <li className={navItemClass}>Popular</li>
                    <li className={navItemClass}>Trending</li>
                    <li className={navItemClass}>Categories</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
