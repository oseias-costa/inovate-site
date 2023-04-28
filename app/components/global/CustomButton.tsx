import React from 'react'
import styled from 'styled-components'

export default function CustomButton({children, href}: {children: string, href: string}) {
  return (
    <Button href={href}>{children}</Button>
  )
}

const Button = styled.a`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 25px;
    padding-left: 25px;
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue);
    font-family: var(--font-geometos);
    color: #FFF;
    transition: 0.2s linear;
    cursor: pointer;

    &:hover {
      background: transparent;
      color: var(--color-blue);
    }
`