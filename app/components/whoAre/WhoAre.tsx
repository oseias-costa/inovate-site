"use client";
import React from "react";
import styled from "styled-components";
import { whoAreData } from "./_data";

export default function WhoAre() {
  return (
    <Container id='quemSomos'>
      <h2>{whoAreData.title}</h2>
      <div>
        <p>{whoAreData.text}</p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 83px;
  padding-bottom: 83px;
  text-align: center;
  
  h2 {
    color: var(--color-blue)
  }
  
  p {
    padding-top: 25px;
    margin: 0 auto;
    max-width: 740px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

