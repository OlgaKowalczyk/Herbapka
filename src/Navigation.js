import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    
 
    const activeStyle = {
        fontWeight: 600,
        textDecoration: 'none'
    }
    
      return (
          <nav className='nav'>
              <NavLink to='/' activeStyle={activeStyle}> 
                  <h3>logo</h3>
              </NavLink>
              <ul className='nav_li'>
                  <NavLink to='/teaList' activeStyle={activeStyle}> 
                      <li className='nav_li'>Twój dziennik herbaciany</li>
                  </NavLink>
                  <NavLink to='/addNewTea' activeStyle={activeStyle}> 
                      <li className='nav_li'>Dodaj herbatę</li>
                  </NavLink>  
                  <NavLink to='/learn' activeStyle={activeStyle}>
                      <li className='nav_li'>Dowiedz się więcej</li>
                  </NavLink>
              </ul>
          </nav>
      );
}

export default Navigation;