import React, { useEffect } from 'react';
import SummaryCal from '../../pages/Summary/SummaryCal';

const Modal = ({ isOpen, onClose, playerName, onRemovePlayer, availability }) => {
  const modalContainerClasses = `fixed inset-0 overflow-hidden transition-opacity ${
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
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal Container */}
      <div className="bg-white rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3">
        {/* Modal Close Button */}
        <button onClick={onClose} className="absolute top-0 right-3 m-4 text-gray-600 hover:text-gray-800 text-4xl z-10">
          &times;
        </button>

        {/* Modal Body Content */}
        <div>
          <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 rounded-t">
              <h3 className="text-3xl font-sub uppercase">{playerName}'s Schedule</h3>
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
              <button
                className="bg-red text-white active:bg-red font-bold font-sub uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => removePlayer()}
              >
                Remove Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;