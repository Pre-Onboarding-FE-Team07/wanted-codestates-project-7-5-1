import { useContext, useState } from 'react';
import { RecomandListContext } from '../../App';
import Card from '../Card';
import ProductDetails from '../ProductDetails';

const Recommends = () => {
  const { recommendList } = useContext(RecomandListContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <section className="ml-8 mr-6 flex w-full flex-wrap py-4">
      {recommendList.map((item) => (
        <Card
          key={item.product_code}
          name={item.name}
          price={item.price}
          imageUrl={item.image_url}
          onClickEvent={() => setSelectedItem(item)}
        />
      ))}
      {selectedItem && (
        <ProductDetails item={selectedItem} onClickEvent={closeDetails} />
      )}
    </section>
  );
};

export default Recommends;
