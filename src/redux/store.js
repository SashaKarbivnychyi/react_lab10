import {configureStore} from "@reduxjs/toolkit";
import logoSlice from "./reducers/logoSlice";
import menuSlice from "./reducers/menuSlice";
import datetimeSlice from "./reducers/datetimeSlice.js";

export const store = configureStore({
	reducer: {
		logo: logoSlice,
		menu: menuSlice,
		datetime: datetimeSlice
	}
})