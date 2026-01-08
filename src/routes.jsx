import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <About /> },
      { path: "/contato", element: <ContactUs /> },
      { path: "/projetos", element: <Projects /> },
    ],
  },
]);

export { router };
