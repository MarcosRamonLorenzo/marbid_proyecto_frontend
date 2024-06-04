import Header from "@/components/shared-componentes/Header.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import Collaborators from "@/components/home/Collaborators.jsx";
import Categories from "@/components/home/Cateogries.jsx";
import Footer from "@/components/home/Footer.jsx";
import InfoWeb from "@/components/home/InfoWeb.jsx";
import CommentsSection from "@/components/home/CommentsSection.jsx";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Collaborators />
      <InfoWeb/>
      <Categories />
      <CommentsSection />
      <Footer/>
    </div>
  );
};

export default Home;
