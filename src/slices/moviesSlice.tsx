import { createSlice } from "@reduxjs/toolkit/react";

const moviesSlice = createSlice({
  // Name is the name of collection..
  name: "movies",
  // Inital value of global state..
  initialState: { moviesData: [] },
  // Functions for updating global state within this slice..
  reducers: {
    updateMovies: (state, actions) => {
      // let payloadData: any = actions.payload;
      // state.name = payloadData.name;

      let payloadData = actions.payload;
      state.moviesData = payloadData.moviesData;
    },
  },
});

export default moviesSlice;
