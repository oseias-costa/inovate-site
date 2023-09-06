import styled from "styled-components"


export default function ButtonBackBlog(){
    return(
        <ButtonBackBlogA href='/blog'><ArrowBack /> Voltar</ButtonBackBlogA>
    )
}

const ArrowBack = () => {
    return(
        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.438 18.75 4.688 12l6.75-6.75"></path>
            <path d="M5.625 12h13.688"></path>
        </svg>
    )
}

const ButtonBackBlogA = styled.a`
    display: flex;
    align-items: center;
    padding-top: 20px;
    color: var(--color-gray);
    font-family: var(--font-roboto);

    svg {
        margin-right: 10px;
        color: var(--color-gray);
    }
`