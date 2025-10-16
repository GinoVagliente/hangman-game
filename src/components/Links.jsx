import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa";

const SocialIcons = ({ className = "" }) => {
  return (
    <div className={`flex space-x-4 text-black-100 text-2xl ${className}`}>
      <a
        href="https://github.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition duration-300 hover:scale-125 hover:text-gray-200"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition duration-300 hover:scale-125 hover:text-gray-200"
      >
        <FaLinkedin />
      </a>
      <a
        href="/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition duration-300 hover:scale-125 hover:text-gray-200"
      >
        <FaFolderOpen />
      </a>
    </div>
  );
};

export default SocialIcons;
