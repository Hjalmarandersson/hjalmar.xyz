import Image from "next/dist/client/image";
import fjaellenPic from "../public/fjaellen.jpg";
import cafesurferPic from "../public/cafesurfers.jpg";
import hjalmarxyzPic from "../public/hjalmar-xyz.jpg";
import talentformPix from "../public/talentforms.jpg";

const Projects = ({
  setImage,
  setHeight,
  setWidth,
  setOpenModal,
  setTitle,
  setDescription,
  setLink,
}) => {
  return (
    <>
      <div id="projects"></div>
      <div className="mx-5 flex flex-col bg-inherit text-center">
        <h3 id="projects" className="text-2xl font-bold">
          Projects
        </h3>
        <div className="m-2 p-2 text-center">
          <a
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(fjaellenPic),
                setHeight(332),
                setWidth(600),
                setTitle("Fjällen"),
                setDescription(
                  "Fjällen is built with JavaScript/React/Nextjs. On Fjällen users can find nearby ski tours and hikes with full routes."
                ),
                setLink("https://fjaellen.com");
            }}
          >
            <Image
              src={fjaellenPic}
              height={332}
              width={600}
              alt="Fjällen"
            ></Image>
          </a>
        </div>
        <div className="m-2 p-2 text-center">
          <a
            className=" cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(talentformPix),
                setHeight(332),
                setWidth(600),
                setTitle("Talentforms"),
                setDescription(
                  "Talenforms was built with JavaScript/jQuery. With Talenforms companies could create a company page with their own url and add/update/delete job openings that page visitors could apply to. Talentforms is not online anymore."
                ),
                setLink("https://github.com/Hjalmarandersson/talentforms");
            }}
          >
            <Image
              src={talentformPix}
              height={333}
              width={592}
              alt="Talentforms"
              objectFit="cover"
            ></Image>
          </a>
        </div>
        <div className="m-2 p-2 text-center">
          <a
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(cafesurferPic),
                setHeight(332),
                setWidth(600),
                setTitle("Cafesurfer"),
                setDescription(
                  "Cafesurfer was built with JavaScript. With Cafesurfer users could find, share, and vote on their favorite working/studying cafés. Cafesurfer is not online anymore."
                ),
                setLink("https://github.com/Hjalmarandersson/cafesurfer");
            }}
          >
            <Image
              src={cafesurferPic}
              height={332}
              width={600}
              alt="Cafesurfers"
            ></Image>
          </a>
        </div>
        <div className="m-2 p-2 text-center">
          <a
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(hjalmarxyzPic),
                setHeight(332),
                setWidth(600),
                setTitle("hjalmar.xyz"),
                setDescription(
                  "Hjalmar.xyz (this website) is quickly trown together with JavaScript/Nextjs/Headlessui/tailwindcss, I'll update it when time allows."
                ),
                setLink("");
            }}
          >
            <Image
              src={hjalmarxyzPic}
              height={332}
              width={600}
              alt="Cafesurfers"
            ></Image>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
