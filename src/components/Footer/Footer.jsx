import "./Footer.css";
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return <div className="footer">
    <div className="footer-icons">
      <img src={youtube_icon}alt="youtube" />
      <img src={twitter_icon}alt="twitter" />
      <img src={instagram_icon}alt="instagram" />
      <img src={facebook_icon}alt="facebook" />
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Card</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Leagal Notices</li>
      <li>Cookies Preferences</li>
      <li>Corporarte Information</li>
      <li>Contact Us</li>
    </ul>
    <p className="copyright-text">&#169; 1997-2023 Netflix, Inc. </p>
  </div>;
};

export default Footer;
