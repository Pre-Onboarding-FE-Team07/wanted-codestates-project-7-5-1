import { useState, useCallback } from 'react';
import useSearch from '../../hooks/useSearch';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState();
  const { search } = useSearch();

  const handleSearchClick = async () => {
    if (searchKeyword.replace(/\s/gi, '') !== '') {
      search(searchKeyword);
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
