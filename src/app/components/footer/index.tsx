import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    justify-center
    `}
`;

const BottomContainer = styled.div`
  ${tw`
    flex
    min-w-full
    justify-center
    pt-5
    pb-2
  `}
`;

const CopyrightContainer = styled.small`
  font-size: 11px;
  ${tw`
    text-gray-400
  `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pr-0
    mt-7  
    md:mt-0
  `}
`;

const AboutText = styled.div`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `}
  & > a {
    ${tw`
      text-xs
      text-white
      transition-all
      hover:text-gray-500
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-extrabold
    text-white
    mb-3
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const SmallText = styled.div`
  ${tw`
    text-sm
    text-white
  `}
`;

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark"></Logo>
          <AboutText>
            Yourcar é uma empresa de compra e venda de carros localizado em
            varios estados do mundo, com uma grande quantidade de carros com os
            serviços mais tops
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Outros Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">Sobre nos</a>
            </ListItem>
            <ListItem>
              <a href="#">Serviços</a>
            </ListItem>
            <ListItem>
              <a href="#">Modelos</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Outras Paginas</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contato</a>
            </ListItem>
            <ListItem>
              <a href="#">Suporte</a>
            </ListItem>
            <ListItem>
              <a href="#">Politica de Privacidade</a>
            </ListItem>
            <ListItem>
              <a href="#">Termos de uso</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Ligue para nós</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+99 99999-9999</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>E-mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>contact@email.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightContainer>
          Copyright &copy; {ano} YourCar. Todo Direito Reservado.
        </CopyrightContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
