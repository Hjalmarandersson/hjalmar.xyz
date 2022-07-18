const SocialLinks = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <ul className="absolute bottom-0 flex flex-row items-center justify-center m-10">
        <li className="px-2 py-1 rounded-lg border m-2">
          <a href="mailto:yamlr@pm.me">Contact</a>
        </li>
        <li className="px-2 py-1 rounded-lg border m-2">
          <a href="https://github.com/hjalmarandersson">Github</a>
        </li>
        <li className="px-2 py-1 rounded-lg border m-2">
          <a href="https://linkedin.com/in/hjalmarandersson">Linkedin</a>
        </li>
        <li className="px-2 py-1 rounded-lg border m-2">
          <a href="https://youtube.com/c/hjalmarxyz">Youtube</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
