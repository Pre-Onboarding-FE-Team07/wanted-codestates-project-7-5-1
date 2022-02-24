import PropTypes from 'prop-types';

export default function Card({ name, price, imageUrl, onClickEvent }) {
  return (
    //  카드
    <div
      className="group-hover:opacity-75"
      onClick={onClickEvent}
      aria-hidden="true"
    >
      {/* image 영역 */}
      <div className="w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* name, price 영역 */}
      <div className="mt-4 flex justify-between">
        <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-indigo-600">{price}</p>
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
