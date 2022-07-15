import Link from "next/link";
import Image from "next/image";

export default function BlogPostGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-0">
      {posts.map(({ post, frontmatter }) => (
        <div
          key={post}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/${post}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
