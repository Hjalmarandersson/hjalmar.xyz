import { Dialog } from "@headlessui/react";
import Image from "next/image";
const Modal = ({
  openModal,
  setOpenModal,
  image,
  height,
  width,
  title,
  description,
  link,
}) => {
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
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel
          as="div"
          className={
            "flex flex-col items-center justify-center bg-black mx-auto max-w-3xl rounded-md"
          }
        >
          <Dialog.Title
            as="h3"
            className="text-2xl font-medium leading-6 text-white p-2"
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            as="p"
            className={"text-slate-50 pb-4 text-center"}
          >
            {description}
            <a className="px-1 border-none outline-none underline" href={link}>
              More info
            </a>
          </Dialog.Description>
          <div className="h-90 w-auto mx-4">
            <Image
              src={image}
              alt={title}
              height={height}
              width={width}
            ></Image>
          </div>
          <button
            className="bg-white text-black py-1 px-2 m-1"
            onClick={() => setOpenModal(false)}
          >
            Back
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
