import React, { useEffect } from 'react';
import SummaryCal from '../../pages/Summary/SummaryCal';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import RemoveBtn from '../Buttons/RemoveBtn';

const Modal = ({ isOpen, onClose, playerName, onRemovePlayer, availability }) => {
  const modalContainerClasses = `fixed inset-0 overflow-auto transition-opacity ${
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`;

  const removePlayer = () => {
    // Call the onRemovePlayer function and pass the playerName
    onRemovePlayer(playerName);
    // Close the modal
    onClose();
  };

  // console.log(`Availability for ${playerName}:`, availability);

  return (
    <div className={modalContainerClasses} id="player-modal">
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black opacity-90"></div>

      {/* Modal Container */}
      <div className="modal-container bg-opacity-20 rounded shadow-lg absolute w-full flex flex-col mt-20 md:mt-0 md:justify-center">
        {/* Modal Close Button */}
        {/* <button onClick={onClose} className="absolute text-white-600 text-3xl z-10 close-btn">
          <FaTimes />
        </button> */}

        {/* Modal Body Content */}
        <div>
          <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
            {/*header*/}
            <div className="modal-header flex items-center justify-between p-5 rounded-t">
              <h3 className="text-2xl md:text-3xl font-sub uppercase whitespace-nowrap">{playerName}'s Schedule</h3>
              {/* Close Button */}
              <button onClick={onClose} className="text-2xl md:text-3xl z-10 close-btn">
          <FaTimes id='fa-times-icon' />
        </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-darkGrey text-lg leading-relaxed">
                <span className='uppercase text-darkGrey'>{playerName}</span> is available to play:
              </p>
              <SummaryCal />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 rounded-b">
              <RemoveBtn name='Remove Player' onClick={() => removePlayer()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;