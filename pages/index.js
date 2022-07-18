import Head from "next/head";
import Articles from "../components/Articles";
import Modal from "../components/Modal";
import { useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import ShortPresentation from "../components/ShortPresentation";

export default function Home({ articles }) {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [tech, setTech] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Hjalmar Andersson (@hjalmarxyz)</title>
        <meta
          name="description"
          property="og:description"
          content="Homepage of Hjalmar Andersson"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="keywords" content="developer, engineer, programmer" />
        <meta property="og:title" content="hjalmar.xyz" />
        <meta name="image" property="og:image" content="/hjalmar-ogimage.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hjalmar.xyz" />
        <meta charSet="utf-8"></meta>
        <meta name="language" content="English"></meta>
      </Head>
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      <div className="bg-black flex flex-col items-center min-h-screen">
        <Nav setOpenMenu={setOpenMenu} />
        <ShortPresentation />
        <Articles
          setSecondImage={setSecondImage}
          setImage={setImage}
          setOpenModal={setOpenModal}
          setTitle={setTitle}
          setDescription={setDescription}
          setLink={setLink}
          setStatus={setStatus}
          status={status}
          setVideoLink={setVideoLink}
          articles={articles}
          setTech={setTech}
          tech={tech}
        />
        {openModal && (
          <Modal
            image={image}
            secondImage={secondImage}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setTech={setTech}
            tech={tech}
            title={title}
            description={description}
            link={link}
            status={status}
            videoLink={videoLink}
          />
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("articles");
  const articles = files.map((fileName) => {
    const article = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`articles/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      article,
      frontmatter,
    };
  });

  return {
    props: {
      articles,
    },
  };
}
