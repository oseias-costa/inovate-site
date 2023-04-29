"use client";
import React from "react";
import styled from "styled-components";
import { testimonialsData } from "./_data";
import Image from "next/image";

export default function Testimonials() {
  const testimonialItem = testimonialsData.content.map((item) => {
    return (
      <Block>
        <Icon
          src={item.icon}
          alt="O que os clintes da Consultoria da Inovate Ambiental dizem!"
        />
        <p>{item.text}</p>
        <h5>{item.client}</h5>
      </Block>
    );
  });

  return (
    <Container>
      <h2>{testimonialsData.title}</h2>
      <Blocks>{testimonialItem}</Blocks>
    </Container>
  );
}

const Container = styled.section``;

const Blocks = styled.div`
  display: flex;
`;

const Block = styled.div``;

const Icon = styled(Image)``;
