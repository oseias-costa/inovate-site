import React from 'react'
import styled from 'styled-components'

export default function Menu() {
  return (
        <Nav>
           <LinkMenu link='#servicos' text='Serviços' />
           <LinkMenu link='#quemSomos' text='Quem somos' />
           <LinkMenu link='#contato' text='Contato' />
           <LoginButton href='https://inovate.netlify.app/' target='_blank'>Entrar</LoginButton>
        </Nav>
  )
}

const Nav = styled.div`
    diplay: flex;

    @media(max-width: 740px) {
        display: none;
    }
`

type LinkMenuProps = {
    text: string,
    link: string
}

export const LinkMenu = ({text, link}: LinkMenuProps) => <Li href={link}>{text}</Li>

const Li = styled.a`
    transition: 0.2s linear;
    border-radius: 5px;
    font-family: var(--font-geometos);
    color: #fff;
    font-size: 10pt;
    padding-top: 10px;
    padding-bottom: 7px;
    padding-left: 12px;
    padding-right: 12px;
    margin-right: 10px;

    &:hover {
      background-color: #fff;
      color: var(--color-blue)
    }
`

const LoginButton = styled(Li)`
    background-color: #FFF;
    border: 1px solid #FFF;
    color: var(--color-blue);
    margin-left: 20px;

    &:hover {
      background-color: var(--color-blue);
      color: #fff;
    }
`