"use server";

import { NavBar } from "./shared-components/NavBar";
import { Footer } from "./shared-components/Footer";
import Home from "./(pages)/home/page";

export default async function Main() {
  return (
    <div className="home-page">
      <div className="content">
        <div className="container">
          <NavBar />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}
