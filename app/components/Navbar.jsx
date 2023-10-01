'use client'
import {Link} from 'react-scroll'

const Navbar = ({ }) => {
  return (
    <div className="navbar bg-base-100 rounded-lg sticky top-0 z-10">
      <div className="flex-1">
        <Link to="banner" spy={true} smooth={true} duration={500} className="btn btn-ghost normal-case text-xl">Asad</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="ingrediants"  smooth={true} duration={500}>Ingrediants</Link></li>
          <li><Link to="contact"  smooth={true} duration={500}>Contact</Link></li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              
              <ul className="p-2 bg-base-100">
                <li><Link to="contact"  smooth={true} duration={500}>Contact</Link></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar