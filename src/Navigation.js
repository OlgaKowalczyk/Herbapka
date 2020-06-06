import React from 'react';


const Navigation = () => {
    
    const activeStyle = {
        fontWeight: 600
    }
      return (
        <nav>
          {/* <ul>
            <li><NavLink to='/addNewTea' activeStyle={activeStyle}> Twój dziennik </NavLink></li>
            <li><NavLink to='/addNewTea' activeStyle={activeStyle}> Dodaj herbatę </NavLink></li>
            <li><NavLink to='/learn' activeStyle={activeStyle}> Dowiedz się więcej </NavLink></li>
          </ul> */}
        </nav>
      );
}

export default Navigation;