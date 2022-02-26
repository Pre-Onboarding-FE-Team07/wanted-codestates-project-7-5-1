import { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import AttributeList from './AttributeList';
import Section from './Section';

const Aside = ({ searchResult }) => {
  const { image_url, attributes, category_names } = useMemo(
    () => searchResult?.[0],
    [searchResult]
  );

  const category = useMemo(() => {
    const c1 = category_names[0].split('.')[1];
    const category = c1.substr(0, c1.length - 1).toUpperCase();
    return category;
  }, [category_names]);

  return (
    <aside className="box-border w-[340px] p-4">
      <div className="h-[300px] w-full overflow-hidden bg-gray-200">
        <img
          src={image_url}
          alt="product"
          className="block h-fit w-full bg-cover"
        />
      </div>
      <Section title="ITEMS">
        <span className="my-[9px] inline-block bg-purple-500 p-1 text-white">
          {category}
        </span>
      </Section>
      <hr />
      <Section title="ATTRIBUTES">
        <AttributeList data={attributes} />
      </Section>
    </aside>
  );
};

Aside.propTypes = {
  searchResult: PropTypes.array.isRequired,
};

export default memo(Aside);
