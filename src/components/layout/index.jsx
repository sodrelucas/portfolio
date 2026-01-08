import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

import { ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
