
export default function secondsString(seconds) {
	return typeof seconds == 'undefined' ? '00' :
	seconds < 10 ? `0${seconds}` :
	seconds
}
