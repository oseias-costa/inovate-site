"use client";
import React from "react";
import styled from "styled-components";
import { contactData } from "./_data";
import Image from "next/image";

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
    <Container id='contato'>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.1040563043957!2d-52.409042625952196!3d-28.264861451050393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2bf7f2ab33c21%3A0x567de88c0db9cca9!2sR.%20Gen.%20Os%C3%B3rio%2C%201148%20-%20Centro%2C%20Passo%20Fundo%20-%20RS%2C%2099010-140!5e0!3m2!1spt-BR!2sbr!4v1682876761223!5m2!1spt-BR!2sbr" 
          loading="lazy" 
          >
        </Iframe>
        <Blocks>
          <h2>{contactData.title}</h2>
          {contactItem}
          <Location>
            <a href="https://goo.gl/maps/GE7HSwvokjBStVVh6" target='_blank'>
              <Img src={contactData.maps} alt="Localização Inovate Ambiental" />
            </a>
            <a href="https://ul.waze.com/ul?place=ChIJITyzKn-_4pQRqcy5DYzofVY&ll=-28.26486620%2C-52.40646770&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"  target='_blank'>
              <Img src={contactData.waze} alt="Localização Inovate Ambiental" />
            </a>
          </Location>
          </Blocks>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  margin-bottom: 83px;
  padding-top: 43px;

  @media(max-width: 740px) {
    margin-bottom: 40px;
  }
`;

const Blocks = styled.div`
  max-width: 380px;
  padding-left: 50px;

  h2 {
    color: var(--color-gray);

    @media(max-width: 740px) {
      text-align: center;
    }
  }

  @media(max-width: 740px) {
    padding-bottom: 40px;
    padding-left: 0px;
  }
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;

  p {
    padding-left: 20px;

  }

  &:nth-child(5) {
    p {
      max-width: 240px;
    }
  }
`;

const Location = styled.div`
  display: flex;
  padding-top: 40px;

  a {
    &:nth-child(1) {
      margin-right: 40px;
    }
  }
`;

const Img = styled(Image)`
  width: 100px;
  height: 48.07px;
`;

const Icon = styled(Image)`
  width: 36px;
  height: 36px;
`;

const Iframe = styled.iframe`
  width: 500px;
  height: 350px;

  @media(max-width: 740px){
    padding-left: 20px;
    padding-right: 20px;
  }
`