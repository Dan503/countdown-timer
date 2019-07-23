
export function minutes(n){
	const action = n < 0 ? 'ceil' : 'floor';
	return Math[action](n / 1000 / 60);
}

export function seconds(n){
	return Math.floor(n / 1000);
}
