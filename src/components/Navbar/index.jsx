import React from 'react';
import NavLogo from '../../images/logo.svg';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
        <nav className="relative top-0 flex flex-wrap items-center justify-between bg-brand-color py-6 md:py-6 w-full">
        <div className="container px-4 w-10/10 md:w-10/12  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 "
              href="/"
            >
               <div className="logo p-2 ">
                <img src={NavLogo} alt="" />
            </div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
            </button>
          </div>
          <div
            className={
              "absolute top-20 right-0 md:top-0 md:right-0 z-50 md:z-0  md:relative lg:flex flex-col md:flex-row w-full md:w-auto md:flex-grow bg-white md:bg-transparent items-center py-2 md:py-0" +
              (navbarOpen ? " flex" : " hidden")
            } 
    
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto md:px-6" >
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md font-bold leading-snug text-vDDGblue md:text-white hover:opacity-75"
                  href="#pablo"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md font-bold leading-snug text-vDDGblue md:text-white hover:opacity-75"
                  href="#pablo"
                >
                 Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md font-bold leading-snug text-vDDGblue md:text-white hover:opacity-75"
                  href="#pablo"
                >
                  Projects
                </a>
              </li>

            </ul>
             <div className="search-container px-4">
                   <button className='px-8 py-3  bg-yellow md:bg-white uppercase hover:text-white rounded-full hover:bg-darkModCyan'>Contact</button>
            </div>
          </div>

          
        </div>
      </nav>
  );
};

export default Navbar;
