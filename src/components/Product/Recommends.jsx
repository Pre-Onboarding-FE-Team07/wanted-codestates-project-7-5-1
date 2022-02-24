import { useContext } from 'react';
import { RecomandListContext } from '../../App';

const Recommends = () => {
  const { recommendList } = useContext(RecomandListContext);

  console.log(recommendList);

  return <section className="ml-8 w-full py-4">Right Section</section>;
};

export default Recommends;
