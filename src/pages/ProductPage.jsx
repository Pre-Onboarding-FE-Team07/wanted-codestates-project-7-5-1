import { useContext } from 'react';
import { useNavigate } from '../../node_modules/react-router/index';
import { SearchResultContext } from '../App';
import ErrorMessage from '../components/ErrorMessage';
import Aside from '../components/Product/Aside';
import Recommends from '../components/Product/Recommends';

const ProductPage = () => {
  const { searchResult } = useContext(SearchResultContext);
  const navigate = useNavigate();

  const handleErrorConfirm = () => {
    navigate('/');
  };
  if (!searchResult || !searchResult.length)
    return (
      <ErrorMessage
        text="존재하지 않는 상품입니다. "
        onClickEvent={handleErrorConfirm}
      />
    );

  return (
    <article className="flex flex-row">
      <Aside />
      <Recommends />
    </article>
  );
};

export default ProductPage;
