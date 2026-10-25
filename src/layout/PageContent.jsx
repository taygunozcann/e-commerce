import Header from './Header';
import Footer from './Footer';

function PageContent({ children }) {
  return (
    <div >
      {/* Tüm sistemde tek bir Header ve menü */}
      <Header />
      
      {/* Sayfa bileşenlerini ve o anki aktif rotayı tutan ana kapsayıcı alan */}
      <main>
        {children}
      </main>
      
      {/* Tüm sistemde tek bir Footer */}
      <Footer />
    </div>
  );
}

export default PageContent;