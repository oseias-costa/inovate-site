import React from 'react'
import styled from 'styled-components'

export default function CustomButton() {
  return (
    <Button>CustomButton</Button>
  )
}

const Button = styled.a`
    background-color: var(--color-blue);
    font-family: var(--font-geometos);
    color: #FFF;
`