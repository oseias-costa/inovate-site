"use client";
import React, { lazy, ReactNode, Suspense, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/global/Whatsapp";
import HelpCompanies from "./components/helpCompanies/HelpCompanies";
import Reasons from "./components/reasons/Reasons";
import Results from "./components/results/Results";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import WhoAre from "./components/whoAre/WhoAre";
import { GlobalStyle } from "./GlobalStyle";

const Header = lazy(() => import("./components/header/Header"));
const Headline = lazy(() => import("./components/headline/Headline"));

const renderLoader = () => <p>Loading...</p>;
const ComponentsLoader: ReactNode = React.createElement(renderLoader);

export default function Home(){

  return (
    <Container>
      <GlobalStyle />
      <Suspense fallback={ComponentsLoader}>
        <Whatsapp />
        <Header />
        <Headline />
        <Clients />
        <HelpCompanies />
        <Reasons />
        <Services />
        <Testimonials />
        <Results />
        <WhoAre />
        <Contact />
        <Footer />
      </Suspense>
    </Container>
  );
}

const Container = styled.main``;
