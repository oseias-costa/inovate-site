"use client";
import React from "react";
import styled from "styled-components";
import { testimonialsData } from "./_data";
import Image from "next/image";

export default function Testimonials() {
  const testimonialItem = testimonialsData.content.map((item) => {
    return (
      <Block key={item.id}>
        <Icon
          src={testimonialsData.icon}
          alt="O que os clintes da Consultoria da Inovate Ambiental dizem!"
        />
        <p>{item.text}</p>
        <h5>{item.client}</h5>
      </Block>
    );
  });

  return (
    <Container id='depoimentos'>
      <h2>{testimonialsData.title}</h2>
      <Blocks>{testimonialItem}</Blocks>
    </Container>
  );
}

const Container = styled.section`
  padding-bottom: 83px;

  h2 {
    color: var(--color-blue);
    text-align: center;
  }
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Block = styled.div`
  max-width: 400px;
  margin: 50px;

  h5 {
    color: var(--color-gray);
    padding-top: 20px;
  }

  @media(max-width: 600px){ 
    margin: 30px;
  }
`;

const Icon = styled(Image)`
  width: 76px;
  height: 76px;
`;

