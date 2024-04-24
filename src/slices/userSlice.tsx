import { createSlice } from "@reduxjs/toolkit/react";

const userSlice = createSlice({
  // Name is the name of collection..
  name: "user",
  // Inital value of global state..
  initialState: { name: "Sujan" },
  // Functions for updating global state within this slice..
  reducers: {
    updateName: (state, actions) => {
      let payloadData: any = actions.payload;
      state.name = payloadData.name;
    },
  },
});

export default userSlice;
