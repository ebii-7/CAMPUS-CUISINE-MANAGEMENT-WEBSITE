import { createSlice } from "@reduxjs/toolkit";
import LikeImage from "../assets/images/like.jpg";
import HolaImage from "../assets/images/hola.jpg";
import EnjoheImage from "../assets/images/enjohe.jpg";

const initialState = {
  lounges: [
    {
      id: 1,
      name: "Like",
      description: "A luxurious lounge with a beautiful view.",
      image: LikeImage,
      rating: 4,
    },
    {
      id: 2,
      name: "Hola",
      description: "Relax with the sound of waves.",
      image: HolaImage,
      rating: 5,
    },
    {
      id: 3,
      name: "Enjohe",
      description: "Perfect for travelers looking for comfort.",
      image: EnjoheImage,
      rating: 3,
    },
  ],
  selectedLounge: null, // Added selected lounge state
};

const loungeSlice = createSlice({
  name: "lounges",
  initialState,
  reducers: {
    setSelectedLounge: (state, action) => {
      state.selectedLounge = action.payload;
    },
  },
});

export const { setSelectedLounge } = loungeSlice.actions;
export default loungeSlice.reducer;
