import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import ButtonBunch from '../ButtonBunch';

const ModalContext = createContext({
  setIsModal: () => {},
  setModalChildren: () => {},
  alertModal: () => {},
  confirmModal: () => {},
  imageModal: () => {},
});

const Layout = (props) => {
  const { children } = props;
  const [isModal, setIsModal] = useState(false);
  const [modalChildren, setModalChildren] = useState('');

  const alertModal = (text, action) => {
    setModalChildren(
      <div className="modalText">
        <h1>{text}</h1>
        <ButtonBunch
          notes={[
            {
              click: () => {
                setIsModal(false);
                if (action) {
                  action();
                }
              },
              children: '확인',
            },
          ]}
        />
      </div>,
    );
    setIsModal(true);
  };

  const confirmModal = (text, action) => {
    setModalChildren(
      <div className="modalText">
        <h1>{text}</h1>
        <ButtonBunch
          notes={[
            {
              style: {
                backgroundColor: '#288FEB',
                color: '#fff',
              },
              click: () => {
                action();
                setIsModal(false);
              },
              children: '확인',
            },
            {
              click: () => {
                setIsModal(false);
              },
              children: '취소',
            },
          ]}
        />
      </div>,
    );
    setIsModal(true);
  };

  const imageModal = (src) => {
    setModalChildren(
      <img
        onClick={() => {
          setIsModal(false);
        }}
        src={src}
      />,
    );
    setIsModal(true);
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
      }}
    >
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
