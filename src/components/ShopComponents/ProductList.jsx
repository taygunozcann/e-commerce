
import ProductCard from './ProductCard';

function ProductList() {

    // Grid İçindeki 12 Adet Ürün Mock Data Dizisi
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    image: [
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com'
    ][index % 12],
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '16.48',
    salePrice: '6.48',
    colors: ['#23A6F0', '#23D075', '#E77C40', '#252B42']
  }));
    
  return (
    <div>
        {/* 3. Filtreleme ve Kontrol Barı */}
      <div className="bg-white border-y border-slate-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sonuç Sayısı */}
          <div className="text-sm font-bold text-[#737373]">
            Showing all 12 results
          </div>

          {/* Görünüm İkonları (Grid/List) */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#737373]">Views:</span>
            <button className="p-3 border border-slate-200 rounded bg-white text-slate-700 hover:border-slate-400">
              🎛️
            </button>
            <button className="p-3 border border-slate-200 rounded bg-white text-slate-700 hover:border-slate-400">
              ☰
            </button>
          </div>

          {/* Sıralama Dropdown ve Filtre Butonu */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-center">
            <select className="bg-[#F9F9F9] border border-slate-200 rounded text-sm px-4 py-3.5 font-medium text-[#737373] outline-none cursor-pointer">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
            </select>
            <button className="bg-[#23A6F0] hover:bg-sky-600 text-white font-bold text-sm tracking-wider px-8 py-3.5 rounded transition-colors duration-300">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* 4. Ana Ürün Listesi Grid Alanı */}
      {/* Mobilde 1, Tablet/Küçük Ekranlarda 2, Masaüstünde tam 4 sütun */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
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
      </div>

      {/* 5. Sayfalama (Pagination) Alanı */}
      <div className="max-w-7xl mx-auto pb-20 flex justify-center">
        <div className="inline-flex rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm text-sm font-bold">
          <button className="px-5 py-4 text-[#BDBDBD] hover:bg-slate-50 transition-colors border-r border-slate-100">
            First
          </button>
          <button className="px-5 py-4 text-[#23A6F0] hover:bg-slate-50 transition-colors border-r border-slate-100">
            1
          </button>
          <button className="px-5 py-4 bg-[#23A6F0] text-white transition-colors border-r border-slate-100">
            2
          </button>
          <button className="px-5 py-4 text-[#23A6F0] hover:bg-slate-50 transition-colors border-r border-slate-100">
            3
          </button>
          <button className="px-5 py-4 text-[#23A6F0] hover:bg-slate-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
