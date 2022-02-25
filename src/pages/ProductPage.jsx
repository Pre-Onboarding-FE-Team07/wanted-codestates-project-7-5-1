import { useContext, useState, useCallback } from 'react';
import { useNavigate } from '../../node_modules/react-router/index';
import { SearchResultContext, RecomandListContext } from '../App';
import ErrorMessage from '../components/ErrorMessage';
import Aside from '../components/Product/Aside';
import Recommends from '../components/Product/Recommends';

const ProductPage = () => {
  const { searchResult } = useContext(SearchResultContext);
  const { recommendList } = useContext(RecomandListContext);
  const [pagination, setPagination] = useState(15);
  const navigate = useNavigate();

  const showMore = useCallback(() => {
    setPagination((prev) => prev + 15);
  }, [pagination]);

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
    <>
      <article className="flex flex-row">
        <Aside searchResult={searchResult} />
        <Recommends pagination={pagination} />
      </article>
      {recommendList.length > pagination && (
        <div className="flex justify-center">
          <button
            className="my-5 rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-700"
            onClick={showMore}
          >
            더보기
          </button>
        </div>
      )}
    </>
  );
};

export default ProductPage;
