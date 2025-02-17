
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import info_icon from "../../assets/info_icon.png"
import play_icon from "../../assets/play_icon.png"
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in mordern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info" />
              More Info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster movies"}/>
      <TitleCards title={"Only on Netflix"}/>
      <TitleCards title={"Upcoming"}/>
      <TitleCards title={"Top Pics for You"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
