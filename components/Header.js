import Image from "next/image";
import React from "react";
import { SearchIcon , GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md  p-5 md:px-10 ">
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src={" https://links.papareact.com/qd3"}
          className=""
          layout="fill"
          objectFit="contain "
          objectPosition={"left"}
        />
      </div>

      <div className="flex items-center  rounded-full py-2 md:border-2 ">
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className=" hidden md:inline-flex h-8 md:mx-2 bg-red-400 text-white p-2 rounded-full cursor-pointer" />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer"> Become a host</p>
        <GlobeAltIcon className="h-6"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
      <MenuIcon className="h-6"/>
      <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
