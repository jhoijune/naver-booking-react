import React, { useState, useEffect } from 'react';

import Modal from '../Modal';

const ModalContext = React.createContext({
  setIsModal: ()=>{},
  setModalNote: ()=> {},
};

const Layout = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [modalNote, setModalNote] = useState({});
  const { children } = props;

  useEffect(()=> {
    if (!isModal) {
      setModalNote(false);
    }
  },isModal)

  return (
    <ModalContext.provider value={{setIsModal,setModalNote}}>
      {children}
      {isModal ? <Modal text={modalNote.text}>{modalNote.children}</Modal> : ''}
    </ModalContext.provider>
  );
};

export default Layout;
export { ModalContext };
