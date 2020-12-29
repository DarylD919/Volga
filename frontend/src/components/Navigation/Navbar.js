import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as IconsFa from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Sidebar } from './Sidebar';
import '../../index.css';
import { useSelector } from 'react-redux';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    const mark = useSelector((state) => state.mark);
    const { bookMarks } = mark;

    return (
        <>
        <IconContext.Provider value={{color: '#000'} }>
        <div className="navbar">
            <Link to="#" className='menu-bars'>
                <IconsFa.FaIndent onClick={showSidebar} />
            </Link>
        </div>
        <Link className="navbar-title" to="/">
            Volga
        </Link>
        <Link className="navbar-book" to="/bookmark">
            <IconsFa.FaBookmark />
            {bookMarks.length > 0 && (
                <span className="badge">{bookMarks.length}</span>
            )}
        </Link>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to ="#" className='menu-bars'>
                        <IconsFa.FaOutdent />
                    </Link>
                </li>
                {Sidebar.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to ={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
