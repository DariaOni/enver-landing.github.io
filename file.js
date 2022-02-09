function checkboxClick(event) {
	console.log(event.target.checked);

	let status = event.target.checked;

	let elements = document.getElementsByClassName('price');
	for (let i = 0; i < elements.length; i++) {
		if (!status) {
			elements[i].innerText = `$${+elements[i].innerText.slice(1) * 12}`;
		} else {
			elements[i].innerText = `$${+elements[i].innerText.slice(1) / 12}`;
		}
	}

	let period = document.getElementsByClassName('period');
	for (let i = 0; i < period.length; i++) {
		if (!status) {
			period[i].innerText = 'per user, per year';
		} else {
			period[i].innerText = 'per user, per month';
		}
	}
}
