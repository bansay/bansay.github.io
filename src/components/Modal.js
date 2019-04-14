import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes);

const Modal = ({ show, index, handleClose, children }) => {
  const showHideClassName = (parseInt(show) === parseInt(index)) ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-wrap">
        <div className="message">
          <div className="modal-header">
            <button className="cancel control" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="figure content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
