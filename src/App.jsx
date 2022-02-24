import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import WithHeaderPage from './pages/WithHeaderPage';
import MainPage from '.pages/MainPage';
import KeywordPage from './pages/KeywordPage';
import ProductPage from './pages/ProductPage';

export default function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [recommendList, setRecommendList] = useState([]);

  return (
    <RecomandListContext.Provider value={{ recommendList, setRecommendList }}>
      <SearchResultContext.Provider value={{ searchResult, setSearchResult }}>
        <Routes>
          <Route element={<WithHeaderPage />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/keyword" element={<KeywordPage />} />
            <Route path="/product">
              <Route path=":product_code" element={<ProductPage />} />
            </Route>
          </Route>
        </Routes>
      </SearchResultContext.Provider>
    </RecomandListContext.Provider>
  );
}

//Contexts
export const SearchResultContext = createContext({
  searchResult: [],
  setSearchResult: () => {},
});

export const RecomandListContext = createContext({
  recommendList: [],
  setRecomendList: () => {},
});
