import Card from './components/Card';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
  ];

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <Card
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
