import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const DetailContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  let datas;

  useEffect(async () => {
    try {
      const paths = pathname.split('/');
      const itemId = paths[paths.length - 1];
      const { data } = await axios.get(`/api/products/${itemId}`);
      datas = data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <DetailImage images={datas.productImages} />
      <ItemDescription />
      <EventDescription />
      <DecoratedLink />
      <Review />
      <ItemDetailInfo />
    </div>
  );
};

DetailContainer.defaultProps = {};
DetailContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DetailContainer;
