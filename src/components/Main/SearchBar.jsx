import { useState, useContext, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { SearchResultContext, RecomandListContext } from '../../App.jsx';
import ErrorMessage from '../ErrorMessage';
import products from "../../datas/products.json";

const checkUrl = /^http[s]?\:\/\//i;
function getWordType(value) {
    if (isNaN(value)) {
        if (checkUrl.test(value))
            return 'image_url'
        else return 'name';
    }
    return 'product_code';
}

function getFilteredData(word, wordType) {
    return products.filter((product) => wordType === 'name' ? product.name.includes(word) : product[wordType] == word)
}

const SearchBar = () => {
    const [searchKeyword, setSearchKeyword] = useState();
    const [isEmptyResult, setIsEmptyResult] = useState(false);
    const navigate = useNavigate();
    const searchResultDispatch = useContext(SearchResultContext);
    const recommendListDispatch = useContext(RecomandListContext);

    const handleCloseModal = useCallback((e) => {
        setIsEmptyResult(false);
    }, []);

    const handleSearchClick = (e) => {
        if (searchKeyword.replace(/\s/gi, "") !== "") {
            const word = searchKeyword.trim();
            const wordType = getWordType(word);
            const filteredProducts = getFilteredData(word, wordType);
            if (filteredProducts.length === 0) {
                setIsEmptyResult(true);
                return;
            }

            searchResultDispatch.setSearchResult(filteredProducts);
            if (wordType === 'name') {
                navigate('/keyword');
            }
            else {
                recommendListDispatch.setRecommendList(filteredProducts);
                navigate(`/product/${word}`);
            }
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
            { isEmptyResult && <ErrorMessage text="검색 결과가 없습니다." onClickEvent={handleCloseModal} />}
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