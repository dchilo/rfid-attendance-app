'use client'
import { useState, useEffect } from 'react';
import { GitHubIcon } from './Icons';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      document.documentElement.classList.toggle('dark', storedDarkMode === 'true');
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    setDarkMode(newDarkMode);
  };

  return (
    <footer className={`py-6 md:py-8 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white`}>
      <div className={`container mx-auto flex flex-col md:flex-row justify-between items-center`}>
        <div className={`mb-4 md:mb-0`}>
          <p className={`text-sm`}>&copy; David Chilo</p>
        </div>
        <div className={`mb-4 md:mb-0 flex`}>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className={`mr-4  hover:text-blue-600 focus:outline-none`}
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/tuusuario/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-500 hover:text-blue-600 focus:outline-none`}
          >
            <span role="img" aria-label="LinkedIn">🔗</span>
          </a>
        </div>
        <div>
          <button
            className={`text-sm text-gray-600 dark:text-gray-300 focus:outline-none`}
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <span role="img" aria-label="Light Mode">☀️</span>
            ) : (
              <span role="img" aria-label="Dark Mode">🌙</span>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;