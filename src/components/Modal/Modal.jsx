import React from 'react';

const Modal = ({ isOpen, onClose, playerName, onRemovePlayer }) => {
  const modalContainerClasses = `fixed inset-0 overflow-hidden transition-opacity ${
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`;

  const removePlayer = () => {
    // Call the onRemovePlayer function and pass the playerName
    onRemovePlayer(playerName);
    // Close the modal
    onClose();
  };

  return (
    <div className={modalContainerClasses}>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal Container */}
      <div className="bg-white p-6 rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Modal Close Button */}
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
          &times;
        </button>

        {/* Modal Body Content */}
        <div>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-sub uppercase">{playerName}'s Schedule</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eaque praesentium et
                quas a aut, at laboriosam quo officia sit! Cupiditate perspiciatis eligendi nobis!
                Expedita repudiandae eos animi natus nam.
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
