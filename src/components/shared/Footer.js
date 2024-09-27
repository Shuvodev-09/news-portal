import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const menuItems = [
    {
      route: 'Home',
      path: '/',
    },
    {
      route: 'Pages',
      path: '/pages',
    },
    {
      route: 'Categories',
      path: '/categories',
    },
    {
      route: 'About',
      path: '/about',
    },
    {
      route: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <div>
      <footer className="footer footer-center bg-black text-white p-10">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <FontAwesomeIcon
                className="text-xl hover:text-yellow-400"
                icon={faFacebook}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="text-xl hover:text-yellow-400"
                icon={faYoutube}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="text-xl hover:text-yellow-400"
                icon={faXTwitter}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="text-xl hover:text-yellow-400"
                icon={faInstagram}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="text-xl hover:text-yellow-400"
                icon={faLinkedin}
              />
            </a>
          </div>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          {menuItems.map(item => (
            <Link href={item.path} key={item.route}>
              <button className="text-white hover:text-yellow-400">
                {item.route}
              </button>
            </Link>
          ))}
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by The
            Dragon News
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
