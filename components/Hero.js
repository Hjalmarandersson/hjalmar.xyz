const Hero = () => {
  return (
    <div className="flex flex-col max-w-2xl mt-32 mb-10 mx-7 text-center">
      <p className="my-auto">
        Hi! I&apos;m Hjalmar. I&apos;m a developer based in Stockholm who enjoys
        coding, training, and hanging out with family and friends.
      </p>
      <div className="flex-row my-4">
        <a href="mailto:yamlr@pm.me" className="mx-2 px-3 py-1 outline">
          Hire me
        </a>
        <a
          href="https://github.com/hjalmarandersson"
          className="mx-2 px-3 py-1 outline"
          rel="noreferrer"
          target={"_blank"}
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/hjalmarxyz/"
          className="mx-2 px-3 py-1 outline"
          rel="noreferrer"
          target={"_blank"}
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Hero;
