import Head from "next/head";
import ShortPresentation from "../components/ShortPresentation";
import Projects from "../components/Projects";
import Modal from "../components/Modal";
import { useState } from "react";
import BlogPostGrid from "../components/BlogPostGrid";
import fs from "fs";
import matter from "gray-matter";

export default function Home({ posts, projects }) {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");
  const [videoLink, setVideoLink] = useState("");

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
      <div className="bg-black flex flex-col items-center min-h-screen">
        <ShortPresentation />
        {/* <BlogPostGrid posts={posts} />  TODO!! */}
        <Projects
          setImage={setImage}
          setSecondImage={setSecondImage}
          setOpenModal={setOpenModal}
          setTitle={setTitle}
          setDescription={setDescription}
          setLink={setLink}
          setStatus={setStatus}
          setVideoLink={setVideoLink}
          projects={projects}
        />
        {openModal && (
          <Modal
            image={image}
            secondImage={secondImage}
            openModal={openModal}
            setOpenModal={setOpenModal}
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
  // Get all our posts

  const postFiles = fs.readdirSync("posts");
  const posts = postFiles.map((fileName) => {
    const post = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      post,
      frontmatter,
    };
  });
  const projectFiles = fs.readdirSync("projects");
  const projects = projectFiles.map((fileName) => {
    const project = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`projects/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      project,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
      projects,
    },
  };
}
