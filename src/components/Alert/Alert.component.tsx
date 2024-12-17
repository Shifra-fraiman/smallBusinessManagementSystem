import React from 'react';
import Swal from 'sweetalert2';

const AlertComponent = ({ title, text, icon }) => {
  const showAlert = () => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'OK'
    });
  };

  return (
    <button onClick={showAlert}>
      Show Alert
    </button>
  );
};

export default AlertComponent;

