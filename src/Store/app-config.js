import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "appconfig",
  initialState: {
    isloading: false,
    loadingArray: [],
    shareData: null,
    notificationToken: null,
    isNotificationTokenSent: false,
  },
  reducers: {
    setLoading(state, action) {
      state.isloading = true;
      state.loadingArray = [...state.loadingArray, action.payload];
    },
    stopLoading(state, action) {
      const filetered = state.loadingArray.filter(
        (item) => item !== action.payload
      );
      state.loadingArray = filetered;
      if (state.loadingArray.length === 0) {
        state.isloading = false;
      }
    },
    setShareData(state, action) {
      state.shareData = action.payload;
    },
    notificationToken(state, action) {
      state.notificationToken = action.payload;
      state.isNotificationTokenSent = true;
    },
  },
});

export const { setLoading, stopLoading, setShareData, notificationToken } =
  configSlice.actions;

export default configSlice;
