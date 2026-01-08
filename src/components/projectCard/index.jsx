import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tecnologias,
  link,
  github,
  img,
}) {
  return (
    <div className="bg-[#101826] border border-white/10 rounded-xl overflow-hidden hover:border-[#1e3a8a] transition-colors duration-300">
      <div className="relative overflow-hidden max-h-44 hover:max-h-125 transition-all duration-500 ease-in-out">
        <img src={img} alt="Projeto" className="w-full h-full object-cover" />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tecnologias.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
          {link != "" && (
            <a
              href={link}
              target="_blank"
              className="flex items-center gap-1 hover:text-white transition cursor-pointer"
            >
              <FaEye />
              Demo
            </a>
          )}
          {github != "" && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1 hover:text-white transition cursor-pointer"
            >
              <FaGithub />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
