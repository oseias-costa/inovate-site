"use client";
import React, { lazy, ReactNode, Suspense } from "react";
import styled from "styled-components";

const Header = lazy(() => import("./components/header/Header"));
const Headline = lazy(() => import("./components/headline/Headline"));

const renderLoader = () => <p>Loading...</p>;
const ComponentsLoader: ReactNode = React.createElement(renderLoader);

export default function Home() {
  return (
    <Container>
      <Suspense fallback={ComponentsLoader}>
        <Header />
        <Headline />
      </Suspense>
    </Container>
  );
}

const Container = styled.main``;
