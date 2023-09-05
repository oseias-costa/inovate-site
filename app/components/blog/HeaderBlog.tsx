import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Logo from '../../../public/images/inovate-logo.webp'
import { LinkMenu } from '../header/Menu'

export default function HeaderBlog() {
  return (
    <HeaderContainer id='inicio'>
        <Img src={Logo} alt='Logo Inovate Ambiental' />
        <Nav>
          <LinkMenu link='/' text='Início' key='Inicio'/>
          <LinkMenu link='/blog' text='Blog' key='blog'/>
        </Nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-blue);
    height: 80px;
`

const Img = styled(Image)`
    width: 200px;
    height: 42px;
`

const Nav = styled.div`
    diplay: flex;

    @media(max-width: 740px) {
        display: none;
    }
`