import SearchBar from "../components/Main/SearchBar";
import Title from "../components/Main/Title";

function Home() {
    return (
        <div className="Home m-auto text-center max-w-[90vw] w-full h-fit mt-[14vh]">
            <Title/>
            <SearchBar/>
        </div>
    );
}

export default Home;
