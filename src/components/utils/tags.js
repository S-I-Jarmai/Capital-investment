import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px;
  @media screen and (max-width: 1200px) {
    padding: 80px;
  }
  @media screen and (max-width: 800px) {
    padding: 60px;
  }
  @media screen and (max-width: 600px) {
    padding: 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.6rem;
  }
`;

export const Content = styled.section`
  font-size: 3rem;
  margin: 60px 0;
  @media screen and (max-width: 1200px) {
    font-size: 2.4rem;
    margin: 40px 0;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
    margin: 20px 0;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;