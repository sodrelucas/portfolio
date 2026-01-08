import { MdTerminal } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="my-8 flex flex-col gap-6 px-6 border-t border-white/20 pt-8">
      <h4 className="flex items-center gap-2 text-2xl justify-center ">
        <MdTerminal className="text-[#135BEC]" />
        <span className="text-white/80 font-bold">Lucas Soares</span>
      </h4>
      <div className="flex justify-center gap-10 ">
        <FaCode className="flex items-center gap-2 text-2xl hover:text-white/80 transition-colors duration-300 cursor-default" />
        <IoIosBriefcase className="flex items-center gap-2 text-2xl hover:text-white/80 transition-colors duration-300 cursor-default" />
        <MdAlternateEmail className="flex items-center gap-2 text-2xl hover:text-white/80 transition-colors duration-300 cursor-default" />
        <MdEmail className="flex items-center gap-2 text-2xl hover:text-white/80 transition-colors duration-300 cursor-default" />
      </div>
      <p className="text-center ">
        &copy; 2026 Lucas Soares. Construído com paixão e código.
      </p>
    </footer>
  );
}
