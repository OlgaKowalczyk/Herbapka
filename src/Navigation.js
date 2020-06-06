import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    
    const navStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      alignIems: 'center',
      minHeight: '10vh',
      listStyle: 'none',
    }
    const activeStyle = {
        fontWeight: 600
    }
    
      return (
          <nav>
              <NavLink to='/' activeStyle={activeStyle}> 
                  <h3>logo</h3>
              </NavLink>
              <ul style={navStyle}>
                  <NavLink to='/teaList' activeStyle={activeStyle}> 
                      <li>Twój dziennik herbaciany</li>
                  </NavLink>
                  <NavLink to='/addNewTea' activeStyle={activeStyle}> 
                      <li>Dodaj herbatę</li>
                  </NavLink>  
                  <NavLink to='/learn' activeStyle={activeStyle}>
                      <li>Dowiedz się więcej</li>
                  </NavLink>
              </ul>
          </nav>
      );
}

export default Navigation;