import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/ban.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'; // Correct import
import Header from './Header';

const Navbar = () => {
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
      path: '/categories/news?category=all-news',
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
      <Header />
      {/*++++======== navbar start+++====== */}

      <div className="bg-black">
        <div className="navbar container mx-auto justify-between">
          <div>
            <Link href="/">
              <Image src={logo} width={100} height={100} alt="news" />
            </Link>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded z-[1] mt-3 w-28 p-2 shadow"
              >
                {menuItems.map(item => (
                  <Link href={item.path} key={item.route}>
                    <button className="text-white hover:text-yellow-400 my-2">
                      {item.route}
                    </button>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems.map(item => (
                <Link href={item.path} key={item.route}>
                  <button className="text-white mx-4 font-semibold hover:text-yellow-400">
                    {item.route}
                  </button>
                </Link>
              ))}
            </ul>
          </div>

          <div className="text-white space-x-4">
            {/* Correct FontAwesome Icon */}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
