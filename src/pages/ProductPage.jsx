import Aside from '../components/Product/Aside';

const ProductPage = () => {
  return (
    <article className="flex flex-row">
      <Aside />
      <div className="w-full py-4">Right Section</div>
    </article>
  );
};

export default ProductPage;
