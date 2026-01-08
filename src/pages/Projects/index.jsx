import ProjectCard from "../../components/projectCard";
import flux from "../../assets/projects/flux.gif";
import kiko from "../../assets/projects/kiko.gif";
import apr from "../../assets/projects/APR.gif";

export default function Projects() {
  return (
    <div className="max-w-7xl  px-6 gap-8  m-auto ">
      <h1 className="text-4xl mt-8 text-white font-extrabold mb-4">
        Projetos do Portfólio
      </h1>
      <p className="max-w-[55ch]">
        Uma coleção de soluções web e mobile construídas com código limpo e
        técnologias modernas.
      </p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Flux"
          description="Aplicação web de controle financeiro pessoal, criada para facilitar o acompanhamento de despesas de forma simples, prática e acessível em qualquer dispositivo."
          img={flux}
          tecnologias={[
            "React",
            "TypeScript",
            "Firebase Authentication",
            "Firestore Database",
            "CSS Modules",
          ]}
          link="https://fluxtracker.vercel.app/"
          github="https://github.com/sodrelucas/flux"
        />
        <ProjectCard
          title="Kiko - Contagem e Aposentadoria"
          description="Aplicação desktop multiplataforma desenvolvida com Electron.js e SQLite, focada na gestão de clientes e processos. Permite agendamento de reuniões, cadastro e busca rápida de clientes por CPF, gerenciamento de fases e funcionamento offline com alto desempenho."
          img={kiko}
          tecnologias={["Html", "Css", "Javascript", "Election", "Sqlite"]}
          link=""
          github=""
        />
        <ProjectCard
          title="kstb"
          description="Aplicativo mobile desenvolvido em React Native para o setor de segurança do trabalho, focado na avaliação de empresas por meio de fichas digitais. O app permite preenchimento de campos de checagem e texto, captura de imagens via câmera, coleta de assinaturas e geração automática de PDFs para registro e documentação das avaliações."
          img={apr}
          tecnologias={["React Native"]}
          link=""
          github=""
        />
      </div>
    </div>
  );
}
