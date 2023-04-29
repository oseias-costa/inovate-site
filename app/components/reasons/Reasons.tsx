"use client";
import React from "react";
import styled from "styled-components";
import { reasonsData } from "./_data";
import Image from "next/image";

export default function Reasons() {
  const itemReason = reasonsData.content.map((item) => {
    return (
      <Block key={item.id}>
        <Icon src={reasonsData.icon} />
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
    </Container>
  );
}

const Container = styled.section``;

const Content = styled.div``;

const Blocks = styled.div``;

const Block = styled.div`
  display: flex;
`;

const Img = styled(Image)``;

const Icon = styled(Image)``;
