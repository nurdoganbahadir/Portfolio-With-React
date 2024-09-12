import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer bg-dark">
      <a href="https://www.linkedin.com/in/nurdoganbahadir/">
        <FaLinkedin size={30} className="text-light" />
      </a>
      <a href="https://github.com/nurdoganbahadir">
        <FaGithubSquare size={30} className="text-light" />
      </a>
    </div>
  );
};

export default Footer;
