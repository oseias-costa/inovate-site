import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Logo from '../../../public/images/inovate-logo.webp'

export default function Header() {
  return (
    <HeaderContainer>
        <Img src={Logo} alt='Logo Inovate Ambiental' />
        <Menu />
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
    height: 104.16px;
`