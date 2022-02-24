import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return <h3 className="mb-3 font-semibold text-gray-600">{title}</h3>;
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
