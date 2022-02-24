import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const WithHeaderPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default WithHeaderPage;
