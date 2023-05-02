"use client";
import React from "react";
import styled from "styled-components";
import { reasonsData } from "./_data";
import Image from "next/image";
import CustomButton from "../global/CustomButton";

export default function Reasons() {
  const itemReason = reasonsData.content.map((item) => {
    return (
      <Block key={item.id}>
        <Icon src={reasonsData.icon} alt={item.subtitle} />
        <div>
          <h3>{item.subtitle}</h3>
          <p>{item.text}</p>
        </div>
      </Block>
    );
  });

  return (
    <Container>
      <h2>{reasonsData.title}</h2>
      <Content>
        <Img
          src={reasonsData.image}
          alt="5 Motivos para contratar a Inovate Ambiental"
        />
        <Blocks>{itemReason}</Blocks>
      </Content>
      <CustomButton>Solicitar uma visita</CustomButton>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 83px;
  padding-bottom: 83px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-gray-light);

  h2 {
    color: var(--color-gray);
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 73px;
  padding-bottom: 43px;
`;

const Blocks = styled.div`
  max-width: 500px;
  margin-left: 50px;
  @media(max-width: 600px){
    margin-left: 0px;
  }
`;

const Block = styled.div`
  display: flex;
  padding-bottom: 45px;

  h3 {
    color: var(--color-blue);
    padding-bottom: 7px;
    font-size: 12pt;
  }

  p {
    font-family: var(--font-geometos);
    font-size: 10pt;
  }

  @media(max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Img = styled(Image)`
  width: 450px;
  height: 484.60px;

  @media(max-width: 1000px) {
    margin-bottom: 50px;
  }

  @media(max-width: 600px) {
    width: 100%;
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Icon = styled(Image)`
  width: 46px;
  height: 46px;
  margin-right: 30px;
`;
