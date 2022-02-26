import PropTypes from 'prop-types';

export default function Card({ name, price, imageUrl, onClickEvent }) {
  const moneycomma = (price) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    //  카드
    <div
      className="m-3 w-[200px] cursor-pointer border-2 border-zinc-200"
      onClick={onClickEvent}
      aria-hidden="true"
    >
      {/* image 영역 */}
      <div className="h-[250px] w-full overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="block h-full w-full truncate object-fill hover:opacity-75"
        />
      </div>
      {/* name, price 영역 */}
      <div className="bg-white pl-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-base font-medium text-purple-600">
          ₩{moneycomma(price)}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  onClickEvent: PropTypes.func,
};
