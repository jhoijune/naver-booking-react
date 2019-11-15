import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import MainView from '../MainView';
import ProductContainer from '../ProductContainer';
import ProductBox from '../ProductBox';

const MainContainer = (props) => {
  const { basisCount } = props;
  const [selectedCateogry, setSelectedCategory] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [views, setViews] = useState(Array(6).fill(null));

  const categoryProducts = Array(6).fill(null);
  const labels = ['전체', '전시', '뮤지컬', '콘서트', '클래식', '연극'];
  const views = Array(6).fill(null);

  /*
   * 2가지 방법
   * 1: 배열에 ProductBox담기
   * 2: ProductContainer에 ProductBox 담기
   *  얼마 담겨 있고 몇개 보여줘야 되는지 상태관리
   *
   */

  useEffect(async () => {
    const {
      data: { items },
    } = await axios.get('/api/products');
    categoryProducts[0] = items;
  }, []);

  const showMoreProduct = () => {};

  useEffect(() => {
    // 카테고리 바뀌었을 때 view바꾸는 과정
    // 1. 최초 과정
    // 2. basisCount랑 일치할 때
    // 3. basisCount보다 초과할 때
    // 4. basisCount보다 부족할 때

    if (!categoryProducts[selectedCateogry]) {
      // 1.최초 과정
      // selectedCategory에  상품정보를 넣고
      // views에 MainView를 생성함
      const specificProducts = [];
      const [allProducts] = categoryProducts;
      allProducts.forEach((value) => {
        if (value.categoryId === selectedCateogry) {
          specificProducts.push(value);
        }
      });
    }
    if (views[selectedCateogry].length === basisCount) {
      // length는 임시 판별 MainView만 있어서 안에 갯수 파악해야 됨
      // 2. basisCount랑 일치할 때
    } else if (views[selectedCateogry].length > basisCount) {
      // 3. basisCount보다 초과할 때
    } else {
      // 4. basisCount보다 부족할 때
    }
  }, selectedCateogry);

  return (
    <div className="MainContainer">
      <TabController
        labels={labels}
        views={views}
        alram={setSelectedCategory}
      />
    </div>
  );
};

MainContainer.defaultProps = {
  basisCount: 4,
};

MainContainer.propTypes = {
  basisCount: PropTypes.number,
};

export default MainContainer;
