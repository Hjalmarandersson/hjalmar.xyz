import Image from "next/dist/client/image";
import fjaellenPic from "/public/fjaellen.jpg";
import cafesurferPic from "/public/cafesurfers.jpg";
import hjalmarxyzPic from "/public/hjalmar-xyz.jpg";
import talentformPix from "/public/talentforms.jpg";

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
      <div className="mx-5 flex flex-col bg-inherit">
        <div className="mx-2 my-4 ">
          <a
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(fjaellenPic),
                setHeight(332),
                setWidth(600),
                setTitle("Fjällen"),
                setDescription(
                  "Fjällen is an map app built with JavaScript/React/NextJs where users can find ski tours/hikes near them."
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
        <div className="mx-2 my-4">
          <a
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(hjalmarxyzPic),
                setHeight(332),
                setWidth(600),
                setTitle("Hjalmar.xyz"),
                setDescription(
                  "This website is built with JavaScript/Nextjs/Headlessui, I'll fill it with more stuff when time allows"
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
        <div className="mx-2 my-4">
          <a
            className=" cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(talentformPix),
                setHeight(332),
                setWidth(600),
                setTitle("Talentforms"),
                setDescription(
                  "Talenforms was an CRUD app built with JavaScript/jQuery where companies(users) could create a page for their company and add/update/delete job openings. Talentforms is not online anymore."
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
        <div className="mx-2 my-4 ">
          <a
            className="cursor-pointer"
            onClick={() => {
              setOpenModal(true),
                setImage(cafesurferPic),
                setHeight(332),
                setWidth(600),
                setTitle("Cafesurfer"),
                setDescription(
                  "Cafesurfer was an app built with JavaScript where users could share and vote on their favorite working/studying cafés. Cafesurfer is not online anymore."
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
      </div>
    </>
  );
};

export default Projects;
