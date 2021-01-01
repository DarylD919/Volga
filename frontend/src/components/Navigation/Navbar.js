import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as IconsFa from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from './Sidebar';
import { signout } from '../../actions/userActions';
import '../../index.css';


function Navbar(props) {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    const mark = useSelector((state) => state.mark);
    const { bookMarks } = mark;


    const dispatch = useDispatch();
    const signoutHandler = () => {
    dispatch(signout());
    }



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
        <Link className="navbar-book" to={'/signin?redirect=bookmark'}>
            <IconsFa.FaBookmark />
            {bookMarks.length > 0 && (
                <span className="badge">{bookMarks.length}</span>
            )}
        </Link>
        {userInfo ? (
            <div className="dropdown">
                <Link to="#">{userInfo.name}<IconsFa.FaChevronDown /></Link>
                <ul className= "dropdown-content">
                    <li>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="#signout" onClick={signoutHandler}>
                            Sign Out
                        </Link>
                    </li>
                </ul>
            </div>
        ) : (
            <Link className="navbar-ss" to={`/signin`}>
            SignIn
            </Link>
        )}
        {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
                <Link className="admin" to="#admin">
                    Admin
                </Link>
                <ul className="admin-dropdown-content">
                    <li>
                        <Link to="/booklist">Books</Link>
                    </li>
                    <li>
                        <Link to="/userlist">Users</Link>
                    </li>
                </ul>
            </div>
        )}
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
