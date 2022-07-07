import Image from "next/dist/client/image";
import fjaellenPic from "../public/fjaellen.jpg";
import cafesurferPic from "../public/cafesurfers.jpg";
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
                  "Fjällen is built with JavaScript/React/Nextjs. Fjällen is a map with Scandinavian skitours and hikes. Users can locate themself and find full routes and details of the hikes and skitours"
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
                  "Talenforms was built with JavaScript/jQuery/Bootstrap/Firebase. Talenforms was an CRUD app where companies(users) could create an page for their company and then add/uppdate/delete job openings that candidates could apply to. Talentforms is not online anymore."
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
                  "Cafesurfer was built with JavaScript/Bootstrap/Firebase. Cafesurfer was an app where users could share and vote on their favorite working/studying cafés. Cafesurfer is not online anymore."
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
