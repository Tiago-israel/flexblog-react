import React from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { About } from "./components/about/About";
import { Products } from "./components/products/Products";
import { Price } from "./components/price/Price";
import { Quality } from "./components/quality/Quality";
import { NewsLetter } from "./components/newsletter/NewsLetter";
import { Footer } from "./components/footer/Footer";

export const Home = props => (
  <>
    <Header />
    <Main />
    <About />
    <Products />
    <Price />
    <Quality />
    <NewsLetter />
    <Footer />
  </>
);
