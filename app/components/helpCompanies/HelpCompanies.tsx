"use client";
import React from "react";
import styled from "styled-components";
import { helpCompaniesData } from "./_data";
import Image from "next/image";

export default function HelpCompanies() {
  const ItemBlock = helpCompaniesData.content.map((item) => {
    return (
      <Block key={item.id}>
        <Img src={item.image} alt={item.subtitle} />
        <div>
          <h3>{item.subtitle}</h3>
          <p>{item.text}</p>
        </div>
      </Block>
    );
  });

  return (
    <Container>
      <h2>{helpCompaniesData.title}</h2>
      <Blocks>{ItemBlock}</Blocks>
    </Container>
  );
}

const Container = styled.section``;

const Blocks = styled.div``;

const Block = styled.div`
  display: flex;
`;

const Img = styled(Image)``;
