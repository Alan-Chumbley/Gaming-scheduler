import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';

const WishlistModal = (props) => {
    const [ isWishlistModalOpen, setIsWishlistModalOpen ] = useState(false);

    // toggle function for modal
    const toggleWishlistModal = () => {
        setIsWishlistModalOpen(!isWishlistModalOpen);
    };

    const navigate = useNavigate();
    
    // handle submit function for form
    const handleSubmit = (e) => {
        e.preventDefault();

        // save the squad name, name of the game and go to player 1 page
        const wishTeam = {
            teamName: name,
            game: game,
        }

        saveToLS(wishTeam); // save to local storage

        // navigate to player 1 page
        navigate('/player1');
    };

    return (
        <div>
            {/* modal toggle button */}
            <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={toggleWishlistModal}
            >
                Toggle modal
            </button>

            {/* modal body */}
            {isWishlistModalOpen && (
                <div
                    id="crud-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen w-full bg-black bg-opacity-40"
                >
                    <div className="relative p-4 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {props.name}
                                </h3>
                                <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={toggleWishlistModal}
                                >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                                {/* Form inputs */}
                                {/* Game image card */}
                                <div>
                                    <img src={props.imageUrl} alt={props.name} className='rounded-[16px] w-100 h-100 object-cover'/>
                                </div>
                                
                                {/* Squad selection */}
                                <div>
                                    <Dropdown />
                                </div>

                                {/* Submit button */}
                                <button
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                <svg
                                    className="me-1 -ms-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                Let's Schedule
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WishlistModal