import { useContext } from 'react';
import { useNavigate } from '../../node_modules/react-router/index';
import { SearchResultContext } from '../App';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';

export default function KeywordPage() {
  const { searchResult } = useContext(SearchResultContext);
  const navigate = useNavigate();

  const handleErrorConfirm = () => {
    navigate('/');
  };

  if (!searchResult && !searchResult.length)
    return (
      <ErrorMessage
        text="존재하지 않는 상품입니다. "
        onClickEvent={handleErrorConfirm}
      />
    );
  else
    return (
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {searchResult.map((product) => (
                <div key={product.product_code} className="group relative">
                  <Card
                    name={product.name}
                    price={product.price}
                    imageUrl={product.image_url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
