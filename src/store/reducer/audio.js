import { createSlice } from '@reduxjs/toolkit';

export const audioSlice = createSlice({
	name: 'audio',
	initialState: {
		selectedAudio: {},
		playlist: [],
		playingShowId: null,
		radioShowState: {},
		clodcastDetails: {
			title: null,
			author: null,
			cover: null,
		},
		mode: {
			isOpen: false,
			changeMode: false,
		},
		holdProgressBar: {
			holding: false,
			activeBar: false,
		},
		recordsPlayer: {
			nowPlaying: false,
			progress: 0,
			duration: 0,
			load: false,
		},
		positionTooltip: {
			translate: 0,
			barWidth: 0,
		},
	},
	reducers: {
		setAudioState: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
		setRadioShowState: (state, action) => {
			return {
				...state,
				radioShowState: {
					playingShowId: action.payload,
				},
			};
		},
		setClodcastDetails: (state, action) => {
			console.log(action.payload);
			return {
				...state,
				clodcastDetails: {
					...action.payload,
				},
			};
		},
		setMode: (state, action) => {
			return {
				...state,
				mode: {
					...action.payload,
				},
			};
		},
		setHoldProgressBar: (state, action) => {
			return {
				...state,
				holdProgressBar: {
					...action.payload,
				},
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setAudioState,
	setRadioShowState,
	setClodcastDetails,
	setMode,
	setHoldProgressBar,
} = audioSlice.actions;

export default audioSlice.reducer;
