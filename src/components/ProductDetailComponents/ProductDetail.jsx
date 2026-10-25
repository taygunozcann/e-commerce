import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
  Check,
  Star,
} from "lucide-react";

const productImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1000&q=85",
];

const colors = [
  { name: "Mavi", value: "#23a6f0" },
  { name: "Yeşil", value: "#2dc071" },
  { name: "Turuncu", value: "#e77c40" },
  { name: "Lacivert", value: "#252b42" },
];

const description =
  "Met minim Mollie non deserunt Alamo est sit cliquey dolor do met sent. REILIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.";

const ProductDetail = () => {

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [activeTab, setActiveTab] = useState("Description");
  const [isFavorite, setIsFavorite] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % productImages.length);
  };

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + productImages.length) % productImages.length
    );
  };

  const addToCart = () => {
    setCartMessage("Ürün sepetinize eklendi!");
    setTimeout(() => setCartMessage(""), 2500);
  };

  return (
    <div>
        <main className="min-h-screen bg-white">
      {/* ÜST ALAN */}
      <section className="bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-5 sm:px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-3 text-xs">
            <a href="/" className="font-bold text-[#252b42]">
              Home
            </a>
            <ChevronRight size={13} className="text-gray-400" />
            <span className="text-gray-400">Shop</span>
          </nav>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.05fr_1fr]">
            {/* ÜRÜN GALERİSİ */}
            <div className="min-w-0">
              <div className="group relative h-[300px] overflow-hidden bg-gray-100 sm:h-[380px] md:h-[340px] lg:h-[400px]">
                <img
                  src={productImages[activeImage]}
                  alt="Ürün görseli"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button
                  onClick={previousImage}
                  aria-label="Önceki görsel"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white transition hover:bg-black/20"
                >
                  <ChevronLeft size={32} strokeWidth={1.5} />
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Sonraki görsel"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white transition hover:bg-black/20"
                >
                  <ChevronRight size={32} strokeWidth={1.5} />
                </button>

                <span className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-semibold">
                  Sale
                </span>
              </div>

              {/* Küçük görseller */}
              <div className="mt-3 flex gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImage(index)}
                    aria-label={`${index + 1}. ürün görselini göster`}
                    className={`h-16 w-16 overflow-hidden border-2 transition sm:h-20 sm:w-20 ${
                      activeImage === index
                        ? "border-[#23a6f0]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Ürün küçük görsel ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ÜRÜN BİLGİLERİ */}
            <div className="pt-1">
              <h1 className="text-xl font-medium text-[#252b42]">
                Floating Phone
              </h1>

              {/* Puan */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div
                  className="flex items-center gap-0.5 text-[#f3cd03]"
                  aria-label="5 üzerinden 4 puan"
                >
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                  <Star size={16} strokeWidth={1.5} />
                </div>
                <span className="text-xs text-gray-500">10 Reviews</span>
              </div>

              {/* Fiyat */}
              <p className="mt-4 text-2xl font-bold text-[#252b42]">
                $1,139.33
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="text-gray-500">Availability :</span>
                <span className="font-semibold text-[#23a6f0]">
                  In Stock
                </span>
              </div>

              <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
                {description}
              </p>

              <hr className="my-5 border-gray-200" />

              {/* RENK SEÇİMİ */}
              <div className="flex items-center gap-2.5">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`${color.name} rengini seç`}
                    title={color.name}
                    className="flex h-7 w-7 items-center justify-center rounded-full transition hover:scale-110"
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === color.name && (
                      <Check size={15} className="text-white" />
                    )}
                  </button>
                ))}
              </div>

              {/* AKSİYON BUTONLARI */}
              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => setShowOptions(!showOptions)}
                  className="rounded bg-[#23a6f0] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#168bd0]"
                >
                  Select Options
                </button>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  aria-label="Favorilere ekle"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#23a6f0] ${
                    isFavorite ? "text-red-500" : "text-[#252b42]"
                  }`}
                >
                  <Heart
                    size={17}
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>

                <button
                  onClick={addToCart}
                  aria-label="Sepete ekle"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#23a6f0] hover:text-[#23a6f0]"
                >
                  <ShoppingCart size={17} />
                </button>

                <button
                  onClick={() => setActiveTab("Description")}
                  aria-label="Ürünü incele"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#23a6f0] hover:text-[#23a6f0]"
                >
                  <Eye size={17} />
                </button>
              </div>

              {showOptions && (
                <div className="mt-5 rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold">
                    Seçilen renk: {selectedColor}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Ürün seçiminizi tamamlayabilirsiniz.
                  </p>
                  <button
                    onClick={addToCart}
                    className="mt-3 rounded bg-[#23a6f0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#168bd0]"
                  >
                    Sepete Ekle
                  </button>
                </div>
              )}

              {cartMessage && (
                <p
                  role="status"
                  className="mt-3 text-sm font-medium text-green-600"
                >
                  {cartMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ALT ALAN: ÜRÜN DETAYLARI */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Sekmeler */}
        <div className="flex flex-wrap justify-center gap-x-8 border-b border-gray-100 sm:gap-x-10">
          {[
            "Description",
            "Additional Information",
            "Reviews (0)",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 px-1 py-5 text-xs font-semibold transition ${
                activeTab === tab
                  ? "border-[#23a6f0] text-[#252b42]"
                  : "border-transparent text-gray-500 hover:text-[#23a6f0]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sekme içeriği */}
        <div className="grid grid-cols-1 gap-7 py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {activeTab === "Description" && (
            <>
              {/* Ürün fotoğrafı */}
              <div className="overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85"
                  alt="Modern dekorasyon ve mobilya"
                  className="h-64 w-full object-cover sm:h-80 md:h-full md:min-h-[280px]"
                />
              </div>

              {/* Açıklama metinleri */}
              <div>
                <h2 className="mb-5 text-xl font-bold leading-7">
                  the quick fox jumps over
                </h2>

                {[1, 2, 3].map((item) => (
                  <p
                    key={item}
                    className="mb-4 text-xs leading-5 text-gray-500"
                  >
                    {description}
                  </p>
                ))}
              </div>

              {/* Özellik listesi */}
              <div>
                <h2 className="mb-5 text-xl font-bold leading-7">
                  the quick fox jumps over
                </h2>

                <ul className="space-y-3">
                  {Array.from({ length: 4 }, (_, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs font-semibold text-gray-600"
                    >
                      <ChevronRight
                        size={16}
                        className="shrink-0 text-gray-400"
                      />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-5 mt-8 text-xl font-bold leading-7">
                  the quick fox jumps over
                </h2>

                <ul className="space-y-3">
                  {Array.from({ length: 4 }, (_, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs font-semibold text-gray-600"
                    >
                      <ChevronRight
                        size={16}
                        className="shrink-0 text-gray-400"
                      />
                      <span>the quick fox jumps over the lazy dog</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {activeTab === "Additional Information" && (
            <div className="sm:col-span-2 lg:col-span-3">
              <h2 className="text-xl font-bold">Additional Information</h2>
              <div className="mt-5 max-w-2xl divide-y divide-gray-100">
                {[
                  ["Renk", selectedColor],
                  ["Stok durumu", "Stokta"],
                  ["Ürün kodu", "FP-001"],
                  ["Değerlendirme", "4/5"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 py-4 text-sm"
                  >
                    <span className="text-gray-500">{label}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Reviews (0)" && (
            <div className="sm:col-span-2 lg:col-span-3">
              <h2 className="text-xl font-bold">Customer Reviews</h2>
              <p className="mt-3 text-sm text-gray-500">
                Bu ürün için henüz yorum yapılmamış.
              </p>
              <button className="mt-5 rounded bg-[#23a6f0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#168bd0]">
                İlk Yorumu Yap
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
    </div>
  );
};

export default ProductDetail;