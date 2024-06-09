const Footer: React.FC = () => {
  const hoverClass = `underline-offset-3 hover:underline hover:text-teal-600 dark:hover:text-teal-400`;

  const footerGridClass = `justify-start items-start flex flex-col p-4 mx-2`;

  return (
    <nav className="text-lg p-4">
      <hr className="w-full border border-gray-300 dark:border-gray-600 mb-4" />
      <h1 className="text-3xl md:text-4xl container md:mx-auto ml-0 md:ml-10 my-8">
        Explore More...
      </h1>
      <div className="grid flex-col grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-10 mt-4">
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">neutral</p>
          <p>Caste</p>
          <p>Sati</p>
          <p>Discrimination against Women</p>
        </div>
        <div className={footerGridClass}>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
        </div>
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">Epics</p>
          <a href="/epics/ramayana" className={hoverClass}>
            Rāmayana
          </a>
          <a href="/epics/maha" className={hoverClass}>
            Mahābhārata
          </a>
        </div>
        <div className={footerGridClass}>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
          <a href="/blog/smarthas" className={hoverClass}>
            Link1
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
