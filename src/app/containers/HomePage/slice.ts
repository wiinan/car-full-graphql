import { createSlice } from "@reduxjs/toolkit";
import { IHomePageImage } from "./type";

const initialState: IHomePageImage = {
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
