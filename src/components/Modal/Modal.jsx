import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
    const modalContainerClasses = `fixed inset-0 overflow-hidden transition-opacity ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`;
  
    return (
      <div className={modalContainerClasses}>
        {/* Modal Overlay */}
        <div className="fixed inset-0 bg-black opacity-50"></div>
  
        {/* Modal Content */}
        <div className="bg-white p-6 rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Modal Close Button */}
          <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
            &times;
          </button>
  
          {/* Modal Body Content */}
          <div>{children}</div>
        </div>
      </div>
    );
};

export default Modal