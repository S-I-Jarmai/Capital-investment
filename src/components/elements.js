import styled from "styled-components";
import { breakpoints } from "./utils/breakPoints";



export const Title = styled.h4`
font-weight: 500;
font-size: 24px;
${breakpoints("font-size", "px", [
  { 1200: 22 },
  { 800: 20},
  { 600: 18 },
  { 450: 12 }
])};
`;

export const Wrapper = styled.div`
  padding: 100px;
  ${breakpoints("padding", "px", [
    { 1200: 80 },
    { 800: 60 },
    { 600: 40 },
    { 450: 20 }
  ])};
`;

export const Content = styled.section`
  font-size: 3rem;
  margin: 60px 0;
  ${breakpoints("font-size", "rem", [
    { 1200: 2.4 },
    { 800: 1.8 },
    { 600: 1.6 },
    { 450: 1.2 }
  ])};
  ${breakpoints("margin", "", [{ 1200: "40px 0" }, { 600: "20px 0" }])}; // apply units directly to CSS prop values
`;