import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo_pxl_b.png';

const Header = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <header
      className=" h-[64px] cursor-pointer p-4 sm:h-[100px]"
      onClick={onClick}
    >
      <img className="w-[50px] sm:w-[80px]" src={logo} alt="PXL Logo" />
    </header>
  );
};

export default memo(Header);
