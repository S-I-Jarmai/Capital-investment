import React from 'react'
import styled from 'styled-components'
import favicon from '../../images/favicon.png'

import { breakpoints } from '../utils/breakPoints'


const Img = styled.img`
   width: 300px;
   ${breakpoints("width", "px", [
    { 1200: "250" },
    { 800: "250" },
    { 600: "250" },
    { 450: "300" }
  ])};
  height: 265px;
  ${breakpoints("height", "px", [
    { 1200: "250" },
    { 800: "250" },
    { 600: "250" },
    { 450: "150" }
  ])};
`



const SlideImages = () => {
  return (
     
      <li><Img src={favicon}/></li>     
  
  )
}

export default SlideImages
