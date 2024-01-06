import React from "react";
import Header from "../header";
import Footer from "../footer";
import { HomeContainer } from "./home.style";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <div className="text-xl">hello</div>
      <Footer />
    </HomeContainer>
  );
}
