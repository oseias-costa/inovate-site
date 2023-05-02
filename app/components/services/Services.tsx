"use client";
import React from "react";
import styled from "styled-components";
import { servicesData } from "./_data";
import Image from "next/image";

export default function Services() {
    const itemService = servicesData.content.map(item => {
        return(
            <Block key={item.id}>
                <Icon src={item.icon} alt={item.text}/>
                <h4>{item.text}</h4>
            </Block>
        )
    })
    
    return(
        <Container id='servicos'>
            <h2>{servicesData.title}</h2>
            <Blocks>{itemService}</Blocks>
        </Container>
    )
}

const Container = styled.section`
    padding-top: 83px;
    padding-bottom: 83px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: var(--color-gray);
        padding-bottom: 30px;
    }
`;

const Blocks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Block = styled.div`
    text-align: center;
    max-width: 170px;
    margin: 20px;

    h4 {
        color: var(--color-gray);
    }

    @media(max-width: 600px) {
        width: 140px;
    }
`;

const Icon = styled(Image)`
    width: 56px;
    height: 56px;
    margin-bottom: 20px;
`;