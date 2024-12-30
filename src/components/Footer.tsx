const Footer = () => {
  return (
    <footer className="w-screen py-4 bg-black text-blue-50">
      <div className="container mx-auto max-w-7xl flex flex-col items-center font-sans justify-between gap-4 px-4 md:flex-row">
        <p className="text-center  text-sm font-light md:text-left">
          motorcykle 2024. All rights reserved
        </p>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
