import React from 'react';
import * as IconsFa from 'react-icons/fa';


export const Sidebar = 
[
    {
        title:'Home',
        path: '/',
        icon:<IconsFa.FaHome/>,
        cName: 'nav-sub'
    },
    {
        title:'Review',
        path: `/signin?redirect=review`,
        icon:<IconsFa.FaFileAlt />,
        cName: 'nav-sub'
    },
    {
        title:'Categories',
        path: '/Category',
        icon:<IconsFa.FaGripVertical/>,
        cName: 'nav-sub'
    },
    
]
