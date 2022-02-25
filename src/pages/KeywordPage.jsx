<<<<<<< HEAD
import { useContext, useEffect, useState } from 'react';
=======
import { useContext, useEffect, useState, useCallback } from 'react';
>>>>>>> cdf9c245e99a25fce535fc7b1b3d6fbd38bdf1c0
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
  }, []);

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
        <section className="mx-auto box-border flex w-full p-10">
          <div className="flex flex-wrap justify-center">
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
          </div>
        </section>
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
