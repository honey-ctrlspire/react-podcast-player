import React from 'react';

export default function Time(props) {
	function secondTime(time) {
		switch (true) {
			case time === 0:
				return '00';
			case time >= 10:
				return time;
			default:
				return `0${time}`;
		}
	}

	function makeTime(hour, minute, second) {
		const sec = secondTime(second);
		const min = secondTime(minute);

		if (hour === 0) {
			return `${minute}:${sec}`;
		}

		return `${hour}:${min}:${sec}`;
	}

	function getFullTime() {
		const { start, end } = props;
		let remaining = !end ? start : Math.abs(start - end);

		const hour = (hour) => {
			remaining -= hour * 60 * 60;
			return hour;
		};
		const minute = (minute) => {
			remaining -= minute * 60;
			return minute;
		};
		const second = () => Math.floor(remaining);

		return makeTime(
			hour(Math.floor(remaining / 3600)),
			minute(Math.floor(remaining / 60)),
			second()
		);
	}

	return <span>{getFullTime()}</span>;
}
