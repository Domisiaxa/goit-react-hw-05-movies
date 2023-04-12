import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: rgb(85, 85, 85);
  font-size: 22px;
  font-weight: 600;
  margin-left: 30px;
  text-decoration: none;
  &.active {
    color: rgb(204, 37, 176);
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <div>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <StyledLink className={styles.navLink} to="/">
              Home
            </StyledLink>
            <StyledLink className={styles.navLink} to="/movies">
              Movies
            </StyledLink>
          </nav>
        </header>
      </div>
      <div className={styles.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
