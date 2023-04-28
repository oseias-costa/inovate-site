import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/images/logo-start.webp";
import StartImg from "../../../public/images/img-start-pre.png";
import { data } from "./_data";
import CustomButton from "../global/CustomButton";

export default function Headline() {
  const services = data.map(item => {
    return(
      <Service key={item.id}>
        <Icon src={item.image} alt={item.text}  />
        <h5>{item.text}</h5>
      </Service>
    )
  })

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
        <Services>
          {services}
        </Services>
        <CustomButton href="#">Entre em Contato</CustomButton>
      </Description>
      <Image 
        src={StartImg} 
        alt='Inovate Ambiental - Soluções em consultoria e Assessoria ambiental' 
        width={400}
      />
    </Container>
  );
}

const Container = styled.section`
  padding-top: 56px;
  padding-bottom: 56px;
  display: flex;
  justify-content: center;
`;

const Description = styled.div`
  padding-right: 48px;
`;

const Services = styled.div`
  display: flex;
  padding-top: 60px;
  padding-bottom: 40px;
  padding-bottom: 40px;
`;

const Service = styled.div`
  padding-right: 10px;

  h5 {
    font-size: 12px;
    width: 126px;
    padding-top: 12px;
    color: var(--color-gray);
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  div > h1 {
    font-size: 34px;
  }

  div > h1:nth-child(1) {
    color: var(--color-gray);
  }

  div > h1:nth-child(2) {
    color: var(--color-blue);
  }
`;

const Text = styled.p`
  font-size: 13pt;
  max-width: 400px;
`;

const ImgLogo = styled(Image)`
  width: 100px;
  height: 107.42px;
  position: relative;
  right: 22px;
`;

const Icon = styled(Image)`
  width: 46px;
  height: 46px;
`;
