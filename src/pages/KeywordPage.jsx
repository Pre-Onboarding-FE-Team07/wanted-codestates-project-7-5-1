import Card from '../components/Card';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

export default function KeywordPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const products = [
    {
      product_code: 1,
      name: '조끼_070',
      image_url: 'https://static.pxl.ai/problem/images/VT-070.jpg',
      price: 45065,
      category_names: ['c1.tops', 'c2.outwears', 'c3.vests'],
    },
    {
      product_code: 2,
      name: '원피스_019',
      image_url: 'https://static.pxl.ai/problem/images/OP-019.jpg',
      price: 34592,
      category_names: ['c1.onepiece', 'c2.dresses', ''],
    },
    {
      product_code: 3,
      name: '자켓_093',
      image_url: 'https://static.pxl.ai/problem/images/JK-093.jpg',
      price: 20544,
      category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
    },
    {
      product_code: 4,
      name: '자켓_087',
      image_url: 'https://static.pxl.ai/problem/images/JK-087.jpg',
      price: 23371,
      category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
    },
  ];

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
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
      )}
    </div>
  );
}
