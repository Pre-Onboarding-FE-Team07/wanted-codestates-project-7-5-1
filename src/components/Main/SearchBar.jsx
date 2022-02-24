import { useState } from "react";
import products from "../../datas/products.json";

const SearchBar = () => {
    const [searchKeyword, setSearchKeyword] = useState();
    function handleClick() {
        if (searchKeyword.replace(/\s/gi, "") !== "") {
            const word = searchKeyword.trim();
            const filteredProducts = products.filter(({ product_code, url, name }) => product_code == word || url === word || name.includes(word));
            console.log(filteredProducts)
        }
    }

    function handleInputChange(e) {
        setSearchKeyword(e.target.value);
    }
    return (
        <div className="flex flex-row justify-between">
            <input type="text" placeholder="IMAGE URL or KEYWORD"
                className="shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)] rounded-full px-8 py-4 text-left flex-1"
                onChange={handleInputChange}
            />
            <button className="rounded-md w-14 md:w-20 my-2 text-zinc-500 bg-gray-200 ml-2 md:ml-10 tracking-wider"
                onClick={handleClick}>검색</button>
        </div>
    );
};

export default SearchBar;
