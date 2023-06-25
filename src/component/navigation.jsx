import React from 'react';
import logo from "../images/logo.png";

 export const dtNavigation = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "profile",
        title: "Profile",
    },

];


function navigation () {
    return ( 
        <>
        <div className={'flex h-24 bg-red-500 py-8 px-32 justify-between'}>
        <img className={'flex h-24'} src={logo} alt="img"/>
        <ul className="flex space-x-6">
        {dtNavigation.map((index) => (
            <li key={index.id} className="text-sm font-bold text-white cursor-pointer">
                {index.title}
            </li>
        ))}
    </ul>
        </div>
           
        </>
     );
}

export default navigation;