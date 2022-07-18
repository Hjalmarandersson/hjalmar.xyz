import ArticleGrid from "../components/ArticleGrid";
import fs from "fs";
import matter from "gray-matter";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import { useState } from "react";

export default function Blog({ articles }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      <div className="bg-black flex flex-col items-center min-h-screen">
        <Nav setOpenMenu={setOpenMenu} />
        <ArticleGrid articles={articles} />
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
