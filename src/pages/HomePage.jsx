import BestSellers from "../components/HomeComponents/Bestsellers";
import Blogs from "../components/HomeComponents/Blogs";
import Collection from "../components/HomeComponents/Collection";
import ContentCarousel from "../components/HomeComponents/ContentCarousel";
import EditorsPick from "../components/HomeComponents/EditorsPick";

function HomePage() {
    
  return (
    <div>
        <ContentCarousel />
        <EditorsPick />
        <BestSellers />
        <ContentCarousel />
        <Collection />
        <Blogs />
    </div>
  );
}

export default HomePage;