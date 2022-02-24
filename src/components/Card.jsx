import PropTypes from 'prop-types';

export default function Card({ name, price, imageUrl, onClickEvent }) {
  const moneycomma = (price) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    //  카드
    <div
      className="m-7 max-w-[15rem] shrink-0 grow basis-52 cursor-pointer overflow-hidden"
      onClick={onClickEvent}
      aria-hidden="true"
    >
      {/* image 영역 */}
      <div className="w-full bg-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="h-[450px] w-full object-fill object-center hover:opacity-75"
        />
      </div>
      {/* name, price 영역 */}
      <h3 className="mt-4 text-lg text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-purple-600">
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
