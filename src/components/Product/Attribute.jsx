import { memo } from 'react';
import PropTypes from 'prop-types';

const Attribute = ({ sort, value }) => {
  return (
    <li className="my-[9px] leading-5">
      <div className="mr-8 text-purple-600">#{value}</div>
      <div className="text-gray-500">{sort}</div>
    </li>
  );
};

Attribute.propTypes = {
  sort: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default memo(Attribute);
