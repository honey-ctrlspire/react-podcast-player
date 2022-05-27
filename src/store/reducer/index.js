import { combineReducers } from 'redux';
import audio from './audio';
import clodcastDetails from './clodcastDetails';
import holdProgressBar from './holdProgressBar';
import mode from './mode';
import queue from './queue';
import player from './player';
import positionTooltip from './positionTooltip';
import radioShowsQueue from './radioShowsQueue';
import radioShowState from './radioShowState';
import recordsPlayer from './recordsPlayer';

const rootReducer = combineReducers({
	audio,
	clodcastDetails,
	holdProgressBar,
	mode,
	queue,
	player,
	positionTooltip,
	radioShowsQueue,
	radioShowState,
	recordsPlayer,
});

export default rootReducer;
