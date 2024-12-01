import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const goods = [
    { title: 'Товар 1', price: 100, imageUrl: '/melon.jpg' },
    { title: 'Товар 2', price: 200, imageUrl: '/banana.jpg' },
    { title: 'Товар 3', price: 300, imageUrl: 'Pineapple.jpg' },
    { title: 'Товар 4', price: 400, imageUrl: 'mango.jpeg' },
    { title: 'Товар 5', price: 500, imageUrl: 'Mandarin.jpg.webp' },
    { title: 'Товар 6', price: 600, imageUrl: 'apple.jpeg' },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {goods.map((item, index) => (
        <GoodsCard
          key={index}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default Gallery;
