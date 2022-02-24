import SearchBar from "../components/Main/SearchBar";
import Title from "../components/Main/Title";

const MainPage = () =>{
    return (
        <div className="Home m-auto text-center w-[90vw] max-w-[800px] h-fit mt-[14vh]">
            <Title/>
            <SearchBar/>
        </div>
    );
}

export default MainPage;
