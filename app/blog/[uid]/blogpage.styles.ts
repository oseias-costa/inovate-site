import { PrismicNextImage } from "@prismicio/next";
import styled from "styled-components";

export const BlogPageContainer = styled.section`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
`

export const BlogPageContent = styled.div`
    max-width: 700px;
    margin: 0 auto;

    h1 {
        color: var(--color-gray);
        padding-bottom: 20px;
        padding-top: 30px;
    }

    p {
        padding-bottom: 10px;

        &:first-child{
            position: relative;
            top: 25px;
        }
    }
`

export const ImageBlogPage = styled(PrismicNextImage)`
    max-width: 700px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 40px; 
    margin-top: 20px; 
`