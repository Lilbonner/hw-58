import React, { FC } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
}

const Modal: FC<ModalProps> = ({ show, onClose, title, children }) => (
  <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="close bg-transparent border-0" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  </div>
);

export default Modal;
