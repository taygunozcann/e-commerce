import React from 'react';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Bölümü */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-indigo-600">
              ŞirketLogosu
            </a>
          </div>

          {/* Masaüstü Menü (Büyük Ekranlar) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150">
              Anasayfa
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150">
              Hakkımızda
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150">
              Hizmetler
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150">
              İletişim
            </a>
          </nav>

          {/* Masaüstü Buton Bölümü */}
          <div className="hidden md:flex items-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-150">
              Giriş Yap
            </button>
          </div>

          {/* Mobil Menü Butonu (Hamburger Menu) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Menüyü aç/kapat"
            >
              {isOpen ? (
                // Kapatma (X) İkonu
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menü İkonu
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü İçeriği (Küçük Ekranlar) */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
              Anasayfa
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
              Hakkımızda
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
              Hizmetler
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
              İletişim
            </a>
            <div className="pt-4 pb-2 border-t border-gray-200 px-3">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-150">
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;