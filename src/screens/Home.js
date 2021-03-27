import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Greetings } from "../components/Greetings";
import { SocialMedia } from "../components/SocialMedia";

export const Home = () => {
  return (
    <>
      <Header />
      <Greetings />
      <SocialMedia />
      <Footer />
    </>
  );
};
