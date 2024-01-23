import React, { useState } from 'react';

const WishlistModal = () => {
    const [ isWishlistModalOpen, setIsWishlistModalOpen ] = useState(false);

    const toggleWishlistModal = () => {
        setIsWishlistModalOpen(!isWishlistModalOpen);
    };

    return (
        <div>WishlistModal</div>
    )
}

export default WishlistModal