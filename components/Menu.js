import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Menu = ({ setOpenMenu }) => {
  return (
    <div
      id="menubg"
      className="fixed inset-0 bg-black/75 z-20"
      onClick={(e) => {
        if (e.target === document.getElementById("menubg")) {
          setOpenMenu(false);
        }
      }}
    >
      <div className="absolute w-screen h-screen md:w-1/2 lg:w-1/3 top-0 left-0 bg-black">
        <div className="flex flex-col items-center mt-4">
          <Link href={"/about"}>
            <a className="text-4xl min-w-min my-4">About</a>
          </Link>
          <Link href="/articles">
            <a className="text-4xl min-w-min my-4">Articles</a>
          </Link>
        </div>
        <SocialLinks />
        <div
          className="absolute text-4xl right-0 top-0 p-2 font-extrabold cursor-pointer text-white"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Menu;
