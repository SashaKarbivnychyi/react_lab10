import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
	name: "menu",
	initialState: [
        { text: "Telegram", url: "http://telegram.org" },
        { text: "Twitter", url: "http://twitter.com" },
        { text: "Instagram" }
      ]
})

export default menuSlice.reducer;