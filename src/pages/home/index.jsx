import { RiCodeBoxFill } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdBrush } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { MdTerminal } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";

import InfoContainer from "../../components/infoContainer";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      <section className="max-w-7xl  px-6  flex m-auto ">
        <div className=" lg:w-1/2">
          <div className="cursor-default mt-16 mb-8 w-fit border items-center flex gap-2 border-[#135bec63] px-3 rounded-2xl text-[#135BEC] h-7 font-semibold bg-[#135bec31] transition-colors duration-300 hover:bg-[#5c8ff531] max-sm:mt-8">
            <span className="text-2xl">•</span>
            <span className="text-[.8rem]">DISPONÍVEL PARA PROJETOS</span>
          </div>

          <h1 className="text-6xl font-extrabold text-white mb-1">
            Olá, eu sou <br />
            <span className="bg-linear-to-r from-[#135BEC] to-[#7f96c5] bg-clip-text text-transparent">
              Lucas Soares
            </span>
          </h1>
          <h2 className="text-3xl mb-8">Desenvolvedor Front-End</h2>
          <p className="w-fit mb-8  ">
            Transformo ideias em experiências digitais reais. Desenvolvimento de
            aplicações web e mobile com foco em acessibilidade, usabilidade e
            impacto.
          </p>
          <div className="gap-3 flex max-[426px]:flex-col">
            <button className="relative w-fit px-5 py-1.5 font-bold text-white rounded bg-[#135bec] cursor-pointer transition-colors duration-300 hover:bg-[#2568ee]  max-[426px]:w-full">
              <span className="absolute inset-0 rounded bg-[#135bec] blur-md opacity-40 -z-10"></span>
              <Link to="/projetos">Ver projetos</Link>
            </button>
            <Link
              to="/contato"
              className="border px-6 rounded cursor-pointer font-semibold hover:text-[#b3c6df] transition-colors duration-300  max-[426px]:py-1.5 flex items-center justify-center"
            >
              Entrar em contato
            </Link>
          </div>
          <hr className="mt-12 text-[#8f9eb2]/40" />
          <p className="mt-8 mb-2">Stack Tecnológico Principal</p>
          <div className="flex gap-4 flex-wrap mb-16">
            <span className="flex items-center gap-2 text-lg hover:text-white/80 transition-colors duration-300 cursor-default">
              <RiCodeBoxFill />
              React
            </span>
            <span className="flex items-center gap-2 text-lg hover:text-white/80 transition-colors duration-300 cursor-default">
              <FaMobileAlt />
              React Native
            </span>
            <span className="flex items-center gap-2 text-lg hover:text-white/80 transition-colors duration-300 cursor-default">
              <BiCodeCurly />
              Javascript
            </span>
            <span className="flex items-center gap-2 text-lg hover:text-white/80 transition-colors duration-300 cursor-default">
              <IoMdBrush />
              Tailwind
            </span>
          </div>
        </div>

        <div class="hidden lg:flex items-center justify-center relative w-1/2">
          <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl scale-75"></div>

          <div class="relative w-full max-w-md bg-[#1e293b] rounded-xl shadow-2xl border border-slate-700 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div class="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-slate-700">
              <div class="flex gap-1.5">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <span class="ml-4 text-xs text-slate-400 font-mono">
                Developer.tsx
              </span>
            </div>

            <div class="p-6 font-mono text-sm leading-relaxed text-slate-300">
              <div class="flex">
                <span class="w-6 text-slate-600 select-none">1</span>
                <span class="text-purple-400">const</span>
                <span class="text-blue-400 ml-2">Developer</span>
                <span class="text-slate-400 ml-1">=</span>
                <span class="text-yellow-300 ml-1"></span>
              </div>

              <div class="flex">
                <span class="w-6 text-slate-600 select-none">2</span>
                <span class="ml-4 text-blue-300">name:</span>
                <span class="text-green-400 ml-2">'Lucas Soares'</span>,
              </div>

              <div class="flex">
                <span class="w-6 text-slate-600 select-none">3</span>
                <span class="ml-4 text-blue-300">role:</span>
                <span class="text-green-400 ml-2">'Front-end Developer'</span>,
              </div>

              <div class="flex">
                <span class="w-6 text-slate-600 select-none">4</span>
                <span class="ml-4 text-blue-300">skills:</span>
                <span class="text-yellow-300 ml-2">[</span>
              </div>

              <div class="flex flex-wrap">
                <span class="w-6 text-slate-600 select-none">5</span>
                <span class="ml-8 text-green-400">'Html'</span>,
                <span class="text-green-400 ml-2">'Css'</span>,
                <span class="text-green-400 ml-2">'Javascript'</span>
                <span class="text-green-400 ml-2">'Typescript'</span>
                <span class="text-green-400 ml-2">'PHP'</span>
                <span class="text-green-400 ml-2">'React'</span>
                <span class="text-green-400 ml-2">'React Native'</span>
                <span class="text-green-400 ml-2">'Tailwind'</span>
              </div>

              <div class="flex">
                <span class="w-6 text-slate-600 select-none">6</span>
                <span class="ml-4 text-yellow-300">]</span>,
              </div>

              <div class="flex">
                <span class="w-6 text-slate-600 select-none">7</span>
                <span class="ml-4 text-blue-300">hardWorker:</span>
                <span class="text-purple-400 ml-2">true</span>
              </div>

              <div class="flex">
                <span class="w-6 text-slate-600 select-none">8</span>
                <span class="text-yellow-300"></span>;
              </div>

              <div class="flex mt-2">
                <span class="w-6 text-slate-600 select-none">9</span>
                <span class="text-slate-500">
                  // Pronto para o próximo desafio! 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#151C2A] w-full max-sm:pt-12">
        <div className="max-w-7xl  px-6  m-auto">
          <h2 className="text-white text-3xl font-extrabold">
            Minhas Especialidades
          </h2>
          <div className="flex justify-between items-center my-4 max-[425px]:flex-col max-[425px]:items-start max-[425px]:gap-4">
            <p className="md:w-1/2">
              Soluções completas, do design à implementação, focadas em
              qualidade e escalabilidade.
            </p>
          </div>

          <div className="flex gap-6 flex-wrap max-[1260px]:justify-center">
            <InfoContainer
              Icon={MdTerminal}
              iconBg="#1A294D"
              iconColor="#135bec"
              title=" Front-end Development"
              desc=" Criação de interfaces responsivas, rápidas e interativas
                  utilizando html, CSS, JS, React e Tailwind. Foco em
                  acessibilidade e performance."
            />

            <InfoContainer
              Icon={FaMobileAlt}
              iconBg="#2C1F4C"
              iconColor="#C084FC"
              title="Mobile Development"
              desc=" Desenvolvimento de aplicativos móveis multiplataforma com
                  React Native, garantindo performance e ótima usabilidade."
            />
            <InfoContainer
              Icon={FaPencilRuler}
              iconBg="#132F35"
              iconColor="#34D399"
              title="UI/UX Design"
              desc="Design de interfaces limpas e focadas na experiência do
                  usuário. Prototipagem e tradução fiel para o código."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
