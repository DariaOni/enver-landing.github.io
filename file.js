function checkboxClick(event) {
	console.log(event.target.checked);

	let status = event.target.checked;
	let elements = document.getElementsByClassName('price');
	console.log(elements);
	if (!status) {
		for (let i = 0; i < elements.length; i++) {
			elements[i].innerText = '$';
		}
	}
}
