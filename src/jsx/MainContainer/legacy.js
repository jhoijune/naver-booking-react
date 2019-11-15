
function filterProduct(products, categoryId) {
  let specificProducts;
  if (categoryId === 0) {
    specificProducts = products;
  } else {
    specificProducts = [];
    products.forEach((element) => {
      if (element.categoryId === categoryId) {
        specificProducts.push(element);
      }
    });
  }
  return specificProducts;
}

document.addEventListener('DOMContentLoaded', () => {
  const xhrCategories = new XMLHttpRequest();
  const categoryClassification = {
    allList: 0,
    exhibition: 1,
    musical: 2,
    concert: 3,
    classic: 4,
    acting: 5,
  };
  xhrCategories.onload = function() {
    const category = JSON.parse(xhrCategories.responseText).items;
    let categoryLen = 0;
    category.forEach((element) => {
      categoryLen += element.count;
    });
    category.unshift({ count: categoryLen, id: 0, name: '전체' });
    const xhrProducts = new XMLHttpRequest();
    xhrProducts.onload = function() {
      function fillArticle() {
        if (listInfo.left.fillCount === listInfo.right.fillCount) {
          const exHelping = leftArticle[listInfo.left.fillCount].querySelector(
            '.helping',
          );
          if (exHelping) {
            const anchor = leftArticle[listInfo.left.fillCount].querySelector(
              'a',
            );
            anchor.removeChild(exHelping);
          }
          updateArticle(
            leftArticle[listInfo.left.fillCount],
            specificProducts[listInfo.all.fillCount],
          );
          listInfo.all.fillCount += 1;
          listInfo.left.fillCount += 1;
        } else {
          const exHelping = rightArticle[
            listInfo.right.fillCount
          ].querySelector('.helping');
          if (exHelping) {
            const anchor = rightArticle[listInfo.right.fillCount].querySelector(
              'a',
            );
            anchor.removeChild(exHelping);
          }
          updateArticle(
            rightArticle[listInfo.right.fillCount],
            specificProducts[listInfo.all.fillCount],
          );
          listInfo.all.fillCount += 1;
          listInfo.right.fillCount += 1;
        }
      }
      function showArticle() {
        listInfo.all.noneCount -= 1;
        if (
          listInfo.left.fillCount + listInfo.left.noneCount !==
          listInfo.left.count
        ) {
          listInfo.left.noneCount -= 1;
          leftArticle[listInfo.left.fillCount - 1].style.display = 'block';
        } else {
          listInfo.right.noneCount -= 1;
          rightArticle[listInfo.right.fillCount - 1].style.display = 'block';
        }
      }
      function showMoreProduct() {
        if (listInfo.all.fillCount === specificProducts.length) {
          return;
        }
        let requiredCount;
        if (listInfo.all.fillCount + basisCount <= specificProducts.length) {
          requiredCount = basisCount;
        } else {
          requiredCount = specificProducts.length - listInfo.all.fillCount;
        }
        if (listInfo.all.noneCount >= requiredCount) {
          for (let i = 0; i < requiredCount; i++) {
            fillArticle();
            showArticle();
          }
        } else if (listInfo.all.noneCount === 0) {
          for (let i = 0; i < requiredCount; i++) {
            // 갱신 안하려면 childNodes로 바꿔야함
            if (listInfo.left.fillCount === listInfo.right.fillCount) {
              leftContainer.appendChild(createArticle());
              listInfo.all.count += 1;
              listInfo.left.count += 1;
              leftArticle = leftContainer.querySelectorAll('article');
              fillArticle();
            } else {
              rightContainer.appendChild(createArticle());
              listInfo.all.count += 1;
              listInfo.right.count += 1;
              rightArticle = rightContainer.querySelectorAll('article');
              fillArticle();
            }
          }
        } else {
          for (let i = 0; i < listInfo.all.noneCount; i++) {
            fillArticle();
            showArticle();
          }
          for (let i = 0; i < requiredCount - listInfo.all.noneCount; i++) {
            if (listInfo.left.fillCount === listInfo.right.fillCount) {
              leftContainer.appendChild(createArticle());
              listInfo.all.count += 1;
              listInfo.left.count += 1;
              leftArticle = leftContainer.querySelectorAll('article');
              fillArticle();
            } else {
              rightContainer.appendChild(createArticle());
              listInfo.all.count += 1;
              listInfo.right.count += 1;
              rightArticle = rightContainer.querySelectorAll('article');
              fillArticle();
            }
          }
        }
      }
      function changeCategory(event) {
        if (event.target.className === 'selected') {
          return;
        }
        selectedCategory.setAttribute('class', 'unselected');
        selectedCategory = event.target;
        selectedCategory.setAttribute('class', 'selected');
        categoryName = selectedCategory.getAttribute('id');
        categoryId = categoryClassification[categoryName];
        categoryInfo = category[categoryId];
        specificProducts = filterProduct(products, categoryId);
        count.textContent = `${specificProducts.length}개`;
        /////////////////////
        listInfo.all.fillCount = 0;
        listInfo.left.fillCount = 0;
        listInfo.right.fillCount = 0;
        listInfo.all.noneCount = listInfo.all.count - basisCount;
        listInfo.left.noneCount =
          listInfo.left.count - Math.ceil(basisCount / 2);
        listInfo.right.noneCount =
          listInfo.right.count - Math.floor(basisCount / 2);
        if (listInfo.left.noneCount !== 0) {
          for (
            let i = listInfo.left.count - 1;
            i >= listInfo.left.count - listInfo.left.noneCount;
            i--
          ) {
            leftArticle[i].style.display = 'none';
          }
        }
        if (listInfo.right.noneCount !== 0) {
          for (
            let i = listInfo.right.count - 1;
            i >= listInfo.right.count - listInfo.right.noneCount;
            i--
          ) {
            rightArticle[i].style.display = 'none';
          }
        }
        for (let i = 0; i < basisCount; i++) {
          fillArticle();
        }
      }
      const products = JSON.parse(xhrProducts.responseText).items;
      let selectedCategory = document.querySelector('.selected');
      let categoryName = selectedCategory.getAttribute('id');
      let categoryId = categoryClassification[categoryName]; // 무슨 카테고리가 선택되었는지
      let categoryInfo = category[categoryId];
      const count = document.querySelector('.totalCount strong');
      let specificProducts = filterProduct(products, categoryId);
      count.textContent = `${specificProducts.length}개`;
      const itemList = document.querySelector('.itemList');
      const leftContainer = document.querySelector('.itemList .leftContainer');
      let leftArticle = leftContainer.querySelectorAll('article');
      const rightContainer = document.querySelector(
        '.itemList .rightContainer',
      );
      let rightArticle = rightContainer.querySelectorAll('article');
      const basisCount = itemList.querySelectorAll('.itemList article').length;
      const listInfo = {
        all: {
          count: itemList.querySelectorAll('.itemList article').length,
          fillCount: 0,
          noneCount: 0,
        },
        left: {
          count: leftArticle.length,
          fillCount: 0,
          noneCount: 0,
        },
        right: {
          count: rightArticle.length,
          fillCount: 0,
          noneCount: 0,
        },
      };
      for (let i = 0; i < basisCount; i++) {
        fillArticle();
      }
      const tabUI = document.querySelector('.category ul');
      const moreButton = document.querySelector('.helping .more');
      tabUI.addEventListener('click', changeCategory);
      moreButton.addEventListener('click', showMoreProduct);
    xhrProducts.onerror = function() {
      console.error(xhrProducts.responseText);
    };
    xhrProducts.open('GET', '/api/products');
    xhrProducts.send();
  };
  xhrCategories.onerror = function() {
    console.error(xhrCategories.responseText);
  };
  xhrCategories.open('GET', '/api/categories');
  xhrCategories.send();
});
