import { createSlice } from "@reduxjs/toolkit";
import { IHomeImage } from "./type";

const initialState: IHomeImage = {
  topCars: [],
};

export const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = HomePageSlice.actions;
export default HomePageSlice.reducer;
