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
const keywordName = (product, word) => product.name.includes(word);

// name + category
const keywordData = (product, word) => {
  return keywordName(product, word) + keywordCategory(product, word);
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
  return products.filter((product) => product.name.includes(category));
};

const getRegionData = (regions, target) => {
  return target.length > 0
    ? regions.filter((item) => item.product_code === target[0].product_code)
    : [];
};

export default function useUserInput() {
  const navigate = useNavigate();
  const { setSearchResult } = useContext(SearchResultContext);
  const { setRecommendList } = useContext(RecomandListContext);

  const updateRecommendList = (products, filteredProducts) => {
    if (filteredProducts.length > 0) {
      const recommendList = getRecommendList(products, filteredProducts);
      setRecommendList(recommendList);
    } else {
      setRecommendList([]);
    }
  };

  async function search(searchKeyword) {
    let word = searchKeyword.trim();
    const type = getType(word);
    const products = await fetchData(process.env.PRODUCT_URL);
    const filteredProducts = getFilteredData(products, word, type);

    if (type === 'name') {
      setSearchResult(filteredProducts);
      navigate('/keyword');
    } else {
      const regions = await fetchData(process.env.REGION_URL);
      setSearchResult(getRegionData(regions, filteredProducts));
      updateRecommendList(products, filteredProducts);
      if (type === 'image_url') {
        word = encodeURIComponent(word);
      }
      navigate(`/product/${word}`);
    }
  }
  return { search };
}
