import React from 'react';
import ProductCard from '../ShopComponents/ProductCard';

const Bestsellers = () => {
  // Görseldeki ürünleri simüle eden örnek mock data dizisi
  const products = [
    { id: 1, image: 'https://cdn.beymen.com/mnresize/596/830/productimages/bcmwhsup.fi1_IMG_01_8684786225394.jpg', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
    { id: 2, image: 'https://unsplash.com', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
    { id: 3, image: 'https://unsplash.com', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
    { id: 4, image: 'https://unsplash.com', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
    { id: 5, image: 'https://unsplash.com', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
    { id: 6, image: 'https://unsplash.com', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
    { id: 7, image: 'https://unsplash.com', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
    { id: 8, image: 'https://unsplash.com', title: 'Graphic Design', department: 'English Department', originalPrice: '16.48', salePrice: '6.48', colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42'] },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans">
      
      {/* Üst Başlık Alanı */}
      <div className="text-center mb-12 md:mb-16 px-2">
        <h3 className="text-sm md:text-base font-semibold text-slate-400 tracking-wider uppercase">
          Featured Products
        </h3>
        <h2 className="text-xl md:text-2xl font-bold tracking-wider text-slate-900 uppercase mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-2 font-medium max-w-xs mx-auto md:max-w-none">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Ürünler Grid Listesi */}
      {/* Mobilde 1 veya isteğe göre 2 sütun (sm:grid-cols-2), masaüstünde 4 sütun */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            department={product.department}
            originalPrice={product.originalPrice}
            salePrice={product.salePrice}
            colors={product.colors}
          />
        ))}
      </div>

    </section>
  );
};

export default Bestsellers;