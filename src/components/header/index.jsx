import { useState } from "react";
import { MdTerminal } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border border-[#8f9eb2]/20 ">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-bold flex items-center">
          <MdTerminal className="text-2xl text-[#135BEC] mr-1" />
          <span className="text-white/80">Lucas</span>
          <span className="text-[#135BEC]">.dev</span>
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <Link
            to="/"
            className="cursor-pointer transition-colors duration-300 hover:text-white/80 "
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className="cursor-pointer transition-colors duration-300 hover:text-white/80 "
          >
            Sobre
          </Link>
          <Link
            to="/projetos"
            className="cursor-pointer transition-colors duration-300 hover:text-white/80"
          >
            Projetos
          </Link>
        </div>

        <div className="hidden md:flex gap-4 font-medium items-center">
          <Link
            to="/contato"
            className="cursor-pointer transition-colors duration-300 hover:text-white/80"
          >
            Contato
          </Link>
          <span className="relative w-fit px-3 py-1.5 font-bold text-white rounded bg-[#135bec] cursor-pointer transition-colors duration-300 hover:bg-[#2568ee]">
            <span className="absolute -inset-1 rounded bg-[#135bec] blur-md opacity-20 -z-10"></span>
            Baixar CV
          </span>
        </div>

        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden text-2xl text-white"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col px-6 pb-8 gap-2 justify-end">
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
          <span className="relative w-fit px-3 py-1.5 font-bold text-white rounded bg-[#135bec]">
            <span className="absolute -inset-1 rounded bg-[#135bec] blur-md opacity-20 -z-10"></span>
            Baixar CV
          </span>
        </div>
      )}
    </header>
  );
}
