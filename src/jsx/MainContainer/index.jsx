import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.css';
import MainView from '../MainView';
import TabController from '../TabController';
import ProductBox from '../ProductBox';
import TotalCount from '../TotalCount';

const MainContainer = (props) => {
  const { basisCount } = props;
  const [selectedCategory, setSelectedCategory] = useState(0); // 현재 선택된 카테고리 id
  const [productCount, setProductCount] = useState(0); //  카테고리의 제품 개수
  const [views, setViews] = useState(Array(6).fill(<MainView />)); // [<MainView/>,<MainView/>]
  const [viewsArr, setViewsArr] = useState(Array(6).fill(null)); // [[<ProductBox/>],[<ProductBox/>]];
  const [categoryProducts, setCategoryProducts] = useState(Array(6).fill(null));
  const [showingCount, setShowingCount] = useState(0);
  const [isFetched, setIsFetched] = useState(false);

  const labels = ['전체', '전시', '뮤지컬', '콘서트', '클래식', '연극'];

  useEffect(() => {
    document.title = '네이버 예약';
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {
          data: { items },
        } = await axios.get('/api/products', {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
        const modifiedCategory = [...categoryProducts];
        modifiedCategory[0] = items;
        const modifiedViewsArr = [...viewsArr];
        modifiedViewsArr[0] = items
          .slice(0, basisCount)
          .map((info) => (
            <ProductBox key={info.displayInfoId} itemInfo={info} />
          ));
        const modifiedViews = [...views];
        modifiedViews[0] = <MainView products={modifiedViewsArr[0]} />;
        setCategoryProducts(modifiedCategory);
        setViewsArr(modifiedViewsArr);
        setShowingCount(showingCount + basisCount);
        setProductCount(items.length);
        setViews(modifiedViews);
        setIsFetched(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const showMoreProduct = () => {
    const viewsLen = viewsArr[selectedCategory].length;
    const productsLen = categoryProducts[selectedCategory].length;
    if (viewsLen >= showingCount + basisCount || viewsLen > showingCount) {
      // viewsArr에 있던 기존 것을 사용할 때
      const finalInd =
        viewsLen >= showingCount + basisCount
          ? showingCount + basisCount
          : viewsLen;
      const modifiedViews = [...views];
      modifiedViews[selectedCategory] = (
        <MainView
          productCount={productCount}
          products={viewsArr[selectedCategory].slice(0, finalInd)}
        />
      );
      setShowingCount(finalInd);
      setViews(modifiedViews);
    } else if (productsLen > viewsLen) {
      // viewsArr에 채워서 사용할 때
      const finalInd =
        productsLen >= viewsLen + basisCount
          ? viewsLen + basisCount
          : productsLen;
      const modifiedViewsArr = [...viewsArr];
      categoryProducts[selectedCategory]
        .slice(viewsLen, finalInd)
        .forEach((info) => {
          modifiedViewsArr[selectedCategory].push(
            <ProductBox key={info.displayInfoId} itemInfo={info} />,
          );
        });
      const modifiedViews = [...views];
      modifiedViews[selectedCategory] = (
        <MainView products={modifiedViewsArr[selectedCategory]} />
      );
      setShowingCount(finalInd);
      setViewsArr(modifiedViewsArr);
      setViews(modifiedViews);
    }
  };

  useEffect(() => {
    // 카테고리 바뀌었을 때 view바꾸는 과정
    // 1. 최초 과정
    // 2. 최초 아닐 때
    if (isFetched) {
      if (!categoryProducts[selectedCategory]) {
        // 1.최초 과정
        // selectedCategory에  상품정보를 넣고
        // views에 MainView를 생성함
        const specificProducts = [];
        const [allProducts] = categoryProducts;
        allProducts.forEach((value) => {
          if (value.categoryId === selectedCategory) {
            specificProducts.push(value);
          }
        });
        const modifiedCategory = [...categoryProducts];
        modifiedCategory[selectedCategory] = specificProducts;
        // views에 MainView를 생성함
        const modifiedViewsArr = [...viewsArr];
        modifiedViewsArr[selectedCategory] = specificProducts
          .slice(0, basisCount)
          .map((info) => (
            <ProductBox key={info.displayInfoId} itemInfo={info} />
          ));
        const modifiedViews = [...views];
        modifiedViews[selectedCategory] = (
          <MainView products={modifiedViewsArr[selectedCategory]} />
        );
        setCategoryProducts(modifiedCategory);
        setProductCount(specificProducts.length);
        setViewsArr(modifiedViewsArr);
        setViews(modifiedViews);
        setShowingCount(basisCount);
      } else if (viewsArr[selectedCategory].length >= basisCount) {
        // length는 임시 판별 MainView만 있어서 안에 갯수 파악해야 됨
        // 2. basisCount랑 일치할 때
        const copiedViews = [...views];
        copiedViews[selectedCategory] = (
          <MainView
            products={viewsArr[selectedCategory].slice(0, basisCount)}
          />
        );
        setProductCount(categoryProducts[selectedCategory].length);
        setShowingCount(basisCount);
        setViews(copiedViews);
      }
    }
  }, [selectedCategory]);

  const isMoreShowing = () =>
    ((categoryProducts[selectedCategory] &&
      categoryProducts[selectedCategory].length) ||
      0) > showingCount;

  return (
    <div className="MainContainer">
      <TabController
        labels={labels}
        views={views}
        alarm={setSelectedCategory}
        top={<TotalCount productCount={productCount} />}
        bottom={
          isMoreShowing() ? (
            <p className="more" onClick={showMoreProduct}>
              더보기
            </p>
          ) : (
            ''
          )
        }
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
