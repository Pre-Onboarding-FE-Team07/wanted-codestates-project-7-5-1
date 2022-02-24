import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo_pxl_b.png';

const Header = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <header className=" h-[64px] sm:h-[100px] p-4 cursor-pointer" onClick={onClick}>
      <img className="w-[50px] sm:w-[80px]"src={logo} alt="PXL Logo" />
    </header>
  );
};

export default memo(Header);
