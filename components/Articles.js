import Image from "next/dist/client/image";

export default function Articles({
  articles,
  setOpenModal,
  setImage,
  setSecondImage,
  setTitle,
  setDescription,
  setLink,
  setStatus,
  setVideoLink,
  setTech,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-0">
      {articles.map(({ article, frontmatter }) => (
        <div
          key={article}
          className="border border-gray-200 m-2 rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
          <a
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(`${frontmatter.mainImage}`),
                setSecondImage(`${frontmatter.secondImage}`),
                setTitle(frontmatter.title),
                setDescription(frontmatter.metaDesc),
                setLink(frontmatter.link);
              setStatus(frontmatter.status);
              setVideoLink(frontmatter.videoLink);
              setTech(frontmatter.tech);
            }}
          >
            <Image
              src={frontmatter.mainImage}
              height={332}
              width={600}
              alt={frontmatter.title}
            ></Image>
            <div className="flex justify-between items-center text-center">
              <h1 className="p-4">{frontmatter.title}</h1>
              <div className={"flex items-center right-0"}>
                <span
                  className={
                    frontmatter.status === "online"
                      ? "text-green-700 border border-green-700 outline-none text-xs p-1 rounded-lg w-auto mr-4"
                      : "text-red-800 border border-red-800 outline-none text-xs p-1 rounded-lg w-auto mr-4"
                  }
                >
                  {frontmatter.status}
                </span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
