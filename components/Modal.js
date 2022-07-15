import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
const Modal = ({
  openModal,
  setOpenModal,
  image,
  secondImage,
  videoLink,
  title,
  description,
  link,
  status,
}) => {
  const [modalImage, setModalImage] = useState(image);
  console.log(videoLink);

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
      }}
    >
      <div className="fixed inset-0 bg-white/75" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center">
        <Dialog.Panel
          as="div"
          className={"flex flex-col bg-black mx-auto max-w-3xl rounded-md p-4"}
        >
          <div className="flex justify-between items-center text-center">
            <div as="p" className={"flex items-center right-0"}>
              <a
                href={link}
                className={
                  status === "online"
                    ? "text-green-600 border border-green-600 outline-none text-xs p-1 rounded-lg w-auto"
                    : "text-red-600 border border-red-600 outline-none text-xs p-1 rounded-lg w-auto"
                }
              >
                {status}
              </a>
            </div>
            <Dialog.Title
              as="h3"
              className="text-2xl font-medium leading-6 text-white"
            >
              {title}
            </Dialog.Title>

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
          </div>
          <Dialog.Description
            as="p"
            className={"text-slate-50 p-10 text-center"}
          >
            {description}
          </Dialog.Description>
          <div className="h-90 w-auto mx-4">
            <Image
              onClick={() => {
                HandleToggleImage();
              }}
              src={modalImage}
              alt={title}
              height={332}
              width={600}
            ></Image>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-white text-black py-1 px-2 m-1 min-w-fit"
              onClick={() => setOpenModal(false)}
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
