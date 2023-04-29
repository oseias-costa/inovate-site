"use client";
import React from "react";
import styled from "styled-components";
import { whoAreData } from "./_data";
import Image from "next/image";

export default function WhoAre() {
  return (
    <Container>
      <h2>{whoAreData.title}</h2>
      <p>{whoAreData.text}</p>
    </Container>
  );
}

const Container = styled.section``;
