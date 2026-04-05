window.onscroll = function () {
	let btn = document.getElementById('nav-button')
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		btn.style.display = 'block'
	} else {
		btn.style.display = 'none'
	}
}
