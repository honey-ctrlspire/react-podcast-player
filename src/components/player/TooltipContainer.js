import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions/actionTypes';

import TooltipView from './Tooltip';

class TooltipContainer extends Component {
	constructor(props) {
		super(props);

		this.props.onMouseMove(this.handlerMouseMove);
	}

	handlerMouseMove = (evt) => {
		const translate = evt.clientX - evt.target.getBoundingClientRect().left;
		const barWidth = evt.target.getBoundingClientRect().width;

		if (translate >= 0) {
			this.props.setPostionTooltipBar({
				translate,
				barWidth,
			});
		}
	};

	render() {
		return <TooltipView {...this.props} />;
	}
}

const mapStateToProps = ({
	holdProgressBar,
	recordsPlayer,
	positionTooltip,
}) => {
	const { duration } = recordsPlayer;
	const { activeBar } = holdProgressBar;

	return {
		activeBar,
		duration,
		...positionTooltip,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPostionTooltipBar: (payload) =>
			dispatch({
				type: actionType.SET_PLAYER_POSTION_TOOLTIP_BAR,
				payload,
			}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TooltipContainer);
