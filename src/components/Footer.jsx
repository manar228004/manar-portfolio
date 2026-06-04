import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darker py-8 border-t border-slate-800 text-center">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Manar Kassem. All rights reserved.
      </p>
      <p className="text-slate-600 text-xs mt-2">
        Built with React, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;