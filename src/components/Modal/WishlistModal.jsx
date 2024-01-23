import React, { useState } from 'react';

const WishlistModal = () => {
    const [ isWishlistModalOpen, setIsWishlistModalOpen ] = useState(false);

    // toggle function for modal
    const toggleWishlistModal = () => {
        setIsWishlistModalOpen(!isWishlistModalOpen);
    };

    // handle submit function for form
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>WishlistModal</div>
    )
}

export default WishlistModal