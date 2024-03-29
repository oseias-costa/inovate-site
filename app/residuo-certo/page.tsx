"use client";
import styled from "styled-components";
import Image from "next/image";
import Header from "../components/header/Header";
import Cover from "@/public/images/cover.png";
import { data } from "./_components/data";
import Footer from "../components/footer/Footer";
import IconCollector from "./_components/IconCollector";

export default function ContentorVermelho(){
    const items = data.map((item) => (
      <Item
        color={item.color}
        description={item.description}
        title={item.title}
        url={item.url}
        key={item.color}
      />
    ));

    return (
        <>
            <Header />
            <Container>
                <Img src={Cover} alt="Contentor Preto" width={560} />
                {items}
            </Container>
            <Footer />
        </>
    )
}

const Item = ({title, url, color, description}:{title: string, url: string, color: string, description: string}) => {
    return(
        <ItemContainer href={url} color={color}>
            <IconCollector color={color} />
            <div>
                <h2>Contentor {title}</h2>
                <p>{description}</p>
            </div>
        </ItemContainer>
    )
}

const ItemContainer = styled.a<{color: string}>`
    width: 560px;
    padding: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    display: flex;
    transition: .2s linear;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    div {
        padding-left: 10px;
    }

    div > h2 {
        color:  ${props => props.color};
        padding-bottom: 5px;
        font-size: 18px;
    }

    @media(max-width: 560px){
        width: calc(100% - 20px);
        height: auto;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.64) 0px 3px 8px;
        box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px;
    }
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
`

const Img = styled(Image)`
    width: 560px;
    margin-top: 10px;
    margin-bottom: 20px;
    height: auto;
    @media(max-width: 560px){
        width: 100%;
        height: auto;
        padding-left: 10px;
        padding-right: 10px;
    }
`