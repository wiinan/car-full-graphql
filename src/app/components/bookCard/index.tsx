import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../marginer/index";
import { Button } from "../button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
    `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative`}
`;
const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3

    `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-2
  `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
    `}
`;
const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-500
    mr-2
    ml-2
    md:mr-5
    md:ml-5
    `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 2em;
  left: -3em;
  user-select: none;
  ${({ offset }: any) =>
    offset &&
    css`
      left: -2em;
    `}
  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
  as any
`;

export function BookCard() {
  const [startDate, setStateDate] = useState(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);
  const ToggleCalendarHandler = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen === true) setIsReturnCalendarOpen(false);
  };
  const toggleReturnCalendar = () => {
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen === true) setIsStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon onClick={ToggleCalendarHandler}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={ToggleCalendarHandler}>Data Inicial</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStateDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon onClick={toggleReturnCalendar}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Data Final</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Pesquisar no Catalogo" />
    </CardContainer>
  );
}
