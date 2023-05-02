"use client";
import React from "react";
import styled from "styled-components";
import { helpCompaniesData } from "./_data";
import Image from "next/image";
import CustomButton from "../global/CustomButton";

export default function HelpCompanies() {
  const ItemBlock = helpCompaniesData.content.map((item) => {
    return (
      <Block key={item.id}>
        <Img src={item.image} alt={item.subtitle} />
        <div className="HelpCompanies__description">
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
      <CustomButton>Saiba Mais</CustomButton>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 83px;
  padding-bottom: 83px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    color: var(--color-gray);
    padding-bottom: 33px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

`;

const Block = styled.div`
  display: flex;
  max-width: 640px;
  padding-top: 60px;
  margin-right: 40px;
  
  &:nth-child(2) {
    flex-direction: row-reverse;
    
    .HelpCompanies__description {
      padding-left: 0px;
      padding-right: 50px;
  }

  @media(max-width: 740px) {
    flex-direction: column;

    .HelpCompanies__description {
    padding-right: 0px;
    }
  }
  }

  .HelpCompanies__description {
    padding-left: 50px;
  }

  .HelpCompanies__description > h3 {
    color: var(--color-blue);
    padding-bottom: 20px;
  }

  @media(max-width: 740px) {
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    margin-right: 0px;

    .HelpCompanies__description {
    padding-left: 0px;
    text-align: center;
    padding: 20px;
    }
  }
`;

const Img = styled(Image)`
  width: 150px;
  height: 129.75px;
`;
