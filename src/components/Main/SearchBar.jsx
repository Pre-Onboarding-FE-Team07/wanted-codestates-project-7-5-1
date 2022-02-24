import { useState, useCallback } from "react";
import useSearch from "../../hooks/useSearch"

const SearchBar = () => {
    const [searchKeyword, setSearchKeyword] = useState();
    const { search } = useSearch();

    const handleSearchClick = async (e) => {
        if (searchKeyword.replace(/\s/gi, "") !== "") {
            search(searchKeyword);
        }
    }

    const handleKeyUp = useCallback((e) => {
        if (e.keyCode === 13) {
            handleSearchClick();
        }
    }, [searchKeyword]);

    const handleInputChange = useCallback((e) => {
        setSearchKeyword(e.target.value);
    }, []);


    return (
        <div className="flex flex-row justify-between">
            <input type="text" placeholder="IMAGE URL or KEYWORD"
                className="shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)] rounded-full px-8 py-4 text-left flex-1 focus:outline-0 focus:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]"
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
            />
            <button className="rounded-md w-14 md:w-20 my-2 text-zinc-500 bg-gray-200 ml-2 md:ml-10 tracking-wider hover:bg-gray-300"
                onClick={handleSearchClick}>검색</button>
        </div>
    );
};

export default SearchBar;