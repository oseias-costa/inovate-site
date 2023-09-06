import { PrismicNextImage } from "@prismicio/next";
import styled from "styled-components";

export const BlogPostList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 43px;
    padding-bottom: 43px;

    h1 {
        color: var(--color-gray);
        padding-bottom: 20px;
    }
`

export const BlogLink = styled.div`
    display: flex;
    margin: 20px;
    width: 700px;
    padding: 15px;
    border-radius: 5px;
    transition: .2s linear;
    
    &:hover{
        background-color: #d3d3d3;
    }

    @media(max-width: 700px){
        flex-direction: column;
        width: calc(100% - 40px);
    }
`

export const BlogLinkDescription = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--color-blue);

    .date {
        padding-top: 15px;
        font-weight: 400;
    }

    h3 {
        padding-top: 5px;
    }

    p {
        padding-top: 5px;
    }
`

export const ImgCover = styled(PrismicNextImage)`
    width: 200px;
    height: 100px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 5px;

    @media(max-width: 700px){
        width: 100%;
        margin-bottom: 5px;
    }
`