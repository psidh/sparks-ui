"use client";
import toast from "react-hot-toast";

const Footer: React.FC = () => {
  const hoverClass = `underline-offset-3 hover:underline hover:text-teal-600 dark:hover:text-teal-400`;

  const footerGridClass = `justify-start items-start flex flex-col p-4 mx-2`;

  return (
    <nav className="text-lg p-4">
      <h1 className="text-3xl md:text-4xl container md:mx-auto ml-0 md:ml-10 my-8">
        Explore More...
      </h1>
      <div className="grid flex-col grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-10 mt-4">
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">neutral</p>
          <p>About</p>
          <p>Contact</p>
          <p>Toll-Free 1800-900</p>
        </div>
        <div className={footerGridClass}>
          <a href="/blog" className="text-xl py-2 font-bold">
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
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
          <a href="/blog" className="text-xl py-2 font-bold">
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
        </div>
      </div>
    </nav>
  );
};

// Component to display and copy the code
const FooterDisplay = () => {
  const codeString = `const Footer: React.FC = () => {
  const hoverClass = "underline-offset-3 hover:underline hover:text-teal-600 dark:hover:text-teal-400";

  const footerGridClass = "justify-start items-start flex flex-col p-4 mx-2";

  return (
    <nav className="text-lg p-4">
      <hr className="w-full  mb-4" />
      <h1 className="text-3xl md:text-4xl container md:mx-auto ml-0 md:ml-10 my-8">
        Explore More...
      </h1>
      <div className="grid flex-col grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-10 mt-4">
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">neutral</p>
          <p>About</p>
          <p>Contact</p>
          <p>Toll-Free 1800-900</p>
        </div>
        <div className={footerGridClass}>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
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
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
          <a href="/blog" className={hoverClass}>
            Link1
          </a>
        </div>
      </div>
    </nav>
  );
};
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    toast.success("Code copied to clipboard!");
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold my-8">Footer Component</h1>
      <h2 className="my-6 font-bold text-xl">Preview</h2>

      <div className="p4 rounded-lg border border-neutral-700 my-8">
        <Footer />
      </div>

      <pre className="bg-neutral-800 p-4 rounded-lg border border-neutral-800 overflow-auto">
        <button
          onClick={copyToClipboard}
          className="mb-4 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-extrabold"
        >
          Copy Code
        </button>
        <code>{codeString}</code>
      </pre>
    </div>
  );
};

export default FooterDisplay;
