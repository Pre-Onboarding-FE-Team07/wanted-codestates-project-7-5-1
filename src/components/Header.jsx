import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo_pxl_b.png';

const Header = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div style={divStyle} onClick={onClick}>
      <img src={logo} alt="PXL Logo" />
    </div>
  );
};

export default memo(Header);

const divStyle = {
  margin: '1rem',
  width: '100px',
  maxHeight: '100px',
  cursor: 'pointer',
};
