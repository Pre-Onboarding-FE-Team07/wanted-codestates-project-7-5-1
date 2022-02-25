import { useContext, useEffect, useState } from 'react';
import { useNavigate } from '../../node_modules/react-router/index';
import { SearchResultContext } from '../App';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import useSearch from '../hooks/useSearch';

export default function KeywordPage() {
  const { searchResult } = useContext(SearchResultContext);
  const [loading, setLoading] = useState(true);
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
      <section className="mx-auto box-border flex w-full p-10">
        <div className="flex flex-wrap justify-center">
          {searchResult.map((product) => (
            <Card
              key={product.product_code}
              name={product.name}
              price={product.price}
              imageUrl={product.image_url}
              onClickEvent={() => {
                search(product.image_url);
              }}
            />
          ))}
        </div>
      </section>
    );
}
