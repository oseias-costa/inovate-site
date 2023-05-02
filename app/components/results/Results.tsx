"use client";
import React from "react";
import styled from "styled-components";
import { resultsData } from "./_data";

export default function Results() {
  const resultsItem = resultsData.map((item) => {
    return (
      <Block>
        <h3>{item.number}</h3>
        <p>{item.text}</p>
      </Block>
    );
  });

  return <Container>{resultsItem}</Container>
}

const Container = styled.section`
  background-color: var(--color-blue);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Block = styled.div`
  max-width: 230px;
  text-align: center;
  margin: 50px;

  h3 {
    color: #fff;
    font-size: 24pt;
  }

  p {
    color: #fff;
    font-size: 14pt;
  }
`;
