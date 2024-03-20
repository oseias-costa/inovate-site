"use client";
import Image from "next/image"
import Cover from '@/public/images/cover.png'
import Header from "@/app/components/header/Header"
import styled from "styled-components";
import Footer from "@/app/components/footer/Footer";

export default function Burgundy(){
    return (
      <>
        <Header />
        <Container>
          <div>
          <Img src={Cover} alt="Contentor Bordô" width={560} />
            <Title>Contentor Bordô</Title>
            <Text>
              No contentor Bordô você pode colocar suas lâmpadas de led, lâmpadas incandescentes, lâmpadas de mercúrio, etc. Segregue da maneira correta e
              contribua para um futuro mais sustentável.
            </Text>
            </div>
            <Iframe
                src="https://www.youtube.com/embed/IpM6FfcvYew?si=z1qpjhSDbMl647XL" 
                title="Contentor Bordô - Resíduo Certo Inovate Ambiental" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"    
            ></Iframe>
        </Container>
        <Footer />
      </>
    );
}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    flex-wrap: wrap;
    @media(max-width: 560px){
        flex-direction: column;
        width: 100%;
        margin-top: 15px;
        border-radius: 0px;
    }
`

const Title = styled.h1`
    color: #800000;
    font-size: 32px;
    padding-top: 20px;
    @media(max-width: 560px){
        font-size: 24px;
        width: 100%;
        text-align: center;
        text-align: center;
    }
`

const Text = styled.p`
    width: 560px;
    padding-top: 15px;
    position: relative;
    padding-bottom: 20px;
    @media(max-width: 560px){
        padding-bottom: 0px;
        width: 100%;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        top: 340px;
    }
`

const Img = styled(Image)`
    width: 560px;
    @media(max-width: 560px){
        width: 100%;
        height: auto;
    }
`

const Iframe = styled.iframe`
    width: 560px;
    height: 315px;
    position: relative;
    margin-left: 20px;
    margin-right: 20px;
    @media(max-width: 560px){
        margin: 0;
        width: 100%;
        border-radius: 15px;
        bottom: 90px;
        padding-left: 20px;
        padding-right: 20px;
    }
`