import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
const Modal = ({
  openModal,
  setOpenModal,
  setTech,
  tech,
  image,
  secondImage,
  videoLink,
  title,
  description,
  link,
  status,
}) => {
  const [modalImage, setModalImage] = useState(image);

  function HandleToggleImage() {
    {
      modalImage === image ? setModalImage(secondImage) : setModalImage(image);
    }
  }

  return (
    <Dialog
      as="div"
      className="relative z-10"
      open={openModal}
      onClose={() => {
        setOpenModal(false);
        setTech([]);
      }}
    >
      <div className="fixed inset-0 bg-white/75" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center">
        <Dialog.Panel
          as="div"
          className={"flex flex-col bg-black mx-auto max-w-3xl rounded-md p-4"}
        >
          <div className="flex justify-between items-center text-center">
            {videoLink === null ? (
              <div className="invisible">no video</div>
            ) : (
              <>
                <a
                  className="border outline-none text-xs p-1 rounded-lg w-auto"
                  href={videoLink}
                >
                  Video
                </a>
              </>
            )}
            <Dialog.Title
              as="h3"
              className="text-2xl font-medium leading-6 text-white"
            >
              {title}
            </Dialog.Title>
            <div className={"flex items-center right-0"}>
              <a
                href={link}
                className={
                  status === "online"
                    ? "text-green-700 border border-green-700 outline-none text-xs p-1 rounded-lg w-auto"
                    : "text-red-800 border border-red-800 outline-none text-xs p-1 rounded-lg w-auto"
                }
              >
                {status}
              </a>
            </div>
          </div>
          <Dialog.Description
            as="div"
            className={"pt-10 text-center flex flex-col"}
          >
            <p className={"text-slate-50 "}>{description}</p>
            <div className="flex flex-row items-center justify-center my-3">
              {/* Map through array and create tags for each type of teac used in project */}
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-white border border-white outline-none text-xs p-1 mx-1 rounded-lg w-auto"
                >
                  {t}
                </span>
              ))}
            </div>
          </Dialog.Description>
          <div
            onClick={() => {
              HandleToggleImage();
            }}
            className="relative h-90 w-auto mx-4"
          >
            <div className="absolute opacity-50 bg-inherit left-0 top-1/2 font-extrabold ml-2 z-10">
              &#8592;
            </div>
            <div className="absolute opacity-50 right-0 top-1/2 font-extrabold mr-2 z-10">
              &#8594;
            </div>
            <Image
              src={modalImage}
              alt={title}
              height={332}
              width={600}
            ></Image>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-white text-black py-1 px-2 m-1 min-w-fit"
              onClick={() => {
                setOpenModal(false), setTech([]);
              }}
            >
              Back
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
