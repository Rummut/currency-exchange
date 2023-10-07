import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from 'redux/operations';
import { setBaseCurrency } from 'redux/curruncySlice';
const Home = lazy(() => import('pages/home'));
const Rates = lazy(() => import('pages/rates'));
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error(err) {
      dispatch(setBaseCurrency('USD'));
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Route>
    </Routes>
  );
};
