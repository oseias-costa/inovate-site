"use client";
import React from "react";
import styled from "styled-components";
import { contactData } from "./_data";
import Icon from "next/image";

export default function Contact() {
  const contactItem = contactData.content.map((item) => {
    return (
      <Block key={item.id}>
        <Icon src={item.icon} alt={item.itemContact} />
        <p>{item.itemContact}</p>
      </Block>
    );
  });

  return (
    <Container>
      <h2>{contactData.title}</h2>
      <Blocks>{contactItem}</Blocks>
      <Location>
        <Img src={contactData.maps} alt="Localização Inovate Ambiental" />
        <Img src={contactData.waze} alt="Localização Inovate Ambiental" />
      </Location>
    </Container>
  );
}

const Container = styled.section``;

const Blocks = styled.div``;

const Block = styled.div`
  display: flex;
`;

const Location = styled.div`
  display: flex;
`;

const Img = styled(Image)``;

const Icon = styled(Image)``;
