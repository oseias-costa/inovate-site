"use client";
import React from "react";
import styled from "styled-components";
import { footerData } from "./_data";
import Image from "next/image";

export default function Footer() {
  const midiaItems = footerData.iconsMidia.map(item => {
    return(
      <a href={item.href} key={item.id} target='_blank'>
        <Icon src={item.icon} alt={item.description} />
      </a>
    )
  })

  const menuItems = footerData.menu.map(item => {
    return <a href={item.href} key={item.id}>{item.name}</a>
  })

  return (
    <Container>
      <Block>
        <Img src={footerData.logo} alt='Logo Consultoria Inovate Ambiental' />
        <p>{footerData.email}</p>
        <p>{footerData.whatsapp}</p>
        <IconsMidia>{midiaItems}</IconsMidia>
      </Block>
      <Block>
        <Menu>
          {menuItems}
        </Menu>
      </Block>
      <Block>
        <Adress>
          <Icon src={footerData.adressIcon} alt='Endereço Consultoria Inovate Ambiental' />
          <p>{footerData.adress}</p>
        </Adress>
      </Block>
    </Container>
    )
}

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: var(--color-gray);
  padding-top: 43px;
  padding-bottom: 43px;

  @media(max-width: 740px){
    text-align: center;
  }
  `;

const Block = styled.div`
  p {
    color: #fff;  

    &:nth-child(3){
      padding-top: 5px;
    }
  }
  `;

const Img = styled(Image)`
  width: 300px;
  height: 63px;
  position: relative;
  right: 18px;
`;

const Icon = styled(Image)`
  width: 36px;
  height: 36px;
`;

const IconsMidia = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  right: 5px;

  a { 
    transition: 0.2s linear;
    border-radius: 5px;
    height: 36px;
    &:hover {
      background-color: var(--color-blue);
    }
  }

  @media(max-width: 740px){
    justify-content: center;
    padding-bottom: 23px;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  a {
    transition: 0.2s linear;
    border-radius: 5px;
    font-family: var(--font-geometos);
    color: #fff;
    font-size: 10pt;
    padding-top: 10px;
    padding-bottom: 7px;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 5px;

    &:hover {
      background-color: var(--color-blue);
    }
  }

  @media(max-width: 740px){
    padding-bottom: 23px;
    padding-left: 23px;
    padding-right: 23px;
  }
`

const Adress = styled.div`
  display: flex;

  p {
    max-width: 240px;
    padding-left: 20px;
  }
`