"use client";
import React from "react";
import styled from "styled-components";
import { clientsData } from "./_data";
import Image, { StaticImageData } from "next/image";

type ClientsProps = {
        id: string;
        name: string;
        image: StaticImageData;
}

export default function Clients() {
    const logoClient = clientsData.content.map((item: ClientsProps) => {
        return <Img src={item.image} alt={item.name} key={item.id} />  
    })

  return (
    <Container>
        <p>{clientsData.description}</p>
        <Blocks>{logoClient}</Blocks>
    </Container>
  )
}

const Container = styled.section`
    text-align: center;

    p:nth-child(1) {
        padding-bottom: 12px;

        @media(max-width: 740px) {
            font-size: 10pt;
        }
    }
`

const Blocks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: var(--color-gray-medium);
`

const Img = styled(Image)`
    margin: 30px;
    width: 130px;
    height: 56.52px;
    filter: grayscale(100%);
    transition: 0.2s linear;

    &:hover {
        filter: grayscale(0%);
    }

    @media(max-width: 740px) {
        width: 50px;
        height: 21.73px;
        margin: 15px;
    }
`;