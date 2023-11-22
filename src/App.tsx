import { FC, useState } from 'react';
import Modal from './Components/Modal';
import Alert from './Components/Alert';

const App: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [alerts, setAlerts] = useState([
    { type: 'warning', message: 'This is a warning type alert' },
    { type: 'success', message: 'This is a success type alert' },
    { type: 'primary', message: 'This is a primary type alert' },
    { type: 'danger', message: 'This is a danger type alert' },
  ]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeAlert = (index: number) => {
    setAlerts(prevAlerts => prevAlerts.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>
      <Modal show={showModal} onClose={closeModal} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>

      <div className="mt-5">
        {alerts.map((alert, index) => (
          <Alert key={index} type={alert.type} onDismiss={() => closeAlert(index)}>
            {alert.message}
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default App;
