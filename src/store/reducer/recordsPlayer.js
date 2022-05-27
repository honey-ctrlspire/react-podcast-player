import { createSlice } from '@reduxjs/toolkit';

export const recordsPlayerSlice = createSlice({
	name: 'recordsPlayer',
	initialState: {
		nowPlaying: false,
		progress: 0,
		duration: 0,
		load: false,
	},
	reducers: {
		setLoading: (state) => {
			return {
				...state,
				load: !state.load,
			};
		},
		setAudioPlaying: (state, action) => {
			state.nowPlaying = action.payload;
		},
		setAudioProgress: (state, action) => {
			state.progress = action.payload;
		},
		setAudioDuration: (state, action) => {
			state.duration = action.payload;
		},
		setRadioShowState: (state, action) => {
			state.playingShowId = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setLoading,
	setAudioPlaying,
	setAudioProgress,
	setAudioDuration,
	setRadioShowState,
} = recordsPlayerSlice.actions;

export default recordsPlayerSlice.reducer;
