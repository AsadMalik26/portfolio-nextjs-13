'use client'
import { Link } from 'react-scroll'

const Navbar = ({ }) => {
  return (
    <div className="navbar bg-base-100 rounded-lg sticky top-0 z-10">
      <div className="flex-1">
        <Link to="banner" spy={true} smooth={true} duration={500} className="btn btn-ghost normal-case text-xl">Asad</Link>
      </div>
      <div className="hidden flex-none md:flex">
        <ul className="hidden menu menu-horizontal px-1 md:flex">
          <li><Link to="ingrediants" smooth={true} duration={500}>Ingrediants</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      <div className="md:hidden flex-none">
        <ul className="menu menu-horizontal menu-dropdown-toggle px-1">
          <li>
            <details>
              <summary>
                Menu
              </summary>

              <ul className="p-2 bg-base-100">
                <li><Link to="ingrediants" smooth={true} duration={500}>Ingrediants</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar