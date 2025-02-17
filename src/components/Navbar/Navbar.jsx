import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netfilx" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="profile image" className="profile" />
          <img src={caret_icon} alt="caret icon" className="icon" />
          <div className="doropdown">
            <p>Sign out of nietflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
