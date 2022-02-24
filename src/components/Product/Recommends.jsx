import { useContext } from 'react';
import { RecomandListContext } from '../../App';
import Card from '../Card';
import useSearch from '../../hooks/useSearch';

const Recommends = () => {
  const { recommendList } = useContext(RecomandListContext);
  const { search } = useSearch();

  return (
    <section className="mt-[-1.75rem] box-border flex w-full flex-wrap px-6 py-4">
      {recommendList.map((item) => (
        <Card
          key={item.product_code}
          name={item.name}
          price={item.price}
          imageUrl={item.image_url}
          onClickEvent={() => {
            search(item.image_url);
          }}
        />
      ))}
    </section>
  );
};

export default Recommends;
