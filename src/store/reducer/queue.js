import { createSlice } from '@reduxjs/toolkit';

export const queueSlice = createSlice({
	name: 'queue',
	initialState: {
		queue: [],
	},
	reducers: {
		setQueue: (state, action) => {
			return {
				...state,
				queue: action.payload,
			};
		},
		removeFromQueue: (state, action) => {
			let queue = [...state.queue];

			queue.splice(action.payload, 1);

			return {
				...state,
				queue,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { setQueue, removeFromQueue } = queueSlice.actions;

export default queueSlice.reducer;
