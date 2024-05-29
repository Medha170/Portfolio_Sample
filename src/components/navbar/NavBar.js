import React from 'react';
import './NavBar.css';
function NavBar(){
    return (
        <header>
            <div className='sign'>Signature</div>
            <nav>
                <ul className='navbar'>
                    <li className='nav-item'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;