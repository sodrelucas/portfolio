import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

import InfoContainer from "../../components/infoContainer";

export default function About() {
  return (
    <div className="max-w-7xl px-6 m-auto flex flex-col gap-6">
      <h1 className="text-6xl font-extrabold text-white mt-12 max-sm:mt-8">
        Sobre Mim
      </h1>
      <p className="text-lg max-w-[55ch] ">
        Desenvolvedor Front-End apaixonado por
        <span className="text-[#135BEC] font-bold"> performance</span>,
        arquitetura de software e código limpo.
      </p>
      <p className="bg-white/10 backdrop-blur-md rounded-r py-2 px-4 border-l-4 border-[#135BEC] mb-4">
        Com mais de 2 anos de experiência, transformo ideias em soluções web.
        Minha abordagem combina técnica com uma forte sensibilidade a
        experiência do usuário, garantindo que cada linha de código contribua
        para um produto final robusto, escalável e acessível.
      </p>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 flex  gap-2">
          <TfiWrite className="text-[#135BEC]" />
          Jornada Profissional
        </h2>

        <div className="relative border-l border-white/10 pl-8 space-y-14">
          <div className="relative">
            <span className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0b1220]" />
            <span className="text-md font-bold text-blue-400">
              2025 — Presente
            </span>

            <h3 className="text-xl font-semibold text-white mt-1">
              Freelancer Developer
            </h3>

            <p className="text-gray-300 mt-3 leading-relaxed">
              Desenvolvimento de aplicativo móvel para empresa do setor da saúde
              utilizando React Native, resultando em um aumento superior a 35%
              na eficiência operacional. O app conta com geração de formulários
              customizados, captura de assinaturas digitais, acesso à câmera e
              galeria de imagens, além de foco em usabilidade, segurança dos
              dados e integração com sistemas internos.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-gray-500 border-4 border-[#0b1220]" />

            <span className="text-sm text-gray-400">02/2025 — 10/2025</span>

            <h3 className="text-xl font-semibold text-white mt-1">
              Content Analyst Junior
            </h3>

            <p className="text-sm text-gray-400">The Brooklyn Brothers</p>

            <p className="text-gray-300 mt-3 leading-relaxed">
              Manutenção, otimização e evolução de sites corporativos de grande
              porte, com foco em performance, SEO e experiência do usuário.
              Participação ativa no desenvolvimento front-end, realizando
              melhorias em HTML, CSS e JavaScript, correção de bugs visuais e
              implementação de ajustes de layout. Responsável por testes
              multiplataforma, otimização de velocidade e colaboração direta com
              times de design e desenvolvimento, contribuindo para a melhoria
              contínua dos processos internos de manutenção e publicação, além
              da criação e manutenção de documentação interna para o time,
              padronizando fluxos e boas práticas.
            </p>
          </div>

          <div className="relative">
            <span className="absolute left-10.25 top-1 w-4 h-4 rounded-full bg-gray-500 border-4 border-[#0b1220]" />

            <span className="text-sm text-gray-400">01/2025 — 02/2025</span>

            <h3 className="text-xl font-semibold text-white mt-1">
              Content Analyst Assistant
            </h3>

            <p className="text-sm text-gray-400">The Brooklyn Brothers</p>

            <p className="text-gray-300 mt-3 leading-relaxed">
              Evolução para a posição de assistente, atuando de forma mais ativa
              na revisão de SEO, organização de conteúdos e validação de layouts
              e funcionalidades. Responsável por identificar e corrigir
              inconsistências visuais e problemas de navegação, além de
              colaborar com os times de design e desenvolvimento na manutenção
              de sites corporativos de grande porte.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-500 border-4 border-[#0b1220]" />

            <span className="text-sm text-gray-400">02/2024 — 01/2025</span>

            <h3 className="text-xl font-semibold text-white mt-1">
              Content Analyst Intern
            </h3>

            <p className="text-sm text-gray-400">The Brooklyn Brothers</p>

            <p className="text-gray-300 mt-3 leading-relaxed">
              Atuação como estagiário no suporte à manutenção de sites
              corporativos, realizando atualizações de conteúdo, correções
              básicas de links quebrados, imagens e ajustes visuais.
              Participação em testes multiplataforma, garantindo compatibilidade
              entre navegadores, sistemas operacionais e dispositivos, além de
              contato inicial com boas práticas de SEO e experiência do usuário.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-500 border-4 border-[#0b1220]" />

            <span className="text-sm text-gray-400">2023 — 2025</span>

            <h3 className="text-xl font-semibold text-white mt-1">
              Tecnólogo em Análise e Desenvolvimento de Sistemas
            </h3>

            <p className="text-sm text-gray-400">
              Centro Universitário UniFatecie
            </p>

            <p className="text-gray-300 mt-3 leading-relaxed">
              Formação em Análise e Desenvolvimento de Sistemas, com base em
              lógica de programação, estruturas de dados, bancos de dados e
              desenvolvimento web e mobile. Experiência acadêmica com projetos
              práticos, boas práticas de código e resolução de problemas.
            </p>
          </div>
        </div>
      </section>
      <div className="border-2 border-[#324467]  max-w-7xl p-12 text-center rounded-lg m-auto flex flex-col gap-6 bg-[#182337] w-full">
        <h3 className="text-white font-bold text-2xl">
          Em busca de novos desafios
        </h3>
        <p className="text-white/80 w-3/4 m-auto max-[426px]:w-full">
          Atualmente estou em busca de novas oportunidades profissionais que me
          permitam aplicar e expandir meus conhecimentos em desenvolvimento e
          tecnologia. Tenho interesse em posições remotas ou presenciais na
          região da Grande Florianópolis, atuando em ambientes colaborativos,
          com foco em aprendizado contínuo, entrega de valor e evolução técnica.
        </p>
        <div className="gap-3 flex justify-center max-[426px]:flex-col ">
          <button className="relative w-fit px-5 py-1.5 font-bold text-white rounded bg-[#135bec] cursor-pointer transition-colors duration-300 hover:bg-[#2568ee]  max-[426px]:w-full">
            <span className="absolute inset-0 rounded bg-[#135bec] blur-md opacity-40 -z-10"></span>
            <Link to="/contato">Vamos Conversar</Link>
          </button>
          <a
            href="https://www.linkedin.com/in/lusoares"
            target="_blank"
            className="flex items-center justify-center border px-6 rounded cursor-pointer font-semibold hover:text-[#b3c6df] transition-colors duration-300  max-[426px]:py-1.5"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
