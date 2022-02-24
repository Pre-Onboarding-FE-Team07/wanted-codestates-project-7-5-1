import { useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchResultContext, RecomandListContext } from '../../App.jsx';
import products from '../../datas/products.json';

const checkUrl = /^http[s]?\:\/\//i;
const getWordType = (value) => {
  if (isNaN(value)) {
    if (checkUrl.test(value)) return 'image_url';
    else return 'name';
  }
  return 'product_code';
};

const getFilteredData = (word, wordType) => {
  return products.filter((product) =>
    wordType === 'name'
      ? product.name.includes(word)
      : product[wordType] == word
  );
};

const getRecommendList = (target) => {
  const category = target[0].name.split('_')[0];
  return products.filter((product) => product.name.includes(category));
};

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState();
  const navigate = useNavigate();
  const { setSearchResult } = useContext(SearchResultContext);
  const { setRecommendList } = useContext(RecomandListContext);

  const updateRecommendList = (filteredProducts) => {
    if (filteredProducts.length > 0) {
      const recommendList = getRecommendList(filteredProducts);
      setRecommendList(recommendList);
    } else {
      setRecommendList([]);
    }
  };

  const handleSearchClick = (e) => {
    if (searchKeyword.replace(/\s/gi, '') !== '') {
      let word = searchKeyword.trim();
      const wordType = getWordType(word);
      const filteredProducts = getFilteredData(word, wordType);

      setSearchResult(filteredProducts);
      if (wordType === 'name') {
        navigate('/keyword');
      } else {
        updateRecommendList(filteredProducts);
        if (wordType === 'image_url') {
          word = encodeURIComponent(word);
        }
        navigate(`/product/${word}`);
      }
    }
  };

  const handleKeyUp = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        handleSearchClick();
      }
    },
    [searchKeyword]
  );

  const handleInputChange = useCallback((e) => {
    setSearchKeyword(e.target.value);
  }, []);

  return (
    <div className="flex flex-row justify-between">
      <input
        type="text"
        placeholder="IMAGE URL or KEYWORD"
        className="flex-1 rounded-full px-8 py-4 text-left shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)] focus:shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)] focus:outline-0"
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
      <button
        className="my-2 ml-2 w-14 rounded-md bg-gray-200 tracking-wider text-zinc-500 hover:bg-gray-300 md:ml-10 md:w-20"
        onClick={handleSearchClick}
      >
        검색
      </button>
    </div>
  );
};

export default SearchBar;
