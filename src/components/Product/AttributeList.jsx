import { memo } from 'react';
import PropTypes from 'prop-types';
import Attribute from './Attribute';

const AttributeList = ({ data }) => {
  if (!data.length) return <div className="text-purple-600">#No Attribute</div>;
  return (
    <ul className="flex flex-row flex-wrap">
      {data.map((item) => {
        const key = Object.keys(item)[0];
        return <Attribute key={key} sort={key} value={item[key]} />;
      })}
    </ul>
  );
};

AttributeList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default memo(AttributeList);
