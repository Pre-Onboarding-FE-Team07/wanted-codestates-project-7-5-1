import { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from '../../node_modules/react-router/index';
import { SearchResultContext } from '../App';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import useSearch from '../hooks/useSearch';

export default function KeywordPage() {
  const { searchResult } = useContext(SearchResultContext);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(15);
  const { search } = useSearch();

  const navigate = useNavigate();
  const handleErrorConfirm = () => {
    navigate('/');
  };

  useEffect(() => {
    if (searchResult) {
      setLoading(false);
    }
  }, [loading]);

  const showMore = useCallback(() => {
    setPagination((prev) => prev + 15);
  }, [pagination]);

  if (loading) {
    return <Loading />;
  } else if (!searchResult || !searchResult.length)
    return (
      <ErrorMessage
        text="존재하지 않는 상품입니다. "
        onClickEvent={handleErrorConfirm}
      />
    );
  else
    return (
      <>
        <div className="mx-8">
          <section className="grid grid-cols-1 justify-items-center sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
            {searchResult.map(
              (product, index) =>
                index < pagination && (
                  <Card
                    key={product.product_code}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.image_url}
                    onClickEvent={() => {
                      search(product.image_url);
                    }}
                  />
                )
            )}
          </section>
        </div>
        {searchResult.length > pagination && (
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
}
