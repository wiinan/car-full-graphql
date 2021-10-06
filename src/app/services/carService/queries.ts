import gql from "graphql-tag";

export const GET_ALL_CARS = gql`
  query GetCars {
    cars {
      id
      name
      monthlyPrice
      dialyPrice
      gas
      mileage
      gearType
      thumbnailUrl
    }
  }
`;
