import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledNavbar, NavbarWrapper } from './navbarStyle';

const Navbar = ({ className }) => {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? 'current' : '';
  };

  return (
    <>
      <NavbarWrapper className={className}>
        {/* Make sure to pass the className prop to this wrapper from any parent component where the Navbar is used. */}
        <StyledNavbar>
          <Link to='/'>
            <img src='/photo_13_2024-04-01_12-20-03.jpg' alt='' />
          </Link>
          <ul>
            <li>
              <NavLink to='/wintr' className={handleActiveLink}>
                SCADA
              </NavLink>
            </li>
            <li>
              <NavLink to='/progetti' className={handleActiveLink}>
                PROGETTI
              </NavLink>
            </li>
            <li>
              <NavLink to='/news' className={handleActiveLink}>
                NEWS
              </NavLink>
            </li>
            <li>
              <NavLink to='/contatti' className={handleActiveLink}>
                CONTATTI
              </NavLink>
            </li>
          </ul>
        </StyledNavbar>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
