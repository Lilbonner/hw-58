import React, { FC, useState } from 'react';
import Modal from '../src/Components/Modal';

const App: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>
      <Modal show={showModal} onClose={closeModal} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>

    </div>
  );
};

export default App;
