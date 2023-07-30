import React from "react";
import Header from "../../components/Header/Header";
import Parallaxsection from "../../components/Parallex/parallexcontainer/Parallaxsection";
import ArticlepartTop from "../../components/ArticlepartTop/ArticlepartTop";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import Article2 from "../../components/Article2/Article2";
import Servises from "../../components/Servises/Servises";
import Parallex2 from "../../components/Parallex2/Parallex2";
import Portfolio from "../../components/Portfolio/Portfolio";
import Article3 from "../../components/Article3/Article3";
import Speech from "../../components/Speech/Speech";
import Team from "../../components/Team/Team";
import Contactus from "../../components/Contactus/Contactus";
import Footer from "../../components/Footer/Footer";
export default function Index() {
  return (
    <>
      <Header />
      <Parallaxsection />
      <ArticlepartTop />
      <LogoSlider />
      <Article2 />
      <Servises />
      <Parallex2 />
      <Portfolio />
      <Article3 />
      <Speech />
      <Team />
      <Contactus />
      <Footer />
    </>
  );
}
