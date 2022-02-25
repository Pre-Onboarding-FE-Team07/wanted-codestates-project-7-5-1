import { useContext } from 'react';
import { RecomandListContext } from '../../App';
import Card from '../Card';
import useSearch from '../../hooks/useSearch';
import PropTypes from 'prop-types';

const Recommends = ({ pagination }) => {
  const { search } = useSearch();
  const { recommendList } = useContext(RecomandListContext);

  return (
    <section className="mt-[-1.75rem] box-border flex w-full flex-wrap px-6 py-4">
      {recommendList.map(
        (item, index) =>
          index < pagination && (
            <Card
              key={item.product_code}
              name={item.name}
              price={item.price}
              imageUrl={item.image_url}
              onClickEvent={() => {
                search(item.image_url);
              }}
            />
          )
      )}
    </section>
  );
};

Recommends.propTypes = {
  pagination: PropTypes.number.isRequired,
};

export default Recommends;
