import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
	name: 'datetime',
	initialState: {
		currentDate: new Date().toDateString(),
	},
	reducers: {
		setDate(state, action) {
			state.currentDate = action.payload;
		},
	},
});

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;