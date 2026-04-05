const input = document.getElementById('search-input')
const li = document.getElementsByTagName('li')

input.addEventListener('input', () => {
	const value = input.value.toLowerCase()
	for (let i = 0; i < li.length; i++) {
		const text = li[i].textContent.toLowerCase()
		if (text.includes(value)) {
			li[i].hidden = false
		} else {
			li[i].hidden = true
		}
	}
})
