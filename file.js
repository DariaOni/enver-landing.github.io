function checkboxClick(event) {
	console.log(event.target.checked);
	let status = event.target.checked;
	let elements = document.getElementByClassName('price');
	if (status === false) {
		elements = '';
	}
}
