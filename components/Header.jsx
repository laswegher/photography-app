import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

// Framer Motion Animation
const nav = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { duration: 0.3 },
  },
};
const item = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 17,
    },
  },
  closed: {
    x: -100,
  },
};

const Header = () => {
  // Mobile Nav Toggle
  const [toggle, setToggle] = useState(false);

  // Handeling Toggle
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const [navStyle, setNavStyle] = useState({
    bg: 'transparent',
    text: 'white',
  });

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 100)
        setNavStyle({ bg: 'white', text: 'black' });
      else setNavStyle({ bg: 'transparent', text: 'white' });
    });
  }, []);

  return (
    <div
      style={{ backgroundColor: navStyle.bg, color: navStyle.text }}
      className="z-20 fixed inset-0 w-full FCenter h-16 text-white"
    >
      <div className="Container FBetween">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-bold cursor-pointer text-red-500">
            Captur
          </h1>
        </Link>
        {/* Navigation */}
        <nav>
          <ul className="sm:flex gap-7 text-lg font-medium hidden">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/#gallery">
              <li>Gallery</li>
            </Link>
            <Link href="/Work">
              <li>Work</li>
            </Link>
            <Link href="/Contact">
              <li>Contact</li>
            </Link>
          </ul>
          {/* Bars Icon */}
          <div
            onClick={handleToggle}
            className="flex sm:hidden"
          >
            <AiOutlineBars size={25} />
          </div>
        </nav>

        {/* Mobile Navogation */}
        <motion.nav
          variants={nav}
          initial="closed"
          animate={toggle ? 'open' : 'closed'}
          className="absolute inset-0 w-full  h-screen text-white bg-[#121212]"
        >
          {/* Logo */}
          <div className="FBetween h-16 px-4">
            <Link href="/">
              <h1 className="text-4xl font-bold cursor-pointer">
                Captur
              </h1>
            </Link>
            <div onClick={handleToggle}>
              <AiOutlineClose size={25} />
            </div>
          </div>

          {/* Navigation */}
          <ul className="CenterComponent flex-col text-4xl border-b border-yellow-500 pb-16 gap-7 font-medium">
            <Link href="/">
              <motion.li
                onClick={handleToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                Home
              </motion.li>
            </Link>
            <Link href="/#gallery">
              <motion.li
                onClick={handleToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                Gallery
              </motion.li>
            </Link>
            <Link href="/Work">
              <motion.li
                onClick={handleToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                Work
              </motion.li>
            </Link>
            <Link href="/Contact">
              <motion.li
                onClick={handleToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Header;
