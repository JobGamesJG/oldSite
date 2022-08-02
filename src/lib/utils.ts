export function calculateAge() {
	const date = new Date(2008, 1, 21);
	const diff = Date.now() - date.getTime();
	const age = new Date(diff);

	return Math.abs(age.getUTCFullYear() - 1970);
}
