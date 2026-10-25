import React from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
  // Görseldeki 3 farklı içeriğe uygun mock veri seti
  const blogPosts = [
    {
      id: 1,
      image: 'https://unsplash.com', // Renkli evler caddesi
      title: 'Loudest à la Madison #1 (L\'integral)',
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10
    },
    {
      id: 2,
      image: 'https://unsplash.com', // Pembe vosvos ve mavi duvar
      title: 'Loudest à la Madison #1 (L\'integral)',
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10
    },
    {
      id: 3,
      image: 'https://unsplash.com', // Renkli şemsiyeler
      title: 'Loudest à la Madison #1 (L\'integral)',
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 font-sans bg-white">
      
      {/* Üst Başlık Alanı */}
      <div className="text-center mb-16 px-2">
        <span className="text-sm font-bold text-[#23A6F0] tracking-wider uppercase">
          Practice Advice
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
          Featured Posts
        </h2>
        <p className="text-sm text-slate-500 mt-3 font-medium max-w-lg mx-auto leading-relaxed">
          Problems trying to resolve the conflict between <br className="hidden sm:inline" />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Grid Yapısı (Mobilde 1, Tablette 2, Masaüstünde 3 Sütun) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            date={post.date}
            comments={post.comments}
          />
        ))}
      </div>

    </section>
  );
};

export default Blogs;