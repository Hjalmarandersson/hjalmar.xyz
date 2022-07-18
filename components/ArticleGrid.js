import Link from "next/link";
import Image from "next/image";

export default function ArticleGrid({ articles }) {
  return (
    <div className="mt-32 text-center">
      <div className="grid grid-cols-1 md:grid-cols-4 p-4 md:p-0">
        {articles.map(({ article, frontmatter }) => (
          <div
            key={article}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <Link href={`/${article}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`${frontmatter.mainImage}`}
                />
                <h1 className="p-4">{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
