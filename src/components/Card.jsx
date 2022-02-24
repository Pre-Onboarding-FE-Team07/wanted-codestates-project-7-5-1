import PropTypes from 'prop-types';

export default function Card({ name, price, imageUrl, onClickEvent }) {
  const moneycomma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    //  카드
    <div
      className="overflow-hidden group-hover:opacity-75"
      onClick={onClickEvent}
      aria-hidden="true"
    >
      {/* image 영역 */}
      <div className="w-full bg-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="max-h-80 min-h-[20rem] w-full rounded-lg object-fill object-center"
        />
      </div>
      {/* name, price 영역 */}
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-indigo-600">
        ₩{moneycomma(price)}
      </p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  onClickEvent: PropTypes.func,
};
