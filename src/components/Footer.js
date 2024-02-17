import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram } from "@mdi/js";
const Footer = () => {
  return (
    <footer className="bg-amber-300 text-gray-600 shadow text-md mt-20">
      <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <span className="sm:text-center">© 2024 Atelier Dzeko</span>
        <ul className="flex flex-wrap items-center mt-3 font-medium sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">
              à propos
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              contact
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center mt-3 font-medium  sm:mt-0">
          <li className="hover:underline mr-2">
            <a
              href="https://www.facebook.com/atelierdzeko/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline m-6"
            >
              <Icon path={mdiFacebook} size={1.5} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/atelierdzeko/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Icon path={mdiInstagram} size={1.5} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
