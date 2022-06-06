import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const audioSlice = createSlice({
	name: 'audio',
	initialState: {
		autoplay: true,
		clodcastDetails: {
			title: null,
			author: null,
			cover: null,
		},
		holdProgressBar: {
			holding: false,
			activeBar: false,
		},
		mode: {
			isOpen: false,
			changeMode: false,
		},
		playlist: [],
		positionTooltip: {
			translate: 0,
			barWidth: 0,
		},
		radioShowState: {},
		recordsPlayer: {
			nowPlaying: false,
			progress: 0,
			duration: 0,
			load: false,
		},
		selectedAudio: {},
		playbackRate: { text: '1.5', value: 1.5 },
	},
	reducers: {
		setPlaybackRate: (state, action) => {
			return {
				...state,
				playbackRate: action.payload,
			};
		},
		setAutoplay: (state, action) => {
			return {
				...state,
				autoplay: action.payload,
			};
		},
		setAudioState: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
		setClodcastDetails: (state, action) => {
			return {
				...state,
				clodcastDetails: {
					...state.clodcastDetails,
					...action.payload,
				},
			};
		},
		setMode: (state, action) => {
			return {
				...state,
				mode: {
					...state.mode,
					...action.payload,
				},
			};
		},
		setHoldProgressBar: (state, action) => {
			return {
				...state,
				holdProgressBar: {
					...state.holdProgressBar,
					...action.payload,
				},
			};
		},
		setRecordsPlayer: (state, action) => {
			return {
				...state,
				recordsPlayer: {
					...state.recordsPlayer,
					...action.payload,
				},
			};
		},
		setPositionTooltip: (state, action) => {
			return {
				...state,
				positionTooltip: {
					...state.positionTooltip,
					...action.payload,
				},
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setAutoplay,
	setAudioState,
	setClodcastDetails,
	setHoldProgressBar,
	setMode,
	setPositionTooltip,
	setRecordsPlayer,
	setPlaybackRate,
} = audioSlice.actions;

const rootReducer = combineReducers({
	audio: audioSlice.reducer,
});

export default rootReducer;
