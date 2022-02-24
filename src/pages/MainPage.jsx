import SearchBar from '../components/Main/SearchBar';
import Title from '../components/Main/Title';

const MainPage = () => {
  return (
    <div className="m-auto mt-[14vh] h-fit w-[90vw] max-w-[800px] text-center">
      <Title />
      <SearchBar />
    </div>
  );
};

export default MainPage;
