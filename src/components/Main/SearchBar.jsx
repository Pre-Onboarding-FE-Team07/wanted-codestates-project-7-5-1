import { useState, useContext, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { SearchResultContext, RecomandListContext } from '../../App.jsx';
import fetchData from "../../utilities/fetchData"

const PRODUCT_URL = "https://static.pxl.ai/problem/data/products.json";
const REGION_URL = "https://static.pxl.ai/problem/data/regions.json";

const checkUrl = /^http[s]?\:\/\//i;
const getWordType = (value) => {
    if (isNaN(value)) {
        if (checkUrl.test(value))
            return 'image_url'
        else return 'name';
    }
    return 'product_code';
}

const getFilteredData = (products, word, wordType) => {
    return products.filter((product) => wordType === 'name' ? product.name.includes(word) : product[wordType] == word)
}

const getRecommendList = (products, target) => {
    const category = target[0].name.split("_")[0];
    return products.filter((product) => product.name.includes(category));
}

const getRegionData = (regions, target) => {
    return target.length > 0 ? regions.filter((item) => item.product_code === target[0].product_code) : [];
}

const SearchBar = () => {
    const [searchKeyword, setSearchKeyword] = useState();
    const navigate = useNavigate();
    const { setSearchResult} = useContext(SearchResultContext);
    const { setRecommendList} = useContext(RecomandListContext);

    const updateRecommendList = (products, filteredProducts) => {
        if (filteredProducts.length > 0) {
            const recommendList = getRecommendList(products, filteredProducts);
            setRecommendList(recommendList);
        }
        else {
            setRecommendList([]);
        }
    }

    const handleSearchClick = async (e) => {
        if (searchKeyword.replace(/\s/gi, "") !== "") {
            let word = searchKeyword.trim();
            const wordType = getWordType(word);
            const products = await fetchData(PRODUCT_URL);
            const filteredProducts = getFilteredData(products, word, wordType);
            if (wordType === 'name') {
                setSearchResult(filteredProducts);
                navigate('/keyword');
            }
            else {
                const regions = await fetchData(REGION_URL);
                setSearchResult(getRegionData(regions, filteredProducts));
                updateRecommendList(products, filteredProducts);
                if (wordType === 'image_url') {
                    word = encodeURIComponent(word);
                }
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