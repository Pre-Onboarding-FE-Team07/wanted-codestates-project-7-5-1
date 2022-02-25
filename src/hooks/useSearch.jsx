import fetchData from '../utilities/fetchData';
import { SearchResultContext, RecomandListContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// 한글로 입력된 input값, 영문으로 변경
const changeName = (keyword) => {
  switch (keyword) {
    case '원피스':
      return 'onepiece';
    case '드레스':
      return 'dresses';
    case '조끼':
      return 'vests';
    case '자켓':
      return 'jackets';
    case '바지':
      return 'pants';
    case '상의':
      return 'tops';
    case '하의':
      return 'bottoms';
    case '코트':
      return 'coats';
    case '점퍼':
      return 'outwears';
    case '니트':
      return 'knitwear';
    case '셔츠':
      return 'shirts';
    case '스웨터':
      return 'sweater';
    case '신발':
      return 'shoes';
    case '치마':
      return 'skirts';
    default:
      return keyword;
  }
};
// 카테고리에 대한 로직
const keywordCategory = (product, word) => {
  const keyword = changeName(word);
  for (let cate of product.category_names) {
    let category = cate.split('.');
    if (category[1] === keyword) {
      return category[1];
    }
  }
};
// name에 대한 로직
const keywordName = (product, word) => {
  const name = product.name.includes(word);
  if (name) {
    return name;
  }
};

// name + category
const keywordData = (product, word) => {
  const nameList = keywordName(product, word);
  const categoryList = keywordCategory(product, word);

  if (nameList) {
    return nameList;
  } else {
    return categoryList;
  }
};

const checkUrl = /^http[s]?\:\/\//i;

const getType = (value) => {
  if (isNaN(value)) {
    if (checkUrl.test(value)) return 'image_url';
    else return 'name';
  }
  return 'product_code';
};

const getFilteredData = (products, word, wordType) => {
  return products.filter((product) =>
    wordType === 'name' ? keywordData(product, word) : product[wordType] == word
  );
};

const getRecommendList = (products, target) => {
  const category = target[0].name.split('_')[0];
  return products.filter(
    (product) =>
      product.name.includes(category) &&
      product.product_code !== target[0].product_code
  );
};

const getRegionData = (regions, target) => {
  return target.length > 0
    ? regions.filter((item) => item.product_code === target[0].product_code)
    : [];
};

const storedSearhDatas = (keyword, searchResult, recommendList) => {
  localStorage.setItem(
    'search',
    JSON.stringify({
      keyword,
      searchResult,
      recommendList,
    })
  );
};
export default function useUserInput() {
  const navigate = useNavigate();
  const { setSearchResult } = useContext(SearchResultContext);
  const { setRecommendList } = useContext(RecomandListContext);

  const updateRecommendList = (products, filteredProducts) => {
    let recommendList = [];
    if (filteredProducts.length > 0) {
      recommendList = getRecommendList(products, filteredProducts);
    }
    setRecommendList(recommendList);
    return recommendList;
  };

  async function search(searchKeyword) {
    let word = searchKeyword.trim();
    const type = getType(word);
    const prductResult = await fetchData(process.env.PRODUCT_URL);
    const products = prductResult.data;
    const filteredProducts = getFilteredData(products, word, type);
    let targetSearchResult = filteredProducts;

    if (type === 'name') {
      setSearchResult(targetSearchResult);
      storedSearhDatas(word, targetSearchResult, []);
      navigate(`/keyword/${word}`);
    } else {
      const regionResult = await fetchData(process.env.REGION_URL);
      const regions = regionResult.data;
      targetSearchResult = getRegionData(regions, filteredProducts);
      setSearchResult(targetSearchResult);
      const recommendList = updateRecommendList(products, filteredProducts);
      const isImageUrl = type === 'image_url';
      if (isImageUrl) {
        word = encodeURIComponent(word);
      }
      storedSearhDatas(word, targetSearchResult, recommendList);
      navigate(`/product/${isImageUrl ? word + '/' : word}`);
    }
  }
  return { search };
}
