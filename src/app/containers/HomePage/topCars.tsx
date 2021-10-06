import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import carService from "../../services/carService";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`;

const CarsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        justify-center
        mt-7
        md:mt-10
    `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);

  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    const cars = await carService.getCars().catch((err) => {
      console.log("error: ", err);
    });
    console.log("cars? ", cars);
    if (cars) {
      setTopCars(cars);
    }
  };

  useEffect(() => {
    fetchTopCars();
  });

  const testCar: ICar = {
    name: "Audi TT",
    mileage: "3k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };
  const testCar1: ICar = {
    name: "Honda Civic type-R 2015",
    mileage: "16k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 40,
    monthlyPrice: 1000,
    gearType: "Auto",
    gas: "Petrol",
  };
  const cars = [
    <Car {...testCar} />,
    <Car {...testCar1} />,
    <Car {...testCar1} />,
    <Car {...testCar} />,
    <Car {...testCar1} />,
  ];
  const numberOfDots = isMobile ? cars.length : Math.round(cars.length / 2);
  return (
    <TopCarsContainer>
      <Title>Explore os Carros</Title>
      <CarsContainer>
        <Carousel
          onChange={setCurrent}
          value={current}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
