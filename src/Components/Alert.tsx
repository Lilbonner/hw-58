import { FC, ReactNode } from 'react';

interface AlertProps {
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
    children?: ReactNode;
}

const Alert: FC<AlertProps> = ({ type, onDismiss, children }) => (
    <div className={`alert alert-${type} alert-dismissible d-flex`} role="alert">
        {children}
        {onDismiss && (
            <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onDismiss}>
            </button>
        )}
    </div>
);

export default Alert;
