import { IoIosMail } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

export default function ContactUs() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lpf0u4b",
        "template_6a2m2ij",
        formRef.current,
        "EQDvqAUvE3lp1iCQQ"
      )
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          e.target.reset();
        },
        () => {
          toast.error("Erro ao enviar. Tente novamente.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  return (
    <div className="max-w-7xl  px-6 gap-8  flex m-auto max-lg:gap-0 max-lg:flex-col">
      <div className="w-full lg:w-2/5">
        <div className="cursor-default mt-16 mb-4 w-fit border items-center flex gap-2 border-[#135bec63] px-3 rounded-2xl text-[#135BEC] h-7 font-semibold bg-[#135bec31] transition-colors duration-300 hover:bg-[#5c8ff531] max-sm:mt-8">
          <span className="text-2xl">•</span>
          <span className="text-[.8rem]">DISPONÍVEL PARA PROJETOS</span>
        </div>

        <h1 className="text-4xl max-w-[15ch] text-white font-extrabold mb-4">
          Vamos construir algo incrível.
        </h1>
        <p className="max-w-[50ch] -tracking-tight leading-6.5 mb-12">
          Tem uma ideia de projeto, precisa de uma consultoria técnica ou quer
          apenas trocar uma ideia? Preencha o formulário ou me encontre nas
          redes abaixo.
        </p>
        <span className="uppercase font-bold text-white/80">
          Outras formas de contato
        </span>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=devsoares.lucas@gmail.com"
          target="_blank"
          className=" mt-6 flex justify-between items-center bg-[#192233] p-4 rounded-lg border border-[#324467] hover:border-[#5773ac] cursor-pointer transition-colors duration-300 w-full text-start "
        >
          <div className="flex items-center gap-4">
            <IoIosMail className="text-3xl text-[#135bec] " />
            <div className="flex flex-col font-medium">
              E-mail
              <span className="text-white font-bold">
                devsoares.lucas@gmail.com
              </span>
            </div>
          </div>
          <FiArrowUpRight className="text-3xl" />
        </a>
        <div className="w-full flex justify-between gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/lusoares"
            target="_blank"
            className="flex items-center gap-4 bg-[#192233] p-4 rounded-lg border border-[#324467] hover:border-[#5773ac] cursor-pointer transition-colors duration-300 w-2/4 text-start"
          >
            <FaLinkedin className="text-3xl  text-white/80" />
            <div className="flex flex-col ">
              <span className="font-bold text-white">LinkedIn</span> Conectar
            </div>
          </a>
          <a
            href="https://github.com/sodrelucas"
            target="_blank"
            className="flex items-center gap-4 bg-[#192233] p-4 rounded-lg border border-[#324467] hover:border-[#5773ac] cursor-pointer transition-colors duration-300 w-2/4 text-start"
          >
            <FaGithub className="text-3xl text-white/80" />
            <div className="flex flex-col">
              <span className="font-bold text-white">GitHub</span> Seguir
            </div>
          </a>
        </div>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="lg:w-3/5 max-lg:mb-12 flex flex-col bg-[#192233] rounded-lg mt-22 p-8 border border-[#324467]"
      >
        <div className="flex gap-4 lg:gap-8 max-lg:flex-col">
          <label className="w-full">
            <span className="text-white">Nome</span>
            <div className="mt-1 w-full flex items-center gap-3 p-2 bg-[#101622] border border-[#324467] rounded-sm">
              <FaUser />
              <input
                className="outline-none"
                type="text"
                name="user_name"
                required
                placeholder="Seu nome completo"
              />
            </div>
          </label>

          <label className="w-full ">
            <span className="text-white">E-mail</span>
            <div className="mt-1 w-full flex items-center gap-3 p-2 bg-[#101622] border border-[#324467] rounded-sm">
              <MdAlternateEmail />
              <input
                className="outline-none"
                type="email"
                name="user_email"
                required
                placeholder="seu@email.com"
              />
            </div>
          </label>
        </div>
        <label className="mt-4 flex flex-col gap-1">
          <span className="text-white ">Assunto</span>
          <select
            name="subject"
            className="outline-none bg-[#101622] p-2 border border-[#324467] rounded-sm "
          >
            <option>Orçamento de Projeto</option>
            <option>Consultoria</option>
            <option>Oportunidade de Trabalho</option>
            <option>Outro</option>
          </select>
        </label>
        <label className="mt-4">
          <span className="text-white">Mensagem</span>
          <textarea
            name="message"
            class="mt-1  w-full min-h-35 rounded-lg bg-[#101622] p-4 outline-none"
            placeholder="Descreva seu projeto ou dúvida..."
          ></textarea>
        </label>
        <button
          type="submit"
          className="mt-6 relative w-fit px-5 py-1.5 font-bold text-white rounded bg-[#135bec] cursor-pointer transition-colors duration-300 hover:bg-[#2568ee]  max-[426px]:w-full"
        >
          <span className="absolute inset-0 rounded bg-[#135bec] blur-md opacity-40 -z-10"></span>
          <span className="flex items-center justify-between gap-4 ">
            Enviar Mensagem <IoMdSend />
          </span>
        </button>
      </form>
    </div>
  );
}
