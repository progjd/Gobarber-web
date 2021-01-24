import React, { useEffect } from 'react';
import {
  FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps{
  message: ToastMessage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}

const icons = {
  info: <FiInfo size={25} />,
  error: <FiAlertCircle size={25} />,
  success: <FiCheckCircle size={25} />,
};

const Toast: React.FC <ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={Number(!!message.description)} style={style}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>

    </Container>

  );
};

export default Toast;
