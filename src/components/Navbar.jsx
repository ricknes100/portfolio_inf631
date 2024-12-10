import {Link, NavLink} from 'react-router-dom';
import {navLinks} from '../constants';

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center gap-8 h-16 w-full px-8 sm:px-16">
            <Link to="/home" className="flex items-center gap-1">
                <div className="bg-primary rounded-full size-8 flex items-center justify-center text-black">
                    R
                </div>
                ICARDO
            </Link>
            <div id="menu"
                 className="flex gap-6 ml-16 max-lg:hidden">
                {
                    navLinks.map((link) => (
                        <NavLink key={link.label}
                                 to={link.href}
                                 className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                            {link.label}
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    )
}
