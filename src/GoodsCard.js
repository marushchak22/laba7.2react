import React from 'react';

const GoodsCard = ({ title, price, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <img src={imageUrl} alt={title} style={{ width: '150px', height: '150px' }} />
      <h3>{title}</h3>
      <p>Ціна: {price} грн</p>
    </div>
  );
};

export default GoodsCard;