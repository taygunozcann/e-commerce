

function Categories() {
    // Üst Kategori Öne Çıkanları Data Dizisi
   const categories = [
    { id: 1, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 2, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 3, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 4, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
    { id: 5, name: 'CLOTHS', items: '5 Items', image: 'https://unsplash.com' },
  ];
    
  return (
    <div>
        {/* 1. Header / Breadcrumb Kısmı */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white sm:bg-transparent">
        <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#252B42] cursor-pointer">Home</span>
          <span className="text-[#BDBDBD]">➔</span>
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      {/* 2. Üst Kategori Kartları Bloğu */}
      {/* Mobilde 1, Tablette 3, Masaüstünde 5 sütun yan yana listelenir */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="relative h-[220px] overflow-hidden group cursor-pointer shadow-sm">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white">
                <span className="font-bold tracking-wider text-base">{cat.name}</span>
                <span className="text-xs mt-1 font-medium">{cat.items}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
