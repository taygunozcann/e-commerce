import React from 'react';

import ProductList from '../components/ShopComponents/ProductList';
import Categories from '../components/ShopComponents/Categories';

const ShopPage = () => {
  // Üst Kategori Öne Çıkanları Data Dizisi
  const categories = [
    { id: 1, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 2, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 3, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 4, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 5, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
  ];


  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <Categories />
      <ProductList />
    </div>
  );
};

export default ShopPage;