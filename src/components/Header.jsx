import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectByCurrency } from 'redux/selector';

export const Header = () => {
  const baseCurrency = useSelector(selectByCurrency);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rates">Rates</NavLink>
            </li>
          </ul>
        </nav>
        {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
