/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCars
// ====================================================

export interface GetCars_cars {
  __typename: "Car";
  id: string;
  name: string;
  monthlyPrice: number;
  dialyPrice: number;
  gas: string;
  mileage: string;
  gearType: string;
  thumbnailUrl: string;
}

export interface GetCars {
  cars: GetCars_cars[];
}
