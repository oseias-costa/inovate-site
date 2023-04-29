"use client";
import React from "react";
import styled from "styled-components";
import { resultsData } from "./_data";

export default function Results() {
  const resultsData = resultsData.map((item) => {
    return (
      <Block>
        <h3>{item.number}</h3>
        <p>{item.text}</p>
      </Block>
    );
  });

  return (
    <Container>
      <Blocks>{resultsData}</Blocks>
    </Container>
  );
}

const Container = styled.section``;

const Blocks = styled.div`
  display: flex;
`;

const Block = styled.div``;
