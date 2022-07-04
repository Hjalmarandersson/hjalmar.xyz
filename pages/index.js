import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  return (
    <>
      <Head>
        <title>hjalmar.xyz</title>
        <meta name="description" content="Hompage of Hjalmar Andersson" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="keywords" content="developer, engineer, programmer" />
        <meta property="og:title" content="hjalmar.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hjalmar.xyz" />
        <meta charSet="utf-8"></meta>
        <meta name="language" content="English"></meta>
      </Head>
      <div className="bg-black flex flex-col items-center h-screen w-full">
        <Nav />
        <Hero />
        <Projects
          setImage={setImage}
          setHeight={setHeight}
          setWidth={setWidth}
          setOpenModal={setOpenModal}
          setTitle={setTitle}
          setDescription={setDescription}
          setLink={setLink}
        />
        {openModal && (
          <Modal
            image={image}
            height={height}
            width={width}
            setImage={setImage}
            openModal={openModal}
            setOpenModal={setOpenModal}
            title={title}
            description={description}
            link={link}
          />
        )}
      </div>
    </>
  );
}
