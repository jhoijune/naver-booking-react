import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import MainView from '../MainView';
import TabController from '../TabController';
import ProductBox from '../ProductBox';

const MainContainer = (props) => {
  const { basisCount } = props;
  const [selectedCategory, setSelectedCategory] = useState(0); // 현재 선택된 카테고리 id
  const [productCount, setProductCount] = useState(0); //  카테고리의 제품 개수
  const [views, setViews] = useState(Array(6).fill(null)); // [<MainView/>,<MainView/>]

  let showingCount = 0;
  const categoryProducts = Array(6).fill(null);
  const viewsArr = Array(6).fill(null);
  const labels = ['전체', '전시', '뮤지컬', '콘서트', '클래식', '연극'];

  useEffect(() => {
    document.title = '네이버 예약';
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {
          data: { items },
        } = await axios.get('/api/products');
        categoryProducts[0] = items;
        viewsArr[0] = items
          .slice(basisCount)
          .map((value) => <ProductBox itemInfo={value} />);
        showingCount += basisCount;
        setProductCount(items.length);
        const copiedViews = [...views];
        copiedViews[0] = (
          <MainView productCount={productCount} products={viewsArr[0]} />
        );
        setViews(copiedViews);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const showMoreProduct = () => {
    const viewsLen = viewsArr[selectedCategory].length;
    if (viewsLen >= showingCount + basisCount || viewsLen > showingCount) {
      // 보여주기만 하면 됨
      const finalInd =
        viewsLen >= showingCount + basisCount
          ? showingCount + basisCount
          : viewsLen;
      const copiedViews = [...views];
      copiedViews[selectedCategory] = (
        <MainView
          productCount={productCount}
          products={viewsArr[selectedCategory].slice(finalInd)}
        />
      );
      showingCount = finalInd;
      setViews(copiedViews);
    }
    if (
      categoryProducts[selectedCategory].length >
      viewsArr[selectedCategory].length
    ) {
      // 넣은뒤 보여줌
      const productsLen = categoryProducts[selectedCategory].length;
      const finalInd =
        productsLen >= viewsLen + basisCount
          ? viewsLen + basisCount
          : productsLen;
      categoryProducts[selectedCategory]
        .slice(viewsLen, finalInd)
        .forEach((value) => {
          viewsArr[selectedCategory].push(<ProductBox itemInfo={value} />);
        });
      const copiedViews = [...views];
      copiedViews[selectedCategory] = (
        <MainView
          productCount={productCount}
          products={viewsArr[selectedCategory]}
        />
      );
      showingCount = finalInd;
      setViews(copiedViews);
    }
  };

  useEffect(() => {
    // 카테고리 바뀌었을 때 view바꾸는 과정
    // 1. 최초 과정
    // 2. 최초 아닐 때

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
      categoryProducts[selectedCategory] = specificProducts;
      setProductCount(specificProducts.length);
      // views에 MainView를 생성함
      viewsArr[selectedCategory] = specificProducts
        .slice(basisCount)
        .map((value) => <ProductBox itemInfo={value} />);
      const copiedViews = [...views];
      copiedViews[selectedCategory] = (
        <MainView
          productCount={productCount}
          products={viewsArr[selectedCategory]}
        />
      );
      showingCount = basisCount;
      setViews(copiedViews);
    }
    if (viewsArr[selectedCategory].length >= basisCount) {
      // length는 임시 판별 MainView만 있어서 안에 갯수 파악해야 됨
      // 2. basisCount랑 일치할 때
      setProductCount(categoryProducts[selectedCategory].length);
      const copiedViews = [...views];
      copiedViews[selectedCategory] = (
        <MainView
          productCount={productCount}
          products={viewsArr[selectedCategory].slice(basisCount)}
        />
      );
      showingCount = basisCount;
      setViews(copiedViews);
    }
  }, [selectedCategory]);

  return (
    <div className="MainContainer">
      <TabController
        labels={labels}
        views={views}
        alram={setSelectedCategory}
      />
      <p className="more" onClick={showMoreProduct}>
        더보기
      </p>
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
