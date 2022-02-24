import AttributeList from './AttributeList';
import Section from './Section';

const Aside = () => {
  return (
    <aside className="w-72 p-4">
      <img src="" alt="product" className="w-full" />
      <Section title="ITEMS">
        <span className="bg-purple-600 text-white">ONE PIECE</span>
      </Section>
      <hr />
      <Section title="ATTRIBUTES">
        <AttributeList />
      </Section>
    </aside>
  );
};

export default Aside;
