import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import Button from '../Button';
import FlexContainer from '../FlexContainer';

const ModalContext = createContext({
  setIsModal: () => {},
  setModalChildren: () => {},
  alertModal: () => {},
  confirmModal: () => {},
  imageModal: () => {},
});

const Layout = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [modalChildren, setModalChildren] = useState('');

  const alertModal = (text, action) => {
    setModalChildren(
      <div className="modalText">
        <h1>{text}</h1>
        <FlexContainer>
          <Button
            click={() => {
              setIsModal(false);
              if (action) {
                action();
              }
            }}>
            확인
          </Button>
        </FlexContainer>
      </div>,
    );
    setIsModal(true);
  };

  const confirmModal = (text, action) => {
    setModalChildren(
      <div className="modalText">
        <h1>{text}</h1>
        <FlexContainer>
          <Button
            style={{
              backgroundColor: '#288FEB',
              color: '#fff',
            }}
            click={() => {
              action();
              setIsModal(false);
            }}>
            확인
          </Button>
          <Button
            click={() => {
              setIsModal(false);
            }}>
            취소
          </Button>
        </FlexContainer>
      </div>,
    );
    setIsModal(true);
  };

  const imageModal = (src) => {
    const imgRef = document.createElement('img');
    imgRef.onload = () => {
      const maxWidth =
        document.body.offsetWidth >= 414 ? 414 : document.body.offsetWidth;
      setModalChildren(
        <img
          onClick={() => {
            setIsModal(false);
          }}
          src={src}
          width={imgRef.width >= maxWidth ? maxWidth : imgRef.width}
        />,
      );
      setIsModal(true);
    };
    imgRef.src = src;
  };

  useEffect(() => {
    if (!isModal) {
      setModalChildren('');
    }
  }, [isModal]);

  return (
    <ModalContext.Provider
      value={{
        setIsModal,
        setModalChildren,
        alertModal,
        confirmModal,
        imageModal,
      }}>
      {children}
      {isModal ? <Modal>{modalChildren}</Modal> : ''}
    </ModalContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { ModalContext };
