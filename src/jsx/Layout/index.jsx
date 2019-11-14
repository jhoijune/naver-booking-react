import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import ButtonBunch from '../ButtonBunch';

const ModalContext = React.createContext({
  setIsModal: () => {},
  setModalChildren: () => {},
  alertModal: () => {},
  confirmModal: () => {},
});

const Layout = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [modalChildren, setModalChildren] = useState('');
  const { children } = props;

  const alertModal = (text) => {
    setModalChildren(
      <div>
        <h1>{text}</h1>
        <ButtonBunch
          notes={[
            {
              click: () => {
                setIsModal(false);
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
      <div>
        <h1>{text}</h1>
        <ButtonBunch
          notes={[
            {
              click: () => {
                action();
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

  useEffect(() => {
    if (!isModal) {
      setModalChildren('');
    }
  }, isModal);

  return (
    <ModalContext.provider
      value={{ setIsModal, setModalChildren, alertModal, confirmModal }}
    >
      {children}
      {isModal ? <Modal>{modalChildren}</Modal> : ''}
    </ModalContext.provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { ModalContext };
