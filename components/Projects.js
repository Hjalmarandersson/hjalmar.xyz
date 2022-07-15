import Image from "next/dist/client/image";

export default function Projects({
  projects,
  setOpenModal,
  setImage,
  setSecondImage,
  setTitle,
  setDescription,
  setLink,
  setStatus,
  setVideoLink,
}) {
  return (
    <>
      <h3 id="projects" className="text-2xl font-bold">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-0">
        {projects.map(({ project, frontmatter }) => (
          <div
            key={project}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
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
              }}
            >
              <Image
                src={frontmatter.mainImage}
                height={332}
                width={600}
                alt={frontmatter.title}
              ></Image>
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
