import Link from "next/link";
import Image from "next/image";
import profilepic from "/public/hjalmar_bw.jpg";

const Nav = ({ setOpenMenu }) => {
  return (
    <header className="fixed top-0 h-auto p-2 z-10 flex w-full shadow-sm justify-center bg-black">
      <div className="flex flex-row justify-between items-center w-full max-w-sm">
        <Image
          src={profilepic}
          objectFit="contain"
          width={50}
          height={50}
          alt=""
          className="rounded-full"
        />
        <Link href={"/"}>
          <a>
            <h1 className="text-2xl px-4 mb-1 pb-1">hjalmar.xyz</h1>
          </a>
        </Link>
        <i
          className="fa-solid fa-bars text-white right-0 cursor-pointer"
          onClick={() => {
            setOpenMenu(true);
          }}
        ></i>
      </div>
    </header>
  );
};

export default Nav;
