import { memo } from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ item, onClickEvent }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-black/50">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-4/5 w-4/5 rounded-lg bg-white p-8 shadow-lg">
          <div className="flex-1">
            <img
              src={item.image_url}
              alt="product"
              className="max-h-full max-w-full rounded-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              스타일&nbsp;:&nbsp;{attributeToText(item.attributes[0].style)}
            </h1>
            <br />
            <h1 className="my-3 text-2xl">
              계절&nbsp;:&nbsp;{attributeToText(item.attributes[1].season)}
            </h1>
            <h1 className="my-3 text-2xl">
              용도&nbsp;:&nbsp;{attributeToText(item.attributes[2].occasion)}
            </h1>
            <h1 className="my-3 text-2xl">
              재질&nbsp;:&nbsp;{attributeToText(item.attributes[3].fabric)}
            </h1>
            <h1 className="my-3 text-2xl">
              느낌&nbsp;:&nbsp;{attributeToText(item.attributes[4].sense)}
            </h1>
            <h1 className="my-3 text-2xl">
              패턴&nbsp;:&nbsp;{attributeToText(item.attributes[5].pattern)}
            </h1>
            <br />
            <button
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              onClick={onClickEvent}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  item: PropTypes.object.isRequired,
  onClickEvent: PropTypes.func.isRequired,
};

export default memo(ProductDetails);

const attributeToText = (attribute) => {
  switch (attribute) {
    case 'basic_or_minimal_or_normcore':
      return '기본, 최소, 보통';
    case 'sexy':
      return '섹시한';
    case 'trendy':
      return '트렌디한';
    case 'elegant_or_luxury':
      return '엘레강스, 럭셔리';
    case 'classic':
      return '클래식';

    case 'summer':
      return '여름';
    case 'winter':
      return '겨울';
    case 'spring':
      return '봄';
    case 'fall':
      return '가을';
    case 'autumn':
      return '가을';

    case 'gym_or_outdoor':
      return '운동, 야외';
    case 'casual':
      return '캐주얼';
    case 'date':
      return '데이트용';
    case 'unsupported':
      return '언서포티드';
    case 'sportive':
      return '스포티한';
    case 'lounge':
      return '라운지';
    case 'festival':
      return '페스티벌';
    case 'bohemian_or_ethnic_or_hippie':
      return '보헤미안 / 에스닉 / 히피';
    case 'casual_or_compy':
      return '캐주얼 / 편안한';

    case 'knit_or_angora':
      return '니트 / 앙고라';
    case 'lace_or_mesh':
      return '레이스 / 메쉬';
    case 'polyester':
      return '폴리에스터';
    case 'luxury':
      return '럭셔리';
    case 'chiffon_or_silk':
      return '실크';
    case 'suede_or_velvet':
    case 'suede/velvet':
      return '스웨터 / 벨벳';
    case 'tweed':
      return '튜더';
    case 'fur':
      return '털';

    case 'leopard':
      return '표범무늬';
    case 'plain':
      return '플레인';
    case 'check':
      return '체크무늬';
    case 'ethnic':
      return '에트닉';
    case 'flower':
      return '꽃무늬';
    case 'geometry':
      return '지오메트리';

    case 'feminine':
      return '여성스러운';
    case 'formal':
      return '격식';

    case 'unknown':
      return '알수 없음';

    default:
      return attribute;
  }
};
