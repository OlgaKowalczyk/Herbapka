import React from 'react';
import { NavLink } from 'react-router-dom';
// import { faEnvira } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
    
 
    const activeStyle = {
        fontWeight: 600,
        textDecoration: 'none'
    }
    
      return ( 
          <>
            <div className='nav_header'></div>
            <nav className='nav'>
                        <ul className='nav_ul'>
                            <NavLink to='/'> 
                                <div className='logo-image'></div>     
                            </NavLink>
                            <NavLink className='nav_link' to='/teaList' activeStyle={activeStyle}> 
                                <li className='nav_li nav_li-start'>Dziennik herbaciany</li>
                            </NavLink>
                            <NavLink className='nav_link' to='/addNewTea' activeStyle={activeStyle}> 
                                <li className='nav_li'>Dodaj herbatę</li>
                            </NavLink>  
                            <NavLink className='nav_link' to='/learn' activeStyle={activeStyle}>
                                <li className='nav_li'>Dowiedz się więcej</li>
                            </NavLink>
                        </ul>
            </nav>
          </>
      );
}

export default Navigation;