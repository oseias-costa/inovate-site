import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/images/logo-start.webp";

export default function Headline() {
  return (
    <Container>
      <Description>
        <Title>
          <ImgLogo src={Logo} alt="Logo Consultoria Inovate Ambiental" />
          <div>
            <h1>INOVAR É SER</h1>
            <h1>SUSTENTÁVEL</h1>
          </div>
        </Title>
        <Text>
          Planeje seu crescimento de forma sustentável, atenda as normas e
          encontre soluções com uma consultoria especializada.
        </Text>
      </Description>
    </Container>
  );
}

const Container = styled.section``;

const Description = styled.div``;

const Title = styled.div`
  display: flex;
`;

const Text = styled.p`
  font-size: 14pt;
`;

const ImgLogo = styled(Image)`
  width: 100px;
  height: 107.42px;
`;
