
export function toMinutes(milliseconds){
	const multiplier = milliseconds < 0 ? -1 : 1;
	return Math.floor((milliseconds * multiplier) / 1000 / 60) * multiplier;
}

export function toSeconds(milliseconds){
	const multiplier = milliseconds < 0 ? -1 : 1;
	return Math.floor((milliseconds * multiplier) / 1000) * multiplier;
}

export function toMilliseconds ({minutes = 0, seconds = 0}) {
	const sec = n => parseInt(n) * 1000;
	const min = n => sec(n) * 60;
	return min(minutes) + sec(seconds);
}
