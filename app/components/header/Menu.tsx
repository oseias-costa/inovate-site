import React from 'react'
import styled from 'styled-components'

export default function Menu() {
  return (
        <Nav>
           <LinkMenu link='#Servicos' text='Serviços' />
           <LinkMenu link='#QuemSomos' text='Quem somos' />
           <LinkMenu link='#Contato' text='Contato' />
           <LoginButton href='#'>Entrar</LoginButton>
        </Nav>
  )
}

const Nav = styled.div`
    diplay: flex;
`

type LinkMenuProps = {
    text: string,
    link: string
}

const LinkMenu = ({text, link}: LinkMenuProps) => <Li href={link}>{text}</Li>

const Li = styled.a`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: var(--font-geometos);
    color: #FFF;
    font-size: 12px;
`

const LoginButton = styled(Li)`
    background-color: #FFF;
    color: var(--color-blue);
    margin-left: 20px;
`