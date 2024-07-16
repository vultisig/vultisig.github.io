"use server"

import { NavBar } from "./shared-components/NavBar";
import { Footer } from "./shared-components/Footer";
import Home from "./(pages)/Home/page";


export default async function Main() {
  return (
    <main>
      <div className="content">
        <div className="container">
          <NavBar />
          <Home />
          <Footer />
        </div>
      </div>
    </main>
  );
}
