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
        <Container>
            <h2>{servicesData.title}</h2>
            <Blocks>{itemService}</Bloks>
        </Container>
    )
}

const Container = styled.section``;

const Blocks = styled.div`
    display: flex;
`;

const Block = styled.div`
`;

const Icon = styled(Image)``;