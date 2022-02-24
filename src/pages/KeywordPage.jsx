import { useContext, useEffect } from 'react';
import { data } from '../../../../AppData/Local/Microsoft/TypeScript/4.5/node_modules/browserslist/index';
import { element } from '../../node_modules/prop-types/index';
import { useNavigate } from '../../node_modules/react-router/index';
import { SearchResultContext } from '../App';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';

export default function KeywordPage() {
  const { searchResult, setSearchResult } = useContext(SearchResultContext);
  const navigate = useNavigate();

  const products = [
    {
      product_code: 1,
      name: '조끼_070',
      image_url: 'https://static.pxl.ai/problem/images/VT-070.jpg',
      price: 45065,
      category_names: ['c1.tops', 'c2.outwears', 'c3.vests'],
    },
    {
      product_code: 2,
      name: '원피스_019',
      image_url: 'https://static.pxl.ai/problem/images/OP-019.jpg',
      price: 34592,
      category_names: ['c1.onepiece', 'c2.dresses', ''],
    },
    {
      product_code: 3,
      name: '자켓_093',
      image_url: 'https://static.pxl.ai/problem/images/JK-093.jpg',
      price: 20544,
      category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
    },
    {
      product_code: 4,
      name: '자켓_087',
      image_url: 'https://static.pxl.ai/problem/images/JK-087.jpg',
      price: 23371,
      category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
    },
    {
      product_code: 5,
      name: '원피스_015',
      image_url: 'https://static.pxl.ai/problem/images/OP-019.jpg',
      price: 34592,
      category_names: ['c1.onepiece', 'c2.dresses', ''],
    },
  ];

  useEffect(() => {
    // const search = async () => {
    //   try {
    //     const response = await axios.get(
    //       'https://static.pxl.ai/problem/data/products.json'
    //     );
    //     return setSearchResult(response.data);
    //   } catch (err) {
    //     return err;
    //   }
    // };
    // search();
  }, []);

  // function findAllKeyword(products) {}

  //
  const nameKeyword = products.filter(
    (element) => element.name.indexOf(keyword) > -1
  );
  console.log(nameKeyword);

  // 카테고리
  function keywordAllData(data, keyword) {
    data.filter((element) => {
      let { product_code, name, image_url, price, category_names } = element;
      let categoryArr = [];
      for (let cate of category_names) {
        let category = cate.split('.');
        if (category[1] === keyword) {
          // 그 해당하는 객체 배열로 return
          const dataObj = {
            product_code,
            name,
            image_url,
            price,
            category_names,
          };
          console.log(dataObj);
          categoryArr.push(dataObj);
        }
      }
      return categoryArr;
    });
  }
  const changeName = (keyword) => {
    switch (keyword) {
      case '원피스':
        return 'onepiece';
      case '드레스':
        return 'dresses';
      case '조끼':
        return 'vest';
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
    }
  };

  const handleErrorConfirm = () => {
    navigate('/');
  };

  if (!searchResult && !searchResult.length)
    return (
      <ErrorMessage
        text="존재하지 않는 상품입니다. "
        onClickEvent={handleErrorConfirm}
      />
    );
  else
    return (
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {searchResult.map((product) => (
                <div key={product.product_code} className="group relative">
                  <Card
                    name={product.name}
                    price={product.price}
                    imageUrl={product.image_url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
