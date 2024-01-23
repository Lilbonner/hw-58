import { FC, ReactNode} from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ show, onClose, title, children }) => {
    const modalStyle: React.CSSProperties = {
        display: show ? 'block' : 'none',
    };

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-primary bg-opacity-75">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Закрыть" onClick={onClose}></button>
                    </div>
                    <div className="modal-body bg-primary bg-opacity-25">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
