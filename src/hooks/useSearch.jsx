import fetchData from "../utilities/fetchData"
import { SearchResultContext, RecomandListContext } from '../App.jsx';
import { useContext} from "react";
import { useNavigate } from 'react-router-dom';

const checkUrl = /^http[s]?\:\/\//i;
const getType = (value) => {
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

export default function useSearch() {
    const navigate = useNavigate();
    const { setSearchResult} = useContext(SearchResultContext);
    const { setRecommendList } = useContext(RecomandListContext);

    const updateRecommendList = (products, filteredProducts) => {
        if (filteredProducts.length > 0) {
            const recommendList = getRecommendList(products, filteredProducts);
            setRecommendList(recommendList);
        }
        else {
            setRecommendList([]);
        }
    }

 async function search(searchKeyword) {
    let word = searchKeyword.trim();
    const type = getType(word);
     const prductResult = await fetchData(process.env.PRODUCT_URL);
     const products = prductResult.data;
    const filteredProducts = getFilteredData(products, word, type);
     
    if (type === 'name') {
      setSearchResult(filteredProducts);
      navigate('/keyword');
    }
    else {
        const regionResult = await fetchData(process.env.REGION_URL);
        const regions = regionResult.data;
      setSearchResult(getRegionData(regions, filteredProducts));
      updateRecommendList(products, filteredProducts);
      if (type === 'image_url') {
          word = encodeURIComponent(word);
      }
      navigate(`/product/${word}`);
    }
  }
  return { search}
}
