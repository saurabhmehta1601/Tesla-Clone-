import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    isOpen: false,
  },
};

const sidebarSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    closeSidebar: (state) => {
      state.sidebar.isOpen = false;
    },
    openSidebar: (state) => {
      state.sidebar.isOpen = true;
    },
  },
});

export default sidebarSlice.reducer;
export const { closeSidebar, openSidebar } = sidebarSlice.actions;
