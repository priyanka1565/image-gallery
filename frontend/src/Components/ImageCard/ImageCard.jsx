// ImageCard.js

import React from 'react';
import './ImageCard.css';

const ImageCard = ({ imageUrl, title, price }) => {
    return (
        <div className="image-card">
            <img className="image" src={imageUrl} alt={title} />
            <div className="card-content">
                <h3 className="title">{title}</h3>
                <p className="price">${price}</p>
            </div>
        </div>
    );
};

export default ImageCard;
