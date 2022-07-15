import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-8 py-4 text-center">
      <div className="container mx-auto flex justify-center">
        <ul className="flex text-center">
          <li>
            <a className="px-2 py-1 border m-2" href="mailto:yamlr@pm.me">
              Contact
            </a>
          </li>
          <li>
            <a
              className="px-2 py-1 border m-2"
              href="https://github.com/hjalmarandersson"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="px-2 py-1 border m-2"
              href="https://linkedin.com/in/hjalmarandersson"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              className="px-2 py-1 border m-2"
              href="https://youtube.com/c/hjalmarxyz"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
      <p className="m-2">The end.</p>
    </footer>
  );
};

export default Footer;
